/**
 * Created by lerayne on 07.01.17.
 */

import React from 'react'
import { IndexRoute, Route }  from 'react-router'
import App from './containers/App'
import TransactionsPage from './containers/TransactionsPage'
import CategoriesPage from './containers/CategoriesPage'
import LoginPage from './containers/LoginPage'

export default function RoutesComponent(store) {
    return <Route component={App} path='/'>
        <IndexRoute component={TransactionsPage}/>
        <Route path="categories" component={CategoriesPage} />
        <Route path="login" component={LoginPage} />
    </Route>
}