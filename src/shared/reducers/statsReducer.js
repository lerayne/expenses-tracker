/**
 * Created by lerayne on 08.12.2017.
 */

const initialState = {
    totalExpenses: 0,
    totalCategories: [],
    totalsByMonths: [],
    minYear: 1970,
    maxYear: 1970
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

            case 'FETCH_BASICS_SUCCESS':
                return {
                    ...state,
                    minYear: payload.minYear,
                    maxYear: payload.maxYear
                }
        }
    }

    return state
}