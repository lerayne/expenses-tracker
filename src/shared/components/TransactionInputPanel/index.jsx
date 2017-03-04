/**
 * Created by lerayne on 11.01.17.
 */

import React, {Component} from 'react'
import moment from 'moment'

import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Checkbox from 'react-bootstrap/lib/Checkbox'

import DateInput from '../DateInput'

import './TransactionInputPanel.css'

const validDateFormats = ['YYYY-MM-DD', 'YYYY-MM-DD HH:mm']

export default class TransactionInputPanel extends Component {

    constructor(props) {
        super(props)

        this.state = this.initialState(props)
    }

    initialState(props) {
        return {
            mode: 'create',
            id: -1,
            name: '',
            value: '0',
            income: false,
            category: -1,
            subcategory: -1,
            beneficiars: [],
            dateIsNow: true,
            date: moment().format('YYYY.MM.DD')
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.transaction != this.props.transaction) {

            if (typeof newProps.transaction == 'object') {
                this.enterEditMode(newProps.transaction)
            }

            if (newProps.transaction === false) {
                this.setState(this.initialState(newProps))
            }
        }
    }

    render() {

        let {
            name,
            value,
            income,
            category,
            dateIsNow,
            date,
            mode
        } = this.state

        const {
            categories,
            cancelEdit
        } = this.props

        if (category === null){
            category = -1
        }

        return <div className="TransactionInputPanel">

            <div>
                <FormControl
                    type="text"
                    className="name"
                    placeholder="Название"
                    value={name}
                    onChange={e => this.setState({name: e.target.value})}
                    onKeyUp={::this.handleType}
                />

                <FormControl
                    componentClass="select"
                    className="category"
                    placeholder="Категория"
                    value={category}
                    onChange={e => this.setState({category: e.target.value})}
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

                {mode == 'edit' && <Button
                    className="cancelEdit"
                    onClick={cancelEdit}
                >
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
                            value={value}
                            onChange={e => this.setState({value: e.target.value})}
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
                    <span
                        style={{textDecoration: dateIsNow ? 'none' : 'line-through'}}>Сейчас</span>
                </Checkbox>

                {!dateIsNow && <DateInput
                    value={date}
                    onChange={newDate => this.setState({date: newDate})}
                    formats={validDateFormats}
                    bsSize="small"
                    className="date"
                />}
            </div>
        </div>
    }

    canSubmit() {
        let canSubmit = true

        const {
            name,
            value,
            date,
            dateIsNow
        } = this.state

        if (!name) {
            return false
        }

        if (!value || isNaN(parseInt(value)) || value == 0) {
            return false
        }

        if (!dateIsNow && !this.getMomentFromFormatted(date).isValid()) {
            return false
        }

        return true
    }

    submit() {
        console.log('submit', {...this.state})

        const {
            name,
            value,
            category,
            income,
            dateIsNow,
            date
        } = this.state

        const newTransaction = {
            name,
            value,
            income,
            category
        }

        if (!dateIsNow) {
            newTransaction.date = date
        }

        this.props.createTransaction(newTransaction)

        this.setState({name: '', value: '0', income: false})
    }

    enterEditMode(transaction) {
        let {
            id,
            name,
            value,
            category,
            income,
            official_date
        } = transaction

        if (value < 0) {
            value *= -1
        }

        this.setState({
            id,
            name,
            value,
            category,
            mode: 'edit',
            income: !!income,
            dateIsNow: false,
            date: moment(official_date).format('YYYY.MM.DD HH:mm')
        })
    }

    save() {
        const {
            id,
            name,
            value,
            income,
            category,
            date
        } = this.state

        const editedTransaction = {
            id,
            name,
            value,
            income,
            category,
            date
        }

        console.log('save', editedTransaction)

        this.props.saveTransaction(editedTransaction)
        this.props.cancelEdit()
        this.setState(this.initialState(this.props))
    }

    handleType(e) {
        if (e.keyCode == 13 && this.canSubmit()) {
            this.submit()
        }
    }

    getMomentFromFormatted(date){
        return moment(date, validDateFormats)
    }
}