/**
 * Created by lerayne on 11.02.17.
 */

import React, {Component} from 'react'
import moment from 'moment'

import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import NavItem from 'react-bootstrap/lib/NavItem'
import MenuItem from 'react-bootstrap/lib/MenuItem'

const months = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
]

export default class TransactionsControls extends Component {

    render() {

        //const {currentMonth, currentYear} = this.state

        const {dateFrom, minYear} = this.props
        const momentFrom = moment(dateFrom)
        const currentMonth = momentFrom.month()
        const currentYear = momentFrom.year()

        const maxYear = moment().year()
        const years = []
        for(let y = maxYear; y >= minYear; y--){
            years.push(y)
        }

        return <Navbar inverse className="narrow">
            <Nav>
                {/*<NavItem><i className="material-icons">&#xE314;</i></NavItem>*/}

                <NavDropdown title={currentYear} id="basic-nav-dropdown">
                    {years.map(year =>
                        <MenuItem
                            key={year}
                            disabled={currentYear === year}
                            onClick={() => this.setYear(year, currentYear)}
                        >{year}</MenuItem>
                    )}
                </NavDropdown>

                <NavDropdown title={months[currentMonth]} id="basic-nav-dropdown">
                    {months.map((name, i) =>
                        <MenuItem
                            key={i}
                            disabled={currentMonth == i}
                            onClick={() => this.setMonth(i)}
                        >{name}</MenuItem>
                    )}
                </NavDropdown>

                {/*<NavItem><i className="material-icons">&#xE315;</i></NavItem>*/}
            </Nav>
        </Navbar>
    }

    setMonth(index){

        const {dateFrom} = this.props
        const newMoment = moment(dateFrom).clone().month(index)
        const newDateFrom = newMoment.clone().startOf('month').valueOf()
        const newDateTo = newMoment.clone().endOf('month').valueOf()

        this.props.setDate(newDateFrom, newDateTo)
    }

    setYear(year, currentYear){

        if (year !== currentYear){
            const {dateFrom} = this.props
            const newMoment = moment(dateFrom).clone().year(year)

            if (year < currentYear) {
                newMoment.month(11)
            } else {
                newMoment.month(0)
            }

            const newDateFrom = newMoment.clone().startOf('month').valueOf()
            const newDateTo = newMoment.clone().endOf('month').valueOf()

            this.props.setDate(newDateFrom, newDateTo)
        }
    }
}