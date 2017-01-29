/**
 * Created by lerayne on 09.01.17.
 */

import api from '../api'

export function fetchTransactions(){
    return {
        type:'FETCH_TRANSACTIONS',
        promise: api.getTransactions()
    }
}

export function createTransactionOld(ta) {
    return {
        type: 'CREATE_TRANSACTION',
        promise: api.createTransaction(ta)
    }
}

export function createTransaction(ta){
    return dispatch => {

        const createPromise = api.createTransaction(ta)

        createPromise.then(() => dispatch(fetchSummary()))

        dispatch({
            type: 'CREATE_TRANSACTION',
            promise: createPromise
        })
    }
}

export function deleteTransaction(id) {
    return {
        type:'DELETE_TRANSACTION',
        promise: api.deleteTransaction(id)
    }
}

export function fetchSummary() {
    return {
        type:'FETCH_SUMMARY',
        promise: api.getSummary()
    }
}