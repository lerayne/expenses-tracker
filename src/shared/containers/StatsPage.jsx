/**
 * Created by lerayne on 07.12.2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {statsPageInit} from '../actions/statsActions'
import StatsTotalPie from '../components/StatsTotalPie'
import StatsMonthlyArea from '../components/StatsMonthlyArea'

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

        const {
            totalExpenses,
            totalCategories,
            totalsByMonths
        } = this.props

        return <div>
            <div>Общий расход за всё время: {totalExpenses} грн</div>
            <StatsTotalPie {...{totalExpenses, totalCategories}}/>
            <StatsMonthlyArea {...{totalExpenses, totalsByMonths}}/>
        </div>
    }
}

export default StatsPage = connect(state => ({
    totalExpenses: state.stats.totalExpenses,
    totalCategories: state.stats.totalCategories,
    totalsByMonths: state.stats.totalsByMonths
}))(StatsPage)