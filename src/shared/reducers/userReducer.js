/**
 * Created by lerayne on 22.03.17.
 */

const initialState = {
    id: -1,
    email:'',
}

export default function userReducer(state = initialState, action) {
    const {type, payload} = action

    switch(type) {
        case 'SET_USER':
            return {
                ...state,
                id: payload.id,
                email: payload.email
            }

        default:
            return state
    }
}