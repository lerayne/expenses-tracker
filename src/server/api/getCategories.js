/**
 * Created by lerayne on 19.02.17.
 */

import {query} from '../db'

export default async function getCategories() {

    const rows = await query(`
        SELECT 
            id,
            name
        FROM categories
        ORDER BY name 
    `)

    //console.log('cats', rows)

    return {
        list: rows
    }
}