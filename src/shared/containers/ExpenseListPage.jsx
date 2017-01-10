/**
 * Created by lerayne on 09.01.17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import {fetchExpenses} from '../actions/expensesActions'

import TransactionInputPanel from '../components/TransactionInputPanel'
import TransactionsList from '../components/TransactionsList'

moment.locale('ru')

class ExpenseListPage extends Component {

    render() {

        let {transactions} = this.props

        transactions = transactions.map(ta => {
            ta.created = moment(ta.created)
            ta.updated = moment(ta.updated)
            return ta
        })

        return <div className="ExpenseListPage">
            <TransactionsList transactions={transactions} />
            <TransactionInputPanel />
        </div>
    }

    static initialize(dispatch) {
        return [dispatch(fetchExpenses())]
    }
}

//ExpenseListPage.initialActions = [1]

export default ExpenseListPage = connect(state => ({
    transactions: state.expenses.list
}))(ExpenseListPage)