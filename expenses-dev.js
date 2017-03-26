/**
 * Created by lerayne on 07.01.17.
 */

require('babel-register')
const notJS = ['.less', '.sass', '.ttf', '.woff', '.woff2']
notJS.forEach(ext => require.extensions[ext] = () => {})

require.extensions['.css'] = (a,b,c) => {
    console.log('css', a,b,c)
}

exports.config = require('./config')

require('babel-polyfill')
require('./src/server.js')