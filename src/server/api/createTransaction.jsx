/**
 * Created by lerayne on 14.01.17.
 */

import moment from 'moment'

import {query} from '../db'

export default async function createTransaction(ta) {

    const now = moment()

    const officialMoment = ta.date ? moment(ta.date + ' 13:00', 'YYYY.MM.DD HH.mm') : now

    if (!officialMoment.isValid()) {
        //todo - think of error handling
        throw 'date is invalid!'
        return false
    }

    const officialTS = officialMoment.valueOf()
    const realTS = now.valueOf()

    const newRow = {
        created: realTS,
        updated: realTS,
        official_date: officialTS,
        user:1,
        name: ta.name,
        value: parseInt((!ta.income ? '-' : '') + ta.value, 10),
        income: ta.income * 1
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