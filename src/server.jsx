/**
 * Created by lerayne on 07.01.17.
 */

import express from 'express'
import bodyParser from 'body-parser'

import configureStore from './shared/configureStore'
import generateHTML from './server/generateHTML'
import api from './server/api'

// создаем центральный апп
const app = express()

// стандартный модуль, для парсинга JSON в запросах
app.use(bodyParser.json())

// коллбек на запрос к серверу (doesn't start width "/api/")
app.get(/^(?!\/api\/).*$/, (req, res) => {
    // создаем store (для каждого подключения store будет свой, т.к. store - это отражение
    // клиентского состояния, а не состояния всего приложения)
    const store = configureStore()

    generateHTML(store, req.url, res)
})

// API HANDLERS

app.get('/api/transactions', async(req, res) => {
    res.json(await api.getTransactions())
})

app.post('/api/transaction', async(req, res) => {
    res.json(await api.createTransaction(req.body))
})

app.delete('/api/transaction/:id', async(req, res) => {
    const result = await api.deleteTransaction(req.params.id)
    res.json({id: req.params.id})
})

app.get('/api/summary', async(req, res) => {
    res.json(await api.getSummary())
})

const PORT = process.env.port || 3001

//запускаем сервер
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})