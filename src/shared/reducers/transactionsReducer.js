/**
 * Created by lerayne on 10.01.17.
 */

import newState from 'immutability-helper'

const initialState = {
    list: [],
    totalIncome: 0,
    totalExpenses: 0,
    expectedRemains: 0,
    dateFrom: 0,
    dateTo: 0
}

export default function expensesReducer(state = initialState, action) {
    const {type, payload} = action

    switch (type) {

        case 'SET_DATE_OFFSETS':
            return {
                ...state,
                dateFrom: payload.dateFrom,
                dateTo: payload.dateTo
            }

        case 'FETCH_TRANSACTIONS_SUCCESS':
            return {
                ...state,
                list: payload.list
            }

        case 'CREATE_TRANSACTION_SUCCESS':
            return {
                ...state,
                list: [payload, ...state.list]
            }

        case 'DELETE_TRANSACTION_SUCCESS':
            return {
                ...state,
                list: state.list.filter(item => item.id != payload.id)
            }

        case 'FETCH_SUMMARY_SUCCESS':
            const {totalIncome, totalExpenses, expectedRemains} = payload
            return {
                ...state,
                totalIncome,
                totalExpenses,
                expectedRemains
            }

        case 'EDIT_TRANSACTION_SUCCESS':
            const targetTAIndex = state.list.findIndex(ta => ta.id == payload.id)

            console.log('EDIT_TRANSACTION_SUCCESS', payload, targetTAIndex)

            if (targetTAIndex == -1) return state

            return newState(state, {list: {[targetTAIndex]: {$set: payload}}})


        default:
            return state
    }
}