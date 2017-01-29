/**
 * Created by lerayne on 09.01.17.
 */

import {httpDelete, httpGet, httpPost, httpPut} from './fetchHelpers'

const api = {
    getTransactions: () => httpGet('/api/transactions'),
    createTransaction: ta => httpPost('/api/transaction', ta),
    deleteTransaction: id => httpDelete(`/api/transaction/${id}`),
    getSummary: () => httpGet('/api/summary')
}

export default api