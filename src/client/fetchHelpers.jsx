/**
 * Created by lerayne on 29.01.17.
 */

export function httpGet(url){
    return fetch(url).then(response => response.json())
}

export function httpPost(url, requestObj){
    return fetch(url, {
        method:'POST',
        headers:{'content-type':'application/json;charset=UTF-8'},
        body: JSON.stringify(requestObj)
    }).then(response => response.json())
}

export function httpDelete(url){
    return fetch(url, {
        method:'DELETE'
    }).then(response => response.json())
}

export function httpPut(url, requestObj){
    return fetch(url, {
        method:'PUT',
        headers:{'content-type':'application/json;charset=UTF-8'},
        body: JSON.stringify(requestObj)
    }).then(response => response.json())
}