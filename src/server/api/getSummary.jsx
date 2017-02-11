/**
 * Created by lerayne on 14.01.17.
 */

import {query} from '../db'

export default async function getSummary(dateFrom, dateTo) {

    dateFrom = dateFrom*1
    dateTo = dateTo*1

    const promises = [
        query(`
            SELECT SUM(value) AS value
            FROM transactions
            WHERE income = 1
                AND official_date > ?
                AND official_date < ?
        `, [dateFrom, dateTo]),

        query(`
            SELECT SUM(value) AS value
            FROM transactions
            WHERE income = 0
                AND official_date > ?
                AND official_date < ?
        `, [dateFrom, dateTo])
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