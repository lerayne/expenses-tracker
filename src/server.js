/**
 * Created by lerayne on 07.01.17.
 */

import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import configureStore from './shared/configureStore'
import createStaticPage from './server/createStaticPage'
import setApiListeners from './server/setApiListeners'
import login from './server/security/login'

// создаем центральный апп
const app = express()

// стандартный модуль, для парсинга JSON в запросах
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser())

app.use(express.static('public'))

app.post('/login', login)

app.get('/logout', (req, res) => {
    res.clearCookie('access_token', {path:'/'})
    res.redirect(302, '/')
})

// коллбек на запрос к серверу (doesn't start width "/api/")
app.get(/^(?!\/api\/).*$/, (req, res) => {

    // создаем store (для каждого подключения store будет свой, т.к. store - это отражение
    // клиентского состояния, а не состояния всего приложения)
    createStaticPage(configureStore(), req, res)
})

// API HANDLERS
setApiListeners(app)

const PORT = process.env.port || 3001

//запускаем сервер
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})