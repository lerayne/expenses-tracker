/**
 * Created by lerayne on 09.01.17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import {fetchExpenses, createTransaction, deleteTransaction} from '../actions/expensesActions'

import TransactionInputPanel from '../components/TransactionInputPanel'
import TransactionsList from '../components/TransactionsList'

moment.locale('ru')

class TransactionsPage extends Component {

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

        const transactionsListProps = {
            transactions,
            deleteTransaction: id => dispatch(deleteTransaction(id))
        }

        const transactionInputPanelProps = {
            createTransaction: ta => dispatch(createTransaction(ta))
        }

        return <div className="ExpenseListPage">
            <TransactionsList {...transactionsListProps} />
            <TransactionInputPanel {...transactionInputPanelProps} />
        </div>
    }
}

//ExpenseListPage.initialActions = [1]

export default TransactionsPage = connect(state => ({
    transactions: state.expenses.list
}))(TransactionsPage)