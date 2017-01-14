/**
 * Created by lerayne on 14.01.17.
 */

import {query} from '../db'

export default async function getTransactions() {

    const rows = await query(`
        SELECT
            id,
            created,
            updated,
            official_date,
            name,
            income,
            value
        FROM transactions 
        WHERE user = ?
        ORDER BY official_date DESC 
    `, [
        1 // user
    ])

    return {
        list: rows
    }
}