/**
 * Created by lerayne on 09.01.17.
 */

import api from '../api'
import moment from 'moment'

import {fetchCategories} from './categoriesActions'

/**
 * Initialization function for TransactionsPage container.
 * note: Any initialization action must return a single promise. A "dispatch" of Thunk action
 * returns what the thunk-function returns
 *
 * @returns {function(func, func) => Promise}
 */
export function transactionsPageInit(){
    return dispatch => {

        const now = moment()

        // date is dynamic data, so it can't be moved to reducer
        dispatch(setDateOffsets(
            now.clone().startOf('month').valueOf(),
            now.clone().endOf('month').valueOf()
        ))

        return dispatch(transactionsPageLoadAll())
    }
}

/**
 * Collects all filters data from state and reloads all data for the TransactionsPage
 *
 * @returns {function(func, func) => Promise}
 */
export function transactionsPageLoadAll(){
    return (dispatch, getState) => {
        const {dateFrom, dateTo} = getState().transactions

        const promises = [
            dispatch(fetchTransactions(dateFrom, dateTo)),
            dispatch(fetchSummary(dateFrom, dateTo)),
            dispatch(fetchCategories())
        ]

        return Promise.all(promises)
    }
}

/**
 * Synchronous setter of date filter
 *
 * @param dateFrom - number
 * @param dateTo - number
 * @returns {{type: string, payload: {dateFrom: number, dateTo: number}}}
 */
export function setDateOffsets(dateFrom, dateTo){
    return {
        type: 'SET_DATE_OFFSETS',
        payload:{
            dateFrom,
            dateTo
        }
    }
}

/**
 * Async set date filter then reload all data
 *
 * @param from - number
 * @param to - number
 * @returns {function(func, func) => Promise}
 */
export function setDateOffsetsUpdate(from, to){
    return dispatch => {

        dispatch(setDateOffsets(from, to))

        return dispatch(transactionsPageLoadAll())
    }
}

/**
 * Requests transactions list
 * note: Promise action, "dispatch" returns promise which resolves when the API call is done and
 * state is changed by it's results
 *
 * @param dateFrom - number
 * @param dateTo - number
 * @returns {{type: string, promise: Promise}}
 */
export function fetchTransactions(dateFrom, dateTo){
    return {
        type:'FETCH_TRANSACTIONS',
        promise: api.getTransactions(dateFrom, dateTo)
    }
}

/**
 * Creates a new transactions
 * (tends to be client-only action)
 *
 * @param ta (transaction)
 * @returns {function(func, func) => Promise}
 */
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

/**
 * Requests transaction deletion
 * note: Promise action, "dispatch" returns promise which resolves when the API call is done and
 * state is changed by it's results
 *
 * @param id
 * @returns {{type: string, promise: Promise}}
 */
export function deleteTransaction(id) {
    return {
        type:'DELETE_TRANSACTION',
        promise: api.deleteTransaction(id)
    }
}

/**
 * Requests summary information
 * note: Promise action, "dispatch" returns promise which resolves when the API call is done and
 * state is changed by it's results
 *
 * @param dateFrom - number
 * @param dateTo - number
 * @returns {{type: string, promise: Promise}}
 */
export function fetchSummary(dateFrom, dateTo) {
    return {
        type:'FETCH_SUMMARY',
        promise: api.getSummary(dateFrom, dateTo)
    }
}