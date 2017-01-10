/**
 * Created by lerayne on 10.01.17.
 */

import React from 'react'
import moment from 'moment'
import {fromNow} from '../helpers/date'

export default function RelDate({momentDate}){
    const now = moment()

    return <abbr title={momentDate.format('dddd, D MMMM YYYY, HH:mm')}>
        {fromNow(momentDate)}
        {now.diff(momentDate) > 86400000 && <span> {momentDate.format('HH:mm')}</span>}
    </abbr>
}