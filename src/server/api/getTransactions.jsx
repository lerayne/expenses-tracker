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
            name,
            value
        FROM transactions 
        ORDER BY created DESC 
    `)

    return {
        list: rows
    }
}