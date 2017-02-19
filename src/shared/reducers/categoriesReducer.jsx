/**
 * Created by lerayne on 19.02.17.
 */

const initialState = {
    list: []
}

export default function (state = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return {
                ...state,
                list: payload.list
            }

        case 'CREATE_CATEGORY_SUCCESS':
            return {
                ...state,
                list: [payload, ...state.list]
            }

        default:
            return state
    }
}