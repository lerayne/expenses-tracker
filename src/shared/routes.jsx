/**
 * Created by lerayne on 07.01.17.
 */

import React from 'react'
import url from 'url'
import {IndexRoute, Route}  from 'react-router'
import App from './containers/App'
import TransactionsPage from './containers/TransactionsPage'
import CategoriesPage from './containers/CategoriesPage'
import LoginPage from './containers/LoginPage'

function getRedirectUrl(pathname, prevLocation = false){
    const urlObject = {
        pathname: pathname,
        query: {}
    }

    if (prevLocation){
        urlObject.query.next = prevLocation.pathname + prevLocation.search
    }

    return url.format(urlObject)
}

function redirectionsCheck(globalState, routerState, redirect){

    const {user} = globalState
    const {routes, location} = routerState

    routes.forEach(route => {
        const component = route.component.WrappedComponent || route.component

        if (component.loginRequired && user.id === -1) {
            redirect(getRedirectUrl('/login', location))
        }

        if (component.anonymousRequired && user.id !== -1) {
            // todo - подумать о том что случится, если будет переход на страницу "login"
            // не при помощи набора в адрессной строке (тогда будет простой редирект), а
            // при помощи инструментов router'а - видимо нужно перенаправить юзера откуда
            // пришел
            redirect(getRedirectUrl('/'))
        }
    })
}

export default function RoutesComponent(store) {

    const state = store.getState()

    const onEnter = function(nextRouterState, redirect){
        // only on server
        if (!process.env.BROWSER){
            redirectionsCheck(state, nextRouterState, redirect)
        }
    }

    const onChange = function(prevRouterState, nextRouterState, redirect){
        // only on client
        if (process.env.BROWSER){
            // onChange is called under query change, we want to omit this
            if (prevRouterState.location.pathname !== nextRouterState.location.pathname){
                redirectionsCheck(state, nextRouterState, redirect)
            }
        }
    }

    return <Route component={App} path='/' onEnter={onEnter} onChange={onChange}>
        <IndexRoute component={TransactionsPage}/>
        <Route path="categories" component={CategoriesPage}/>
        <Route path="login" component={LoginPage}/>
    </Route>
}