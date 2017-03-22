/**
 * Created by lerayne on 07.01.17.
 */

import express from 'express'
import bodyParser from 'body-parser'
import bcrypt from 'bcryptjs'
import {query} from './server/db'
import url from 'url'

import configureStore from './shared/configureStore'
import generateHTML from './server/generateHTML'
import setApiListeners from './server/setApiListeners'

// создаем центральный апп
const app = express()

// стандартный модуль, для парсинга JSON в запросах
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(express.static('public'))

app.post('/login', async (req, res) => {
    function redirectToFailure(){
        res.redirect(302, url.format({pathname:'/login', query:{
            next: req.body.nextUrl,
            error: 1
        }}))
    }

    const dbResp = await query(`
        SELECT password_hash FROM users WHERE email = ?
    `, [req.body.email])

    if (!dbResp.length) {
        redirectToFailure()
    } else {
        const passwordCorrect = await bcrypt.compare(req.body.password, dbResp[0].password_hash)

        if (passwordCorrect) {
            // todo - set JWT auth!
            res.redirect(302, req.body.nextUrl || '/')
        } else {
            redirectToFailure()
        }
    }
    console.log(resp)
})

// коллбек на запрос к серверу (doesn't start width "/api/")
app.get(/^(?!\/api\/).*$/, (req, res) => {

    // создаем store (для каждого подключения store будет свой, т.к. store - это отражение
    // клиентского состояния, а не состояния всего приложения)
    generateHTML(configureStore(), req.url, res)
})

// API HANDLERS
setApiListeners(app)

const PORT = process.env.port || 3001

//запускаем сервер
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})