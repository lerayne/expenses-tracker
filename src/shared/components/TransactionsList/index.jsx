/**
 * Created by lerayne on 11.01.17.
 */

import React from 'react'
import Table from 'react-bootstrap/lib/Table'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import Button from 'react-bootstrap/lib/Button'
import moment from 'moment'

import RelDate from '../../components/RelDate'

export default function TransactionsList({
    transactions,
    deleteTransaction
}) {
    const now = moment()

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
            {transactions.map(ta =>
                <tr key={ta.id}>
                    <td><RelDate momentDate={ta.created} now={now}/></td>
                    <td>{ta.name} ({ta.id})</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style={{textAlign: 'right'}}>{ta.value > 0 && '+'}{ta.value} грн</td>
                    <td style={{textAlign: 'right'}}>
                        <ButtonGroup bsSize="xsmall">
                            <Button>Изменить</Button>
                            <Button onClick={() => deleteTransaction(ta.id)}>Удалить</Button>
                        </ButtonGroup>
                    </td>
                </tr>
            )}
            </tbody>
        </Table>
    </div>
}