/**
 * Created by lerayne on 08.01.17.
 */

import React from 'react'
import ReactDom from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import {Provider} from 'react-redux'

import checkUserAuth from './security/checkUserAuth'
import grantAccess from './security/grantAccess'
import RoutesComponent from '../shared/routes'
import getHTML from './getHTML'
import configureStore from '../shared/configureStore'

export default async function createStaticPage(req, res) {

    // создаем store (для каждого подключения store будет свой, т.к. store - это отражение
    // клиентского состояния, а не состояния всего приложения)
    const store = configureStore()

    const {payload: currentUser} = await checkUserAuth(req)

    if (currentUser) {
        store.dispatch({
            type: 'SET_USER',
            payload: currentUser
        })

        // todo - only reauthorize near expiration (performance)
        // todo - check ip

        // sliding - now only on static page render
        await grantAccess(req, res, currentUser)
    }

    // смотрим, соответсвует ли путь запроса одному из путей роутинга
    match({
        routes: RoutesComponent(store),
        location: req.url
    }, async (error, redirectLocation, renderProps) => {

        if (redirectLocation) { // Если необходимо сделать redirect
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        }

        if (error) { // Произошла ошибка любого рода
            return res.status(500).send(error.message)
        }

        if (!renderProps) { // Мы не определили путь, который бы подошел для URL
            return res.status(404).send('Not found')
        }

        const promises = renderProps.routes.reduce((arr, route) => {
            const comp = route.component.WrappedComponent || route.component
            if (comp.initialize){
                return arr.concat([comp.initialize(store.dispatch, renderProps.location)])
            } else return arr
        }, [])

        if (promises.length) {
            await Promise.all(promises)
        }

        const componentHTML = ReactDom.renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        )

        // рендерим html, включая в него текущий state для передачи клиентскому redux
        res.end(getHTML(componentHTML, store.getState()))
    })
}