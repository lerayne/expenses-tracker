/**
 * Created by lerayne on 09.01.17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import {fetchExpenses, createTransaction} from '../actions/expensesActions'

import TransactionInputPanel from '../components/TransactionInputPanel'
import TransactionsList from '../components/TransactionsList'

moment.locale('ru')

class Transactions extends Component {

    static initialize(dispatch) {
        return [dispatch(fetchExpenses())]
    }

    render() {

        let {transactions, dispatch} = this.props

        transactions = transactions.map(ta => {
            ta.created = moment(ta.created)
            ta.updated = moment(ta.updated)
            return ta
        })

        return <div className="ExpenseListPage">
            <TransactionsList transactions={transactions} />

            <TransactionInputPanel
                createTransaction={ta => dispatch(createTransaction(ta))}
            />
        </div>
    }
}

//ExpenseListPage.initialActions = [1]

export default Transactions = connect(state => ({
    transactions: state.expenses.list
}))(Transactions)