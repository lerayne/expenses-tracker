/**
 * Created by lerayne on 09.01.17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import {
    fetchExpenses,
    createTransaction,
    deleteTransaction,
    fetchSummary,
    fetchTransactions
} from '../actions/expensesActions'

import TransactionInputPanel from '../components/TransactionInputPanel'
import TransactionsList from '../components/TransactionsList'
import TransactionsSummary from '../components/TransactionsSummary'

moment.locale('ru')

class TransactionsPage extends Component {

    static initialize(dispatch) {
        return [
            //dispatch(fetchExpenses()),
            dispatch(fetchTransactions()),
            dispatch(fetchSummary())
        ]
    }

    componentDidMount() {
        if (!this.props.transactions.length) {
            TransactionsPage.initialize(this.props.dispatch)
        }
    }

    render() {

        let {
            transactions,
            totalIncome,
            totalExpenses,
            expectedRemains,

            dispatch
        } = this.props

        transactions = transactions.map(ta => ({
            ...ta,
            created: moment(ta.created),
            updated: moment(ta.updated),
            official_date: moment(ta.official_date)
        }))

        const transactionsSummaryProps = {
            totalIncome,
            totalExpenses,
            expectedRemains,
        }

        const transactionsListProps = {
            transactions,
            deleteTransaction: id => dispatch(deleteTransaction(id))
        }

        const transactionInputPanelProps = {
            createTransaction: ta => dispatch(createTransaction(ta))
        }

        return <div className="ExpenseListPage">
            <TransactionsSummary {...transactionsSummaryProps} />
            <TransactionsList {...transactionsListProps} />
            <TransactionInputPanel {...transactionInputPanelProps} />
        </div>
    }
}

/*
TransactionsPage.initialize = function(){

}
*/

export default TransactionsPage = connect(state => ({
    transactions: state.expenses.list,
    totalIncome: state.expenses.totalIncome,
    totalExpenses: state.expenses.totalExpenses,
    expectedRemains: state.expenses.expectedRemains
}))(TransactionsPage)