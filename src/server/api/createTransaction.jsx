/**
 * Created by lerayne on 14.01.17.
 */

import moment from 'moment'

import {query} from '../db'

export default async function createTransaction(ta) {

    const now = moment()

    if (ta.date) {
        if (!ta.date.split(' ')[1]){
            ta.date += ' 13:00'
        }
    }

    const officialMoment = ta.date ? moment(ta.date, 'YYYY.MM.DD HH.mm') : now

    if (!officialMoment.isValid()) {
        //todo - think of error handling
        throw 'date is invalid!'
        return false
    }

    const officialTS = officialMoment.valueOf()
    const realTS = now.valueOf()
    const income = ta.income*1
    const category = parseInt(ta.category, 10)
    let value = parseInt(ta.value, 10)
    if ((!income && value > 0) || (income && value < 0)){
        value *= -1
    }

    const newRow = {
        user:1,
        name: ta.name,
        value,
        income,
        category: !isNaN(category) && category > 0 ? category : null,
        created: realTS,
        updated: realTS,
        official_date: officialTS,
    }

    const creationResponse = await query(
        `
            INSERT INTO transactions (??)
            VALUES (?)
        `, [Object.keys(newRow), Object.values(newRow)]
    )

    return {
        ...newRow,
        id: creationResponse.insertId
    }
}