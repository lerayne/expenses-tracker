import {queryCell} from '../db'
import moment from 'moment'

export default async function getBasicData(){

    const firstTAts = await queryCell(`
        SELECT official_date FROM transactions
        ORDER BY official_date ASC
        LIMIT 1 
    `)

    const latestTAts = await queryCell(`
        SELECT official_date FROM transactions
        ORDER BY official_date DESC
        LIMIT 1 
    `)

    const firstTAMoment = moment(firstTAts)
    const latestTAMoment = moment(latestTAts)

    return {
        minYear: firstTAMoment.year(),
        maxYear: latestTAMoment.year()
    }
}