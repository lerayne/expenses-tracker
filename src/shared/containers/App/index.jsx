/**
 * Created by lerayne on 07.01.17.
 */

import React, { Component, PropTypes } from 'react';
import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';

import { Link } from 'react-router'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

import './bootstrap.css'
import './local.css'

const propTypes = {
    children: PropTypes.node
}

class App extends Component {
    render() {
        return (
            <div className="main">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">EXPENSES</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav navbar>
                            <LinkContainer to="/categories"><NavItem>Категории</NavItem></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        );
    }
}

App.propTypes = propTypes

export default App;