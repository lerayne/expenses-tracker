/**
 * Created by lerayne on 29.01.17.
 */

import {parse, format} from 'url'

export function httpGet(url, params=false){

    if (params) {
        url = format({
            pathname: url,
            query: params
        })
    }

    return fetch(url, {
        credentials: "include"
    }).then(response => response.json())
}

export function httpPost(url, requestObj){
    return fetch(url, {
        method:'POST',
        credentials: "include",
        headers:{'content-type':'application/json;charset=UTF-8'},
        body: JSON.stringify(requestObj)
    }).then(response => response.json())
}

export function httpDelete(url){
    return fetch(url, {
        method:'DELETE',
        credentials: "include"
    }).then(response => response.json())
}

export function httpPut(url, requestObj){
    return fetch(url, {
        method:'PUT',
        credentials: "include",
        headers:{'content-type':'application/json;charset=UTF-8'},
        body: JSON.stringify(requestObj)
    }).then(response => response.json())
}