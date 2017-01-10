/**
 * Created by lerayne on 09.01.17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/lib/Table'
import moment from 'moment'

import {fetchExpenses} from '../../actions/expensesActions'
import RelDate from '../../components/RelDate'


moment.locale('ru')

class ExpenseListPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            testProp: 165
        }
    }

    render() {

        let {transactions} = this.props

        transactions = transactions.map(ta => {
            ta.created = moment(ta.created)
            ta.updated = moment(ta.updated)
            return ta
        })

        return <Table responsive condensed striped>
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Подкатегория</th>
                    <th>Бенефициары</th>
                    <th style={{textAlign:'right'}}>Сумма</th>
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
                    <td style={{textAlign:'right'}}>{ta.value > 0 && '+'}{ta.value} грн</td>
                </tr>
            )}
            </tbody>
        </Table>
    }

    static initialize(dispatch){
        return [dispatch(fetchExpenses())]
    }
}

//ExpenseListPage.initialActions = [1]

export default ExpenseListPage = connect(state => ({
    transactions: state.expenses.list
}))(ExpenseListPage)