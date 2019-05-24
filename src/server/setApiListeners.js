/**
 * Created by lerayne on 29.01.17.
 */

import api from './api' // importing SERVER api
import checkUserAuth from './security/checkUserAuth'

async function authorized(req, res) {
    const userAuthed = await checkUserAuth(req)

    if (!userAuthed){
        res.json({
            status:401,
            error:'Unauthorized'
        })
        return false
    } else {
        return true
    }
}

async function ifAuthed(req, res, awaitable) {
    if (await authorized(req, res)){
        res.json(await awaitable())
    }
}

export default function setApiListeners(app) {

    app.get('/api/transactions',
        (req, res) => ifAuthed(req, res, () => {
            const {dateFrom, dateTo} = req.query
            return api.getTransactions(dateFrom, dateTo)
        })
    )

    app.post('/api/transaction',
        (req, res) => ifAuthed(req, res, () => api.createTransaction(req.body))
    )

    app.put('/api/transaction/:id',
        (req, res) => ifAuthed(req, res, () => api.editTransaction(req.params.id, req.body))
    )

    app.delete('/api/transaction/:id',
        (req, res) => ifAuthed(req, res, () => api.deleteTransaction(req.params.id))
    )

    app.get('/api/summary',
        (req, res) => ifAuthed(req, res, () => {
            const {dateFrom, dateTo} = req.query
            return api.getSummary(dateFrom, dateTo)
        })
    )

    app.get('/api/categories', (req, res) => ifAuthed(req, res, () => api.getCategories()))

    app.post('/api/category', (req, res) => ifAuthed(req, res, () => api.createCategory(req.body)))

    app.get('/api/stats', (req, res) => ifAuthed(req, res, () => api.getTotalStats()))

    app.get('/api/basic',(req, res) => ifAuthed(req, res, () => api.getBasicData()))
}