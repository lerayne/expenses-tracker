/**
 * Created by lerayne on 09.01.17.
 */

import {query} from './db'

const api = {
    async getExpenses(){
        const rows = await query(`
            SELECT
                id,
                created,
                updated,
                name,
                value
            FROM transactions 
            ORDER BY created DESC 
            LIMIT 20
        `)

        return {
            list: rows
        }
    },

    async createTransaction(ta){

    }
}

export default api