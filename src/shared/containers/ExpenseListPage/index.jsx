/**
 * Created by lerayne on 09.01.17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/lib/Table'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import Button from 'react-bootstrap/lib/Button'
import moment from 'moment'

import {fetchExpenses} from '../../actions/expensesActions'
import RelDate from '../../components/RelDate'
import TransactionInputPanel from '../../components/TransactionInputPanel'

import './ExpenseListPage.css'

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
            <Table responsive condensed striped className="main-table">
                <thead>
                <tr>
                    <th>Дата</th>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Подкатегория</th>
                    <th>Бенефициары</th>
                    <th style={{textAlign: 'right'}}>Сумма</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(ta =>
                    <tr key={ta.id}>
                        <td><RelDate momentDate={ta.created}/></td>
                        <td>{ta.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{textAlign: 'right'}}>{ta.value > 0 && '+'}{ta.value} грн</td>
                        <td>
                            <ButtonGroup bsSize="xsmall">
                                <Button>Изменить</Button>
                                <Button>Удалить</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>

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