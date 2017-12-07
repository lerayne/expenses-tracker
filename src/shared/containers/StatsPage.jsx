/**
 * Created by lerayne on 07.12.2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {statsPageInit} from '../actions/statsActions'

class StatsPage extends Component {

    static initialize(dispatch, location){
        return dispatch(statsPageInit(location))
    }

    static loginRequired = true

    componentWillMount() {
        const {location, dispatch} = this.props
        if (true /*todo - make a reasonable condition*/) {
            StatsPage.initialize(dispatch, location)
        }
    }

    render() {
        return <span>{this.props.totalIncome} грн</span>
    }
}

export default StatsPage = connect(state => ({
    totalIncome: state.stats.totalIncome
}))(StatsPage)