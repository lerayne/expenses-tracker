/**
 * Created by lerayne on 09.01.17.
 */

import api from '../api'
import moment from 'moment'

export function initializeTransactionsPage(){
    return (dispatch, getState) => {

        const now = moment()

        dispatch(setDateOffsets(
            now.clone().startOf('month').valueOf(),
            now.clone().endOf('month').valueOf()
        ))

        const {dateFrom, dateTo} = getState().transactions

        const promises = [
            dispatch(fetchTransactions(dateFrom, dateTo)),
            dispatch(fetchSummary(dateFrom, dateTo))
        ]

        return Promise.all(promises)
    }
}

export function setDateOffsets(dateFrom, dateTo){
    return {
        type: 'SET_DATE_OFFSETS',
        payload:{
            dateFrom,
            dateTo
        }
    }
}

export function setDateOffsetsUpdate(from, to){
    return (dispatch, getState) => {

        dispatch(setDateOffsets(from, to))

        const {dateFrom, dateTo} = getState().transactions

        const promises = [
            dispatch(fetchTransactions(dateFrom, dateTo)),
            dispatch(fetchSummary(dateFrom, dateTo))
        ]

        return Promise.all(promises)
    }
}


export function fetchTransactions(dateFrom, dateTo){
    return {
        type:'FETCH_TRANSACTIONS',
        promise: api.getTransactions(dateFrom, dateTo)
    }
}

export function createTransaction(ta){
    return (dispatch, getState) => {

        const createPromise = api.createTransaction(ta)

        dispatch({
            type: 'CREATE_TRANSACTION',
            promise: createPromise
        })

        const {dateFrom, dateTo} = getState().transactions

        createPromise.then(() => dispatch(fetchSummary(dateFrom, dateTo)))

        //todo - разобраться с возвратом промиса и очередностью действий
        return createPromise
    }
}

export function deleteTransaction(id) {
    return {
        type:'DELETE_TRANSACTION',
        promise: api.deleteTransaction(id)
    }
}

export function fetchSummary(dateFrom, dateTo) {
    return {
        type:'FETCH_SUMMARY',
        promise: api.getSummary(dateFrom, dateTo)
    }
}