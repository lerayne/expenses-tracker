/**
 * Created by lerayne on 11.01.17.
 */

import React from 'react'
import Table from 'react-bootstrap/lib/Table'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import Button from 'react-bootstrap/lib/Button'
import moment from 'moment'
import cn from 'classnames'

import ShortDate from '../../components/ShortDate'
import './TransactionsList.css'

export default function TransactionsList(props) {

    const {
        transactions,
        categories,
        deleteTransaction,
        editTransaction
    } = props

    return <div className="TransactionsList">
        <Table responsive condensed striped className="main-table">
            <thead>
            <tr>
                <th>Дата</th>
                <th>Название</th>
                <th>Категория</th>
                <th>Подкатегория</th>
                <th>Бенефициары</th>
                <th style={{textAlign: 'right'}}>Сумма</th>
                <th style={{textAlign: 'right'}}>Действия</th>
            </tr>
            </thead>
            <tbody>
            {transactions.map(ta => {
                const categoryIndex = categories.findIndex(cat => cat.id == ta.category)
                const categoryName = categoryIndex > -1 ? categories[categoryIndex].name : ''

                return <tr key={ta.id}>
                    <td className="ta-date"><ShortDate momentDate={ta.official_date}/></td>
                    <td className="ta-description">{ta.name}</td>
                    <td className="ta-category">{categoryName}</td>
                    <td className="ta-subcategory"></td>
                    <td className="ta-beneficiars"></td>

                    <td
                        className={cn('ta-value', {
                            'text-success': ta.value > 0,
                            'text-danger': ta.value < 0
                        })}
                        style={{textAlign: 'right'}}
                    >
                        {ta.value > 0 && '+'}{ta.value} грн
                    </td>

                    <td className="ta-buttons" style={{textAlign: 'right'}}>
                        <ButtonGroup bsSize="xsmall">
                            <Button onClick={() => editTransaction(ta.id)}>Изменить</Button>
                            <Button onClick={() => deleteTransaction(ta.id)}>Удалить</Button>
                        </ButtonGroup>
                    </td>
                </tr>
            })}
            </tbody>
        </Table>
    </div>
}