/**
 * Created by lerayne on 08.12.2017.
 */

const initialState = {
    totalExpenses: 0,
    totalCategories: [],
    totalsByMonths: []
}

export default function (state = initialState, action) {
    const {type, payload} = action

    if (payload !== undefined && !payload.error) {
        switch (type) {
            case 'FETCH_TOTAL_STATS_SUCCESS':
                return {
                    ...state,
                    totalExpenses: payload.totalExpenses*1,
                    totalCategories: payload.totalCategories,
                    totalsByMonths: payload.totalsByMonths
                }
        }
    }

    return state
}