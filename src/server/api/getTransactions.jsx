/**
 * Created by lerayne on 14.01.17.
 */

import {query} from '../db'

export default async function getTransactions(dateFrom, dateTo) {

    dateFrom = dateFrom*1
    dateTo = dateTo*1

    const rows = await query(`
        SELECT
            id,
            created,
            updated,
            official_date,
            category,
            name,
            income,
            value
        FROM transactions 
        WHERE user = ?
            AND official_date > ?
            AND official_date < ?
        ORDER BY official_date DESC 
    `, [
        1, // user
        dateFrom,
        dateTo
    ])

    return {
        list: rows
    }
}