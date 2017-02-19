/**
 * Created by lerayne on 11.01.17.
 */

import React, {Component} from 'react'
import moment from 'moment'

import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Checkbox from 'react-bootstrap/lib/Checkbox'

import './TransactionInputPanel.css'

export default class TransactionInputPanel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nameInput: '',
            valueInput: '0',
            income: false,
            categoryInput: props.category || -1,
            subcategoryInput: props.subcategory || -1,
            beneficiarsInput: [],
            dateIsNow:true,
            date: moment().format('YYYY.MM.DD')
        }
    }

    render() {

        const {
            nameInput,
            valueInput,
            income,
            categoryInput,
            subcategoryInput,
            beneficiarsInput,
            dateIsNow,
            date
        } = this.state

        const {
            categories
        } = this.props

        return <div className="TransactionInputPanel">

            <div>
                <FormControl
                    type="text"
                    className="name"
                    placeholder="Название"
                    value={nameInput}
                    onChange={e => this.setState({nameInput: e.target.value})}
                    onKeyUp={::this.handleType}
                />

                <FormControl
                    componentClass="select"
                    className="category"
                    placeholder="Категория"
                >
                    <option value={-1}>Категория (нет)</option>
                    {categories.map(category =>
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )}
                </FormControl>

                {/*<FormControl
                    className="category"
                    componentClass="select"
                    placeholder="Подкатегория"
                >
                    <option value={-1}>Подкатегория (нет)</option>
                    <option>2</option>
                    <option>3</option>
                </FormControl>*/}

                <span className="beneficiars">
                    <InputGroup>
                        <FormControl type="text" placeholder="Бенефициары" disabled={true}/>
                        <InputGroup.Button>
                            <Button>+</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </span>

                <Button
                    className="submit"
                    onClick={::this.submit}
                    disabled={!this.canSubmit()}
                >
                    Добавить
                </Button>

                <span className="value">
                    <InputGroup>
                        <InputGroup.Button>
                            {!income && <Button
                                className="expense"
                                bsStyle="danger"
                                onClick={() => this.setState({income: true})}
                            >-</Button>}

                            {!!income && <Button
                                className="income"
                                bsStyle="success"
                                onClick={() => this.setState({income: false})}
                            >+</Button>}
                        </InputGroup.Button>
                        <FormControl
                            type="text"
                            placeholder="Сумма"
                            value={valueInput}
                            onChange={e => this.setState({valueInput: e.target.value})}
                            onKeyUp={::this.handleType}
                        />
                    </InputGroup>
                </span>

            </div>
            <div>
                <Checkbox
                    checked={dateIsNow}
                    onChange={e => this.setState({dateIsNow: e.target.checked})}
                >Сейчас</Checkbox>

                {!dateIsNow && <FormControl
                    type="text"
                    value={date}
                    onChange={e => this.setDate(e.target.value)}
                    bsSize="small"
                    className="date"
                />}
            </div>
        </div>
    }

    canSubmit() {
        let canSubmit = true

        const {
            nameInput,
            valueInput,
            categoryInput,
            subcategoryInput,
            beneficiarsInput
        } = this.state

        if (!nameInput) {
            canSubmit = false
        }

        if (!valueInput || isNaN(parseInt(valueInput)) || valueInput == 0) {
            canSubmit = false
        }

        return canSubmit
    }

    setDate(value){
        const newDate = moment(value, 'YYYY.MM.DD')
        if (newDate.isValid()){
            this.setState({
                date: value
            })
        }
    }

    submit() {
        console.log('submit', {...this.state})

        const {nameInput, valueInput, income, dateIsNow, date} = this.state

        const newTransaction = {
            name: nameInput,
            value: valueInput,
            income
        }

        if (!dateIsNow){
            newTransaction.date = date
        }

        this.props.createTransaction(newTransaction)

        this.setState({
            nameInput: '',
            valueInput: '0',
            income: false
        })
    }

    handleType(e) {
        if (e.keyCode == 13 && this.canSubmit()) {
            this.submit()
        }
    }
}