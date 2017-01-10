/**
 * Created by lerayne on 08.01.17.
 */

import React from 'react'
import ReactDom from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import {Provider} from 'react-redux'

import {query} from './db'
import routes from '../shared/routes'
import renderHTML from './renderHTML'

import {incrementCounter} from '../shared/actions/counterActions'

export default async function generateHTML(store, url, res) {

    // смотрим, соответсвует ли путь запроса одному из путей роутинга
    match({routes: routes(store), location: url}, (error, redirectLocation, renderProps) => {

        if (redirectLocation) { // Если необходимо сделать redirect
            return res.redirect(301, redirectLocation.pathname + redirectLocation.search)
        }

        if (error) { // Произошла ошибка любого рода
            return res.status(500).send(error.message)
        }

        if (!renderProps) { // Мы не определили путь, который бы подошел для URL
            return res.status(404).send('Not found')
        }

        //console.log('renderProps', renderProps.routes)

        let promises = []

        renderProps.routes.forEach(route => {
            //console.log('in URL', renderProps.location.pathname, 'the path is discovered:', route.path)

            if (route.component.WrappedComponent && route.component.WrappedComponent.initialize) {
                //console.log('IA for', route.path, ':', route.component.WrappedComponent.initialize)
                promises = promises.concat(route.component.WrappedComponent.initialize(store.dispatch))
            }
        })

        Promise.all(promises).then(() => {
            const componentHTML = ReactDom.renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            )

            // рендерим html, включая в него текущий state для передачи клиентскому redux
            return res.end(renderHTML(componentHTML, store.getState()))
        })
    })
}