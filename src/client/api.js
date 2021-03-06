/**
 * Created by lerayne on 09.01.17.
 */

import {httpDelete, httpGet, httpPost, httpPut} from './fetchHelpers'

const api = {
    getTransactions: (dateFrom, dateTo) => httpGet('/api/transactions', {dateFrom, dateTo}),
    createTransaction: ta => httpPost('/api/transaction', ta),
    editTransaction: (id, ta) => httpPut(`/api/transaction/${id}`, ta),
    deleteTransaction: id => httpDelete(`/api/transaction/${id}`),
    getSummary: (dateFrom, dateTo) => httpGet('/api/summary', {dateFrom, dateTo}),
    getCategories: () => httpGet('/api/categories'),
    createCategory: category => httpPost('/api/category', category),
    getTotalStats: () => httpGet('/api/stats'),
    getBasicData: () => httpGet('/api/basic')
}

export default api

/*
 * Идея - сделать так, чтобы объект API ниже и функция setApiListeners работали автоматически, на
 * базе массива определений. Для этого, воможно, придется стандартизировать передаваемые в экшны
 * параметры, но главная проблема в том, что придется вручную парсить URL-плейсхолдеры типа
 * /api/transaction/:id
 *  Возможно также при помощи этой системы создавать и сами redux-экшны
 */

// массив определений:
/*const apiActions = [
    {
        method: 'get',
        url: '/transactions',
        name: 'getTransactions',
        action: 'GET_TRANSACTIONS'
    }, {
        method: 'post',
        url: '/transaction',
        name: 'createTransaction'
    }, {
        method: 'delete',
        url: '/transaction/:id',
        name: 'deleteTransaction'
    }
]

const newApi = {}

apiActions.forEach(({name, url, method}) => {
    newApi[name] = (params=[], body=false) => {

        const placeholders = url.match(/:[a-z_$][a-z0-9_$]+/ig).map(exp => exp.replace(':', ''))

        placeholders.forEach(paramName => url = url.replace(':'+paramName, params[paramName]))

        return http[method](url, body)
    }
})*/