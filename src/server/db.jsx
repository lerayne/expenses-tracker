/**
 * Created by lerayne on 09.01.17.
 */

import mysql from 'mysql'

const db = mysql.createConnection({
    host: '127.0.0.1',
    port:'8889',
    user: 'root',
    password: 'root',
    database: 'expenses'
})

db.connect(err => {
    if (err) {
        console.error(err)
        return null
    }

    console.log('Database connected as', db.threadId)
})

export default db

export function query(query, data=false){
    return new Promise((resolve, reject) => {

        query = mysql.format(query, data)

        //console.log('query', query)

        const params = [query]
        //if (data) params.push(data)

        params.push((err, rows) => {
            if (err) reject(err)
            if (rows) resolve(rows)
        })

        db.query(...params)
    })
}