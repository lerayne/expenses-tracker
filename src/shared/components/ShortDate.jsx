/**
 * Created by lerayne on 15.01.17.
 */

import React from 'react';

export default function ShortDate({momentDate}) {

    return <abbr title={momentDate.format('dddd, D MMMM YYYY, HH:mm')}>
        {momentDate.format('D MMMM')}
    </abbr>
}