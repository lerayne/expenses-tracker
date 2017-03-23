/**
 * Created by lerayne on 10.01.17.
 */

const day = 86400000 // milliseconds

export function fromNow(momentDate, now) {
    const diff = now.diff(momentDate)
    const midnight = now.diff(now.clone().startOf('day'))
    const yesterdayMidnight = midnight + day
    const DBYMidnight = midnight + (day * 2)
    const time = momentDate.format('HH:mm')

    if (diff < midnight) {
        return momentDate.fromNow()
    } else if (diff >= midnight && diff < yesterdayMidnight) {
        return `вчера, ${time}`
    } else if (diff >= yesterdayMidnight && diff < DBYMidnight) {
        return `позавчера, ${time}`
    } else {
        return `${momentDate.fromNow()}, ${time}`
    }
}
