/**
 * Created by lerayne on 08.01.17.
 */

import React from 'react'
import ReactDom from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import {Provider} from 'react-redux'
import {format as urlFormat} from 'url'

import RoutesComponent from '../shared/routes'
import renderHTML from './renderHTML'

export default function generateHTML(store, url, res) {

    // смотрим, соответсвует ли путь запроса одному из путей роутинга
    match({routes: RoutesComponent(store), location: url}, (error, redirectLocation, renderProps) => {

        if (redirectLocation) { // Если необходимо сделать redirect
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        }

        if (error) { // Произошла ошибка любого рода
            return res.status(500).send(error.message)
        }

        if (!renderProps) { // Мы не определили путь, который бы подошел для URL
            return res.status(404).send('Not found')
        }

        let promises = []

        renderProps.routes.forEach(route => {
            const component = route.component.WrappedComponent || route.component

            //todo login
            const anonymous = true

            //if static "loginRequired" field defined on a component - redirect to /login
            // todo - maybe think of another way to do that
            if (component.loginRequired && anonymous) {
                return res.redirect(302, urlFormat({pathname: '/login', query:{next: url}}))
            }

            if (component.initialize) {
                promises.push(component.initialize(store.dispatch))
            }
        })

        Promise.all(promises).then(() => {

            const componentHTML = ReactDom.renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            )

            // рендерим html, включая в него текущий state для передачи клиентскому redux
            res.end(renderHTML(componentHTML, store.getState()))
        })
    })
}