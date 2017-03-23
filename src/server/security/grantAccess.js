/**
 * Created by lerayne on 23.03.17.
 */

import ms from 'ms'

import {keyExpiresIn} from '../../config'
import createToken from './createToken'

export default async function grantAccess(req, res, insecureUser) {

    // removing password hash
    const {password_hash, ...rest} = insecureUser

    const user = {
        ...rest,
        ip:'0.0.0.0' // todo - current IP
    }

    const host = req.get('host')
    const hostname = host.split(':')[0]

    const token = await createToken(user)

    res.cookie('access_token', token, {
        path: '/',
        domain: hostname,
        maxAge: ms(keyExpiresIn)
    })
}