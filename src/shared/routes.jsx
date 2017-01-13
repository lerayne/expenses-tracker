/**
 * Created by lerayne on 07.01.17.
 */

import React from 'react'
import { IndexRoute, Route }  from 'react-router'
import App from './containers/App'
import TransactionsList from './containers/Transactions'
import CategoriesList from './containers/CategoriesList'

export default function routes(store) {
    return <Route component={App} path='/'>
        <IndexRoute component={TransactionsList}/>
        <Route path="categories" component={CategoriesList} />
    </Route>
}