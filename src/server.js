/**
 * Created by lerayne on 07.01.17.
 */

import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import {domain} from 'config'
import createIsomorphicPage from './server/createIsomorphicPage'
import setApiListeners from './server/setApiListeners'
import login from './server/security/login'

// создаем центральный апп
const app = express()

// стандартный модуль, для парсинга JSON в запросах
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())

// раздаем статику
app.use('/public', express.static('public', {
    setHeaders: res => {
        res.set("Access-Control-Allow-Origin", "*")
    }
}))

// раздаем статику
app.use('/superpublic', express.static('superpublic', {
    setHeaders: res => {
        res.set("Access-Control-Allow-Origin", "*")
    }
}))

// post login
app.post('/login', login)

// logout
app.get('/logout', (req, res) => {
    res.clearCookie('access_token', {path:'/', domain})
    res.redirect(302, '/login')
})

// API HANDLERS
setApiListeners(app)

// коллбек на запрос к серверу (doesn't start width "/api/")
app.get(/^(?!\/api\/).*$/, createIsomorphicPage)

console.log('process.env.LISTEN', process.env.LISTEN)

const PORT = process.env.LISTEN || 3001

//запускаем сервер
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})