/**
 * Created by lerayne on 09.01.17.
 */

import api from '../api'

export function fetchExpenses() {
    return dispatch => {
        return api.getExpenses().then(result => dispatch(fetchExpensesSuccess(result)))
    }
}

export function createTransaction(ta){
    return dispatch => {
        return api.createTransaction(ta).then(result => dispatch(createTransactionSuccess(result)))
    }
}

export function fetchExpensesSuccess(result) {
    return {
        type: 'FETCH_EXPENSES_SUCCESS',
        payload: {
            ...result
        }
    }
}

export function createTransactionSuccess(ta){
    console.log('createTransactionSuccess')
}