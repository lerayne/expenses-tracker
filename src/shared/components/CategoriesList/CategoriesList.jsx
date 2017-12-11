/**
 * Created by lerayne on 19.02.17.
 */

import React from 'react'

import Table from 'react-bootstrap/lib/Table'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import Button from 'react-bootstrap/lib/Button'

export default function CategoriesList({categories}) {
    return <div className="CategoriesList">
        <Table responsive condensed striped>
            <thead>
            <tr>
                <th>Категория</th>
            </tr>
            </thead>
            <tbody>
            {categories.map(category =>
                <tr key={category.id}>
                    <td>{category.name}</td>
                </tr>
            )}
            </tbody>
        </Table>
    </div>
}