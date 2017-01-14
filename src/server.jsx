/**
 * Created by lerayne on 07.01.17.
 */

import express from 'express'
import bodyParser from 'body-parser'

import configureStore from './shared/configureStore'
import generateHTML from './server/generateHTML'

// создаем центральный апп
const app = express()

// стандартный модуль, для парсинга JSON в запросах
app.use(bodyParser.json())

// коллбек на запрос к серверу (doesn't start width "/api/")
app.get(/^(?!\/api\/).*$/, (req, res) => {
    if (req.url.indexOf('/api') != 0) {
        // создаем store (для каждого подключения store будет свой, т.к. store - это отражение
        // клиентского состояния, а не состояния всего приложения)
        const store = configureStore()

        generateHTML(store, req.url, res)
    }
})

app.post('/api/transaction', (req, res) => {
    res.json({status: 'OK', ta: req.body})
})

app.delete('/api/transaction/:id', (req, res) => {
    res.json({status: 'OK', id: req.params.id})
})

const PORT = process.env.port || 3001

//запускаем сервер
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})