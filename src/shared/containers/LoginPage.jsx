/**
 * Created by lerayne on 22.03.17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Button from 'react-bootstrap/lib/Button'
import Alert from 'react-bootstrap/lib/Alert'
import url from 'url'

class LoginPage extends Component {
    render(){
        const mainStyle = {}
        const formStyle = {
            width:'400px',
            margin:'auto'
        }

        const {query} = url.parse(url.format(this.props.location), true)

        const actionPath = '/login'

        return <div style={mainStyle}>
            <form method="POST" action={actionPath} style={formStyle}>
                <input type="hidden" name="nextUrl" value={query.next} />

                {query.error && <Alert bsStyle="danger">
                    <h4>Email or password does not match!</h4>
                    <p>Try again or visit us later</p>
                </Alert>}

                <FormGroup>
                    <ControlLabel>email:</ControlLabel>
                    <FormControl type="text" name="email" />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>password:</ControlLabel>
                    <FormControl type="password" name="password" />
                </FormGroup>

                <Button type="submit">Login</Button>
            </form>
        </div>
    }
}

export default LoginPage = connect()(LoginPage)