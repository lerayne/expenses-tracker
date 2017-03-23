/**
 * Created by lerayne on 20.02.17.
 */

import {query} from '../db'

export default async function createCategory(category) {

    const newRow = {
        name: category.name
    }

    const creationResult = await query(`
        INSERT INTO categories (??) VALUES (?)
    `, [Object.keys(newRow), Object.values(newRow)])

    return {
        ...newRow,
        id: creationResult.insertId
    }
}