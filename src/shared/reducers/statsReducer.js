/**
 * Created by lerayne on 08.12.2017.
 */

const initialState = {
    totalIncome: 0
}

export default function (state = initialState, action) {
    const {type, payload} = action

    if (payload !== undefined && !payload.error) {
        switch (type) {
            case 'FETCH_TOTAL_STATS_SUCCESS':
                return {
                    ...state,
                    totalIncome: payload.totalIncome*1
                }
        }
    }

    return state
}