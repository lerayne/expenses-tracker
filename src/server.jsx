/**
 * Created by lerayne on 07.01.17.
 */

import express from 'express'

import configureStore from './shared/configureStore'
import generateHTML from './server/generateHTML'

// создаем центральный апп
const app = express()

// коллбек на запрос к серверу
app.use((req, res) => {

    if (req.url.indexOf('/api') == 0) {
        // выполнить api запрос
    } else {
        // создаем store (для каждого подключения store будет свой, т.к. store - это отражение
        // клиентского состояния, а не состояния всего приложения)
        const store = configureStore()

        generateHTML(store, req.url, res)
    }
})

const PORT = process.env.port || 3001

//запускаем сервер
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})