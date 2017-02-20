/**
 * Created by lerayne on 20.02.17.
 */

import React, {Component, PropTypes} from 'react'
import moment from 'moment'

import FormControl from 'react-bootstrap/lib/FormControl'
import FormGroup from 'react-bootstrap/lib/FormGroup'

class DateInput extends Component {

    static propTypes = {
        formats: PropTypes.arrayOf(PropTypes.string).isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }

    state = {
        validation: null
    }

    componentWillMount() {
        this.setValidationState(this.props.value)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.value != this.props.value) {
            this.setValidationState(newProps.value)
        }
    }

    render() {
        // just screening from getting into "rest"
        const {type, onChange, formats, ...rest} = this.props

        return <FormGroup
            style={{display: 'inline-block'}}
            validationState={this.state.validation}
        >
            <FormControl
                type="text"
                onChange={e => this.onChange(e.target.value)}
                {...rest}
            />
        </FormGroup>
    }

    onChange(value) {
        this.setValidationState(value)
        this.props.onChange(value)
    }

    validate(value) {
        return moment(value, this.props.formats).isValid()
    }

    setValidationState(value){
        this.setState({
            validation: this.validate(value) ? null : 'error'
        })
    }
}

export default DateInput