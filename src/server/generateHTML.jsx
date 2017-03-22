/**
 * Created by lerayne on 08.01.17.
 */

import React from 'react'
import ReactDom from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import {Provider} from 'react-redux'

import RoutesComponent from '../shared/routes'
import renderHTML from './renderHTML'

export default function generateHTML(store, url, res) {

    // смотрим, соответсвует ли путь запроса одному из путей роутинга
    match({routes: RoutesComponent(store), location: url}, (error, redirectLocation, renderProps) => {

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

            const {WrappedComponent} = route.component

            if (WrappedComponent != undefined && WrappedComponent.initialize) {
                //console.log('IA for', route.path, ':', route.component.WrappedComponent.initialize)
                promises.push(WrappedComponent.initialize(store.dispatch))
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