/**
 * Created by lerayne on 22.03.17.
 */

import bcrypt from 'bcryptjs'
import url from 'url'
import jwt from 'jsonwebtoken'
import ms from 'ms'

import {query} from '../db'
import {secretKey} from '../../config'
import authenticate from './authenticate'

function redirectToFailure(req, res) {
    res.redirect(302, url.format({
        pathname: '/login', query: {
            next: req.body.nextUrl,
            error: 1
        }
    }))
}

function grantAccess(req, res, user) {

    delete user.password_hash

    user = {
        ...user,
        ip: '0.0.0.0' // todo - IP filtering
    }

    const jwtOptions = {
        expiresIn: '7 days'
    }

    jwt.sign(user, secretKey, jwtOptions, function (err, token) {
        if (!err) {

            const host = req.get('host')
            const hostname = host.split(':')[0]

            res.cookie('access_token', token, {
                path: '/',
                domain: hostname,
                maxAge: ms('7 days')
            })

            res.redirect(302, req.body.nextUrl || '/')
        }
    })
}

export default async function login(req, res) {

    const currentUser = await authenticate(req)

    if (currentUser) {
        // Already logged in: redirect back
        req.redirect(302, req.body.nextUrl || '/')
    } else {

        const userRequestQuery = `
        SELECT 
            id, 
            email, 
            password_hash 
        FROM users 
        WHERE email = ?
    `
        const dbResp = await query(userRequestQuery, [req.body.email])
        const user = dbResp[0]

        if (user == undefined) {
            // No such user
            redirectToFailure(req, res)
        } else {
            const passwordCorrect = await bcrypt.compare(req.body.password, user.password_hash)

            if (!passwordCorrect) {
                // Wrong password
                redirectToFailure(req, res)
            } else {
                // User is successfully authed!
                grantAccess(req, res, user)
            }
        }
    }
}
