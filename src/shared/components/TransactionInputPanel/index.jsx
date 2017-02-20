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

    constructor(props){
        super(props)

        this.state = this.initialState(props)
    }

    initialState(props){
        return {
            mode:'create',
            id:-1,
            nameInput: '',
            valueInput: '0',
            income: false,
            categoryInput: -1,
            subcategoryInput: -1,
            beneficiarsInput: [],
            dateIsNow:true,
            date: moment().format('YYYY.MM.DD')
        }
    }

    componentWillReceiveProps(newProps){
        if (newProps.transaction != this.props.transaction){

            if (typeof newProps.transaction == 'object'){
                this.enterEditMode(newProps.transaction)
            }

            if (!newProps.transaction){
                this.setState(this.initialState())
            }
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
            date,
            mode
        } = this.state

        const {
            categories,
            cancelEdit
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

                {mode == 'create' && <Button
                    className="submit"
                    bsStyle="primary"
                    onClick={::this.submit}
                    disabled={!this.canSubmit()}
                >Добавить</Button>}

                {mode == 'edit' && <Button
                    className="submit"
                    bsStyle="primary"
                    onClick={::this.save}
                    disabled={!this.canSubmit()}
                >Сохранить</Button>}

                {mode == 'edit' && <Button className="cancelEdit" onClick={cancelEdit}>
                    Отмена
                </Button>}

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
                >
                    <span style={{textDecoration: dateIsNow ? 'none' : 'line-through'}}>Сейчас</span>
                </Checkbox>

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

    save(){
        console.log('save', {...this.state})

        //this.props.saveTransaction(transaction)
    }

    handleType(e) {
        if (e.keyCode == 13 && this.canSubmit()) {
            this.submit()
        }
    }

    enterEditMode(transaction){
        const {
            id,
            name,
            value,
            category,
            income,
            official_date
        } = transaction

        this.setState({
            mode:'edit',
            id,
            nameInput: name,
            valueInput: value,
            categoryInput: category,
            income: !!income,
            dateIsNow: false,
            date: moment(official_date).format('YYYY.MM.DD HH:mm')
        })
    }
}