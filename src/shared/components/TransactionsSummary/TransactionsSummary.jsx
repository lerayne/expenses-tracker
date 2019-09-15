/**
 * Created by lerayne on 14.01.17.
 */

import React from 'react';
import Table from 'react-bootstrap/lib/Table'
import cn from 'classnames'

import css from './TransactionsSummary.css'

export default function TransactionsSummary(props) {

    const {
        totalIncome,
        totalExpenses,
        expectedRemains,
    } = props

    return <div className={cn(css.main, "TransactionsSummary")}>
        <div className="desktop">
            <Table responsive condensed striped>
                <thead>
                <tr>
                    <th>Всего доходов</th>
                    <th>Всего расходов</th>
                    <th>Рассчетный остаток</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="text-success">{totalIncome}</td>
                    <td className="text-danger">{totalExpenses}</td>
                    <td>{expectedRemains}</td>
                </tr>
                </tbody>
            </Table>
        </div>

        <div className="mobile">
            <Table responsive condensed striped>
                <tbody>
                    <tr>
                        <th>Всего доходов</th>
                        <td className="text-success">{totalIncome}</td>
                    </tr>

                    <tr>
                        <th>Всего расходов</th>
                        <td className="text-danger">{totalExpenses}</td>
                    </tr>

                    <tr>
                        <th>Рассчетный остаток</th>
                        <td>{expectedRemains}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
}