/**
 * Created by lerayne on 10.01.17.
 */

let api

if (process.env.BROWSER) {
    api = require('../client/api').default
} else {
    api = require('../server/api').default
}

export default api