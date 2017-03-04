/**
 * Created by lerayne on 20.02.17.
 */

import moment from 'moment'
import {query} from '../db'

export default async function editTransaction(id, ta){

    console.log('editing', id, ta)

    id = parseInt(id, 10)

    const now = moment()

    if (!ta.date.split(' ')[1]){
        ta.date += ' 13:00'
    }

    const officialMoment = moment(ta.date, 'YYYY.MM.DD HH.mm')

    const category = parseInt(ta.category, 10)
    const income = ta.income*1
    let value = parseInt(ta.value, 10)

    if ((!income && value > 0) || (income && value < 0)){
        value *= -1
    }

    const editedTA = {
        name: ta.name,
        income,
        value,
        category: !isNaN(category) && category > 0 ? category : null,
        updated: now.valueOf(),
        official_date: officialMoment.valueOf()
    }

    console.log('editedTA', editedTA)

    try {
        const editResult = await query(`
        UPDATE transactions
        SET ?
        WHERE id = ?
    `, [editedTA, id])

        console.log('edited', id, editResult)

        return {
            ...editedTA,
            id
        }
    } catch (error){
        console.error('error in editTA', error)
    }
}