/**
 * Created by lerayne on 19.02.17.
 */

import api from '../api'

export function categoriesPageInit(){
    return dispatch => dispatch(fetchCategories())
}

export function fetchCategories(){
    return {
        type:"FETCH_CATEGORIES",
        promise: api.getCategories()
    }
}

export function createCategory(category) {
    return dispatch => {

        const createPromise = api.createCategory(category)

        dispatch({
            type:'CREATE_CATEGORY',
            promise: createPromise
        })

        //createPromise.then(() => dispatch(fetchCategories()))

        return createPromise
    }
}