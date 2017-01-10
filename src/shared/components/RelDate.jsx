/**
 * Created by lerayne on 10.01.17.
 */

import React from 'react'
import {fromNow} from '../helpers/date'

export default function RelDate({momentDate, now}){

    return <abbr title={momentDate.format('dddd, D MMMM YYYY, HH:mm')}>
        {fromNow(momentDate, now)}
    </abbr>
}