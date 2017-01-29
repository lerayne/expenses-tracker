/**
 * Created by lerayne on 29.01.17.
 */

import api from './api' // importing SERVER api

export default function setApiListeners(app) {

    app.get('/api/transactions',
        async(req, res) => res.json(await api.getTransactions())
    )

    app.post('/api/transaction',
        async(req, res) => res.json(await api.createTransaction(req.body))
    )

    app.delete('/api/transaction/:id',
        async(req, res) => res.json(await api.deleteTransaction(req.params.id))
    )

    app.get('/api/summary',
        async(req, res) => res.json(await api.getSummary())
    )
}