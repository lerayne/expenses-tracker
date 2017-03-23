/**
 * Created by lerayne on 23.03.17.
 */

import {query} from '../db'

export default async function getUserAuth(email) {
    const SQLQuery = `
        SELECT 
            id, 
            email, 
            password_hash 
        FROM users 
        WHERE email = ?
    `

    const dbResp = await query(SQLQuery, [email])

    if (!dbResp[0]) {
        return false
    } else {
        return dbResp[0]
    }
}