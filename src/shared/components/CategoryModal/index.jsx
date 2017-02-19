/**
 * Created by lerayne on 19.02.17.
 */

import React, {Component} from 'react'

import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormGroup from 'react-bootstrap/lib/FormGroup'

export default class CategoryModal extends Component {
    state = {
        newName:''
    }

    render() {
        const {
            close
        } = this.props

        const {
            newName
        } = this.state

        return <Modal.Dialog>

            <Modal.Header>
                <Modal.Title>Создать новую категорию</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <FormGroup>
                    <ControlLabel>Введите имя</ControlLabel>
                    <FormControl
                        type="text"
                        value={newName}
                        onChange={e => this.setState({newName: e.target.value})}
                    />
                </FormGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={close}>Отмена</Button>
                <Button
                    bsStyle="primary"
                    onClick={::this.create}
                    disabled={!newName}
                >Создать</Button>
            </Modal.Footer>

        </Modal.Dialog>
    }

    create(){
        if (this.state.newName){
            this.props.create({
                name: this.state.newName
            })
        }
    }
}