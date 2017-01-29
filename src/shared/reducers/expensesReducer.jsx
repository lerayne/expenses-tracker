/**
 * Created by lerayne on 10.01.17.
 */

const initialState = {
    list:[],
    totalIncome:0,
    totalExpenses:0,
    expectedRemains:0
}

export default function expensesReducer(state=initialState, action){
    const {type, payload} = action

    switch(type){

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

        default:
            return state
    }
}