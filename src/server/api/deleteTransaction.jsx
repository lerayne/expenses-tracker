/**
 * Created by lerayne on 29.01.17.
 */

import {query} from '../db'

export default async function deleteTransaction(id){
    const deletionResult = await query(`
        DELETE FROM transactions WHERE id = ?
    `, id)

    return {id}
}