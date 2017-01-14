/**
 * Created by lerayne on 14.01.17.
 */

import moment from 'moment'

import {query} from '../db'

export default async function createTransaction(ta) {

    const now = moment()

    const newRow = {
        created: now.valueOf(),
        updated: now.valueOf(),
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