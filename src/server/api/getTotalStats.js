/**
 * Created by lerayne on 08.12.2017.
 */

import {query, queryCell} from '../db'

export default async function getTotalStats() {

    const totalExpenses = await queryCell('value', `
        SELECT SUM(value) AS value
            FROM transactions
            WHERE income = 0
    `)

    let totalCategories = await query(`
        SELECT 
            tas.category,
            SUM(tas.value) AS value,
            cat.name
        FROM transactions AS tas
        LEFT JOIN categories AS cat ON tas.category = cat.id
        WHERE
            tas.income = 0
        GROUP BY tas.category    
    `)

    totalCategories = totalCategories.map(obj => {

        const {name, category, value} = obj

        return {
            name,
            category,
            value: Math.abs(value)
        }
    })


    return {
        totalExpenses,
        totalCategories
    }
}