/**
 * Created by lerayne on 07.01.17.
 */

import { combineReducers } from 'redux';
import counter from './counterReducer';
import time from './timeReducer';
import expenses from './expensesReducer';

export default combineReducers({
    counter,
    time,
    expenses
})