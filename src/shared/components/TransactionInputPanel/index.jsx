/**
 * Created by lerayne on 11.01.17.
 */

import React from 'react'
import './TransactionInputPanel.css'

import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'

export default function TransactionInputPanel() {

    return <div className="TransactionInputPanel">
        <FormControl className="name" type="text" placeholder="Название"/>
        <FormControl className="category" componentClass="select" placeholder="Категория">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </FormControl>
        <FormControl
            className="category"
            componentClass="select"
            placeholder="Подкатегория"
        >
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </FormControl>

        <span className="beneficiars">
            <InputGroup>
                <FormControl type="text" placeholder="Бенефициары" disabled={true}/>
                <InputGroup.Button>
                    <Button>+</Button>
                </InputGroup.Button>
            </InputGroup>
        </span>

        <Button className="submit">Занести</Button>
        <FormControl className="value" type="text" placeholder="Сумма"/>

    </div>
}