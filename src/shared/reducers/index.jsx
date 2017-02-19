/**
 * Created by lerayne on 07.01.17.
 */

import { combineReducers } from 'redux'
import transactions from './transactionsReducer'
import categories from './categoriesReducer'

export default combineReducers({
    transactions,
    categories
})