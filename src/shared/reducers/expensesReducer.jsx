/**
 * Created by lerayne on 10.01.17.
 */

const initialState = {
    list:[]
}

export default function expensesReducer(state=initialState, action){
    switch(action.type){

        case 'FETCH_EXPENSES_SUCCESS':
            return {
                ...state,
                list: action.payload.list
            }

        default:
            return state
    }
}