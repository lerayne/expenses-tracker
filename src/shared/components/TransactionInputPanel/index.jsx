/**
 * Created by lerayne on 11.01.17.
 */

import React, {Component} from 'react'
import './TransactionInputPanel.css'

import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'
import InputGroup from 'react-bootstrap/lib/InputGroup'

export default class TransactionInputPanel extends Component {

    constructor(props){
        super(props)

        this.state = {
            nameInput:'',
            valueInput:'0',
            income: false,
            categoryInput: props.category || -1,
            subcategoryInput: props.subcategory || -1,
            beneficiarsInput: []
        }
    }

    render() {

        const {
            nameInput,
            valueInput,
            income,
            categoryInput,
            subcategoryInput,
            beneficiarsInput
        } = this.state

        return <div className="TransactionInputPanel">

            <FormControl
                className="name"
                type="text"
                placeholder="Название"
                value={nameInput}
                onChange={e => this.setState({nameInput: e.target.value})}
                onKeyUp={::this.handleType}
            />

            <FormControl
                className="category"
                componentClass="select"
                placeholder="Категория"
            >
                <option value={-1}>Категория (нет)</option>
                <option>2</option>
                <option>3</option>
            </FormControl>

            <FormControl
                className="category"
                componentClass="select"
                placeholder="Подкатегория"
            >
                <option value={-1}>Подкатегория (нет)</option>
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
    }

    canSubmit(){
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

        if (!valueInput || isNaN(parseInt(valueInput)) || valueInput == 0){
            canSubmit = false
        }

        return canSubmit
    }

    submit(){
        console.log('submit', {...this.state})

        const {nameInput, valueInput, income} = this.state

        this.props.createTransaction({
            nameInput,
            valueInput,
            income
        })

        this.setState({
            nameInput: '',
            valueInput: '0',
            income:false
        })
    }

    handleType(e){
        if (e.keyCode == 13 && this.canSubmit()){
            this.submit()
        }
    }
}