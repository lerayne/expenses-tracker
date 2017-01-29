/**
 * Created by lerayne on 14.01.17.
 */

import {query} from '../db'

export default async function getSummary() {

    const promises = [
        query(`
            SELECT SUM(value) AS value
            FROM transactions
            WHERE income = 1 
        `),

        query(`
            SELECT SUM(value) AS value
            FROM transactions
            WHERE income = 0 
        `)
    ]

    const summary = await Promise.all(promises)

    const totalIncome = summary[0][0].value
    const totalExpenses = summary[1][0].value

    return {
        totalIncome,
        totalExpenses,
        expectedRemains: totalIncome + totalExpenses
    }
}