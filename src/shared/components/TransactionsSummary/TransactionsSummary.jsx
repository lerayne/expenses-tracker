/**
 * Created by lerayne on 14.01.17.
 */

import React from 'react';
import Table from 'react-bootstrap/lib/Table'

export default function TransactionsSummary({
                                                totalIncome,
                                                totalExpenses,
                                                expectedRemains,
                                            }) {
    return <div className="TransactionsSummary">
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
}