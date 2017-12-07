/**
 * Created by lerayne on 07.12.2017.
 */

import api from '../api'

export function statsPageInit(location){
    return dispatch => {

        const promises = [
            dispatch(fetchTotalStats())
        ]

        return Promise.all(promises)
    }
}

export function fetchTotalStats(){
    return {
        type: 'FETCH_TOTAL_STATS',
        promise: api.getTotalStats()
    }
}