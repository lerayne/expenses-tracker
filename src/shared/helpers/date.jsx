/**
 * Created by lerayne on 10.01.17.
 */

import moment from 'moment'

export function fromNow(momentDate){
    const now = moment()
    const diff = now.diff(momentDate)
    const day = 86400000

    // todo - переделать с учетом полночи!
    if (diff > day*2 && diff <= day*3){
        return 'позавчера'
    } else if (diff > day && diff <= day*2) {
        return 'вчера'
    } else {
        return momentDate.fromNow()
    }
}
