/**
 * Created by lerayne on 09.01.17.
 */

import api from '../api'

export function fetchTransactions(){
    console.log('fetchTransactions')
    return {
        type:'FETCH_TRANSACTIONS',
        promise: api.getTransactions()
    }
}

export function createTransaction(ta) {
    return dispatch => {
        return api.createTransaction(ta).then(result => dispatch(createTransactionSuccess(result)))
    }
}

export function deleteTransaction(id) {
    return dispatch => {
        return api.deleteTransaction(id).then(result => dispatch(deleteTransactionSuccess(result)))
    }
}

export function fetchSummary() {
    return {
        type:'FETCH_SUMMARY',
        promise: api.getSummary()
    }
}

export function createTransactionSuccess(result) {
    console.log('createTransactionSuccess', result)
    return {
        type: 'CREATE_TRANSACTION_SUCCESS',
        payload: {
            ...result.transaction
        }
    }
}

export function deleteTransactionSuccess(result) {
    console.log('deleteTransactionSuccess', result)
    return {
        type: 'DELETE_TRANSACTION_SUCCESS'
    }
}