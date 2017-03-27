/**
 * Created by lerayne on 14.01.17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'

import CategoriesList from '../components/CategoriesList'
import CategoriesControls from '../components/CategoriesControls'
import CategoryModal from '../components/CategoryModal'

import {
    categoriesPageInit,
    createCategory
} from '../actions/categoriesActions'

class CategoriesPage extends Component {

    static initialize(dispatch, location) {
        return dispatch(categoriesPageInit(location))
    }

    static loginRequired = true

    state = {
        modalOpen: false
    }

    constructor(){
        super()
    }

    componentDidMount(){
        const {categories, dispatch, location} = this.props
        if (!categories.length){
            CategoriesPage.initialize(dispatch, location)
        }
    }

    render() {

        const {
            categories,

            dispatch
        } = this.props

        return <div>

            <CategoriesControls {...{
                createCategory: () => this.setState({modalOpen: true})
            }}/>

            <CategoriesList {...{
                categories
            }} />

            {this.state.modalOpen && <CategoryModal {...{
                close: () => this.setState({modalOpen: false}),
                create: async category => {
                    await dispatch(createCategory(category))
                    this.setState({modalOpen: false})
                }
            }}/>}

        </div>
    }
}

export default CategoriesPage = connect(state => ({
    categories: state.categories.list
}))(CategoriesPage)