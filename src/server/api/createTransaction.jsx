/**
 * Created by lerayne on 14.01.17.
 */

import moment from 'moment'

import {query} from '../db'

export default async function createTransaction(ta) {

    const date = ta.date ? moment(ta.date + ' 13:00', 'YYYY.MM.DD HH.mm') : moment()

    if (!date.isValid()) {
        //todo - think of error handling
        throw 'date is invalid!'
        return false
    }

    const timestamp = date.valueOf()

    const newRow = {
        created: timestamp,
        updated: timestamp,
        official_date: timestamp,
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