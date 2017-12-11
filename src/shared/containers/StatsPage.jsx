/**
 * Created by lerayne on 07.12.2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {statsPageInit} from '../actions/statsActions'
import StatsTotalPie from '../components/StatsTotalPie'

class StatsPage extends Component {

    static initialize(dispatch, location){
        return dispatch(statsPageInit(location))
    }

    static loginRequired = true

    componentWillMount() {
        const {totalExpenses, location, dispatch} = this.props
        if (totalExpenses == 0 /*todo - make a reasonable condition*/) {
            StatsPage.initialize(dispatch, location)
        }
    }

    render() {

        let {totalExpenses, totalCategories} = this.props

        return <div>
            <div>Общий расход за всё время: {totalExpenses} грн</div>
            <StatsTotalPie {...{totalExpenses, totalCategories}}/>
        </div>
    }
}

export default StatsPage = connect(state => ({
    totalExpenses: state.stats.totalExpenses,
    totalCategories: state.stats.totalCategories
}))(StatsPage)