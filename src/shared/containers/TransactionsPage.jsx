/**
 * Created by lerayne on 09.01.17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import {
    initializeTransactionsPage,
    createTransaction,
    deleteTransaction,
    setDateOffsetsUpdate
} from '../actions/expensesActions'

import TransactionInputPanel from '../components/TransactionInputPanel'
import TransactionsList from '../components/TransactionsList'
import TransactionsSummary from '../components/TransactionsSummary'
import TransactionsControls from '../components/TransactionsControls'

moment.locale('ru')

class TransactionsPage extends Component {

    static initialize(dispatch) {
        return dispatch(initializeTransactionsPage())
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
            dateFrom,
            dateTo,

            dispatch
        } = this.props

        transactions = transactions.map(ta => ({
            ...ta,
            created: moment(ta.created),
            updated: moment(ta.updated),
            official_date: moment(ta.official_date)
        }))

        return <div className="ExpenseListPage">

            <TransactionsControls {...{
                dateFrom,
                dateTo,
                setDate: (from, to) => dispatch(setDateOffsetsUpdate(from, to))
            }} />

            <TransactionsSummary {...{
                totalIncome,
                totalExpenses,
                expectedRemains,
            }} />

            <TransactionsList {...{
                transactions,
                deleteTransaction: id => dispatch(deleteTransaction(id))
            }} />

            <TransactionInputPanel {...{
                createTransaction: ta => dispatch(createTransaction(ta))
            }} />
        </div>
    }
}

export default TransactionsPage = connect(state => ({
    transactions: state.transactions.list,
    totalIncome: state.transactions.totalIncome,
    totalExpenses: state.transactions.totalExpenses,
    expectedRemains: state.transactions.expectedRemains,
    dateFrom: state.transactions.dateFrom,
    dateTo: state.transactions.dateTo
}))(TransactionsPage)