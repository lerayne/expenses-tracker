/**
 * Created by lerayne on 08.12.2017.
 */

import moment from 'moment'
import {query, queryCell, queryPlain} from '../db'

async function getTotalExpenses(dateFrom = false, dateTo = false) {

    const params = [1] //todo: pass real user!

    if (dateFrom) {
        params.push(dateFrom * 1)
    }
    if (dateTo) {
        params.push(dateTo * 1)
    }

    let totalExpenses = await queryCell(`
        SELECT SUM(value) AS value
        FROM transactions
        WHERE 
            USER = ? 
            AND income = 0
            ${dateFrom ? 'AND official_date >= ?' : ''}
            ${dateTo ? 'AND official_date <= ?' : ''}
        `,
        params
    )

    return Math.abs(totalExpenses)
}

async function getTotalByCategories(dateFrom = false, dateTo = false) {

    const params = [1] //todo: pass real user!

    if (dateFrom) {
        params.push(dateFrom * 1)
    }
    if (dateTo) {
        params.push(dateTo * 1)
    }

    // get total summary by categories
    let totalCategories = await query(`
        SELECT 
            tas.category,
            SUM(tas.value) AS value,
            cat.name
        FROM transactions AS tas
        LEFT JOIN categories AS cat ON tas.category = cat.id
        WHERE
            tas.user = ?
            AND tas.income = 0
            ${dateFrom ? 'AND tas.official_date >= ?' : ''}
            ${dateTo ? 'AND tas.official_date <= ?' : ''}
        GROUP BY tas.category
        ORDER BY cat.name    
        `,
        params
    )

    totalCategories = totalCategories.map(entry => ({
        ...entry,
        value: Math.abs(entry.value)
    }))

    return totalCategories
}

async function getTotalCategoriesByMonths() {
    const dates = await queryPlain(`
        SELECT 
            MIN(official_date) AS minDate,
            MAX(official_date) AS maxDate
        FROM transactions
        WHERE user = ?
    `, 1) //todo: real user!!!

    const minMoment = moment(dates.minDate).startOf('month')
    const maxMoment = moment(dates.maxDate).endOf('month')

    let currentMin = minMoment, currentMax
    const months = []
    while (currentMin.valueOf() < maxMoment.valueOf()) {

        currentMax = minMoment.clone().endOf('month')

        const monthData = await getTotalByCategories(
            currentMin.valueOf(),
            currentMax.valueOf()
        )

        const monthTotal = await getTotalExpenses(
            currentMin.valueOf(),
            currentMax.valueOf()
        )

        months.push({
            categories: monthData,
            total: monthTotal,
            targetMonth: minMoment.format('YYYY.MM')
        })

        currentMin = currentMin.add(1, 'months')
    }

    return months
}

export default async function getTotalStats() {

    const totalExpenses = await getTotalExpenses()
    const totalCategories = await getTotalByCategories()
    const totalsByMonths = await getTotalCategoriesByMonths()

    return {
        totalExpenses,
        totalCategories,
        totalsByMonths
    }
}