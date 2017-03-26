/**
 * Created by lerayne on 07.01.17.
 */

import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux'
import url from 'url'
import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';

import 'material-design-icons-iconfont/dist/fonts/material-icons.css'

import { Link } from 'react-router'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

import './bootstrap.css'
import './local.css'

const propTypes = {
    children: PropTypes.node
}

class App extends Component {

    state = {
        renderChildren: true
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.location.pathname !== this.props.location.pathname){
            //console.log('location changed', nextProps.location.pathname)

            const {router, location, user} = nextProps

            this.setState({renderChildren: true})

            router.routes.forEach(route => {
                const component = route.component.WrappedComponent || route.component

                if (component.loginRequired && user.id == -1){

                    this.setState({renderChildren: false})

                    router.push(url.format({
                        pathname: '/login',
                        query: {
                            next: location.pathname + location.search
                        }
                    }))
                }

                if (component.anonymousRequired && user.id != -1) {

                    this.setState({renderChildren: false})

                    // todo - подумать о том что случится, если будет переход на страницу "login"
                    // не при помощи набора в адрессной строке (тогда будет простой редирект), а
                    // при помощи инструментов router'а - видимо нужно перенаправить юзера откуда
                    // пришел
                    router.push(url.format({
                        pathname: '/',
                        // query: {
                        //     next: location.pathname + location.search
                        // }
                    }))
                }
            })
        }
    }

    render() {
        const {renderChildren} = this.state

        //console.log(renderChildren ? 'App renders' : 'App renders w/o children')

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
                            {this.props.user.id > 0 && <NavItem href="/logout">Log out</NavItem>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    {renderChildren && this.props.children}
                </Grid>
            </div>
        );
    }
}

App.propTypes = propTypes

export default App = connect(state => ({
    user: state.user
}))(App);