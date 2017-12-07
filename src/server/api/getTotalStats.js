/**
 * Created by lerayne on 08.12.2017.
 */

import {query, queryCell} from '../db'

export default async function getTotalStats() {

    const totalIncome = await queryCell('value', `
        SELECT SUM(value) AS value
            FROM transactions
            WHERE income = 1
    `)

    return {
        totalIncome
    }
}