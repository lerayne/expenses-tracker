/**
 * Created by lerayne on 09.01.17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import {
    transactionsPageInit,
    createTransaction,
    editTransaction,
    deleteTransaction,
    setDateOffsetsUpdate
} from '../actions/transactionsActions'

import TransactionInputPanel from '../components/TransactionInputPanel'
import TransactionsList from '../components/TransactionsList'
import TransactionsSummary from '../components/TransactionsSummary'
import TransactionsControls from '../components/TransactionsControls'

moment.locale('ru')

class TransactionsPage extends Component {

    state = {
        activeTransaction: false
    }

    static initialize(dispatch) {
        return dispatch(transactionsPageInit())
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

            categories,

            dispatch
        } = this.props

        const {activeTransaction} = this.state

        transactions = transactions.map(ta => ({
            ...ta,
            created: moment(ta.created),
            updated: moment(ta.updated),
            official_date: moment(ta.official_date)
        }))

        return <div id="TransactionsPage">

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
                categories,
                deleteTransaction: ::this.confirmDeletion,
                editTransaction: ::this.enterEditMode
            }} />

            <TransactionInputPanel {...{
                categories,
                transaction: activeTransaction,
                createTransaction: ta => dispatch(createTransaction(ta)),
                saveTransaction: ta => dispatch(editTransaction(ta)),
                cancelEdit: () => this.setState({activeTransaction: false})
            }} />
        </div>
    }

    confirmDeletion(id){
        const transaction = this.props.transactions.find(ta => ta.id == id)
        if (confirm(`Удалить транзакцию "${transaction.name}"?`)){
            this.props.dispatch(deleteTransaction(id))
        }
    }

    enterEditMode(id){
        const activeTransaction = this.props.transactions.find(ta => ta.id == id)
        this.setState({
            activeTransaction
        })
    }
}

export default TransactionsPage = connect(state => ({
    transactions: state.transactions.list,
    totalIncome: state.transactions.totalIncome,
    totalExpenses: state.transactions.totalExpenses,
    expectedRemains: state.transactions.expectedRemains,
    dateFrom: state.transactions.dateFrom,
    dateTo: state.transactions.dateTo,

    categories: state.categories.list
}))(TransactionsPage)