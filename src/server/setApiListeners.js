/**
 * Created by lerayne on 29.01.17.
 */

import api from './api' // importing SERVER api

export default function setApiListeners(app) {

    app.get('/api/transactions',
        async(req, res) => {
            const {dateFrom, dateTo} = req.query
            console.log('query', req.query)
            res.json(await api.getTransactions(dateFrom, dateTo))
        }
    )

    app.post('/api/transaction',
        async(req, res) => res.json(await api.createTransaction(req.body))
    )

    app.put('/api/transaction/:id',
        async(req, res) => res.json(await api.editTransaction(req.params.id, req.body))
    )

    app.delete('/api/transaction/:id',
        async(req, res) => res.json(await api.deleteTransaction(req.params.id))
    )

    app.get('/api/summary',
        async(req, res) => {
            const {dateFrom, dateTo} = req.query
            res.json(await api.getSummary(dateFrom, dateTo))
        }
    )

    app.get('/api/categories',
        async(req, res) => res.json(await api.getCategories())
    )

    app.post('/api/category',
        async(req, res) => res.json(await api.createCategory(req.body))
    )
}