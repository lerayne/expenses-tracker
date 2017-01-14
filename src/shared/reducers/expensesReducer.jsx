/**
 * Created by lerayne on 10.01.17.
 */

const initialState = {
    list:[]
}

export default function expensesReducer(state=initialState, action){
    const {type, payload} = action

    switch(type){

        case 'FETCH_EXPENSES_SUCCESS':
            return {
                ...state,
                list: payload.list
            }

        case 'CREATE_TRANSACTION_SUCCESS':
            return {
                ...state,
                list: [payload, ...state.list]
            }

        default:
            return state
    }
}