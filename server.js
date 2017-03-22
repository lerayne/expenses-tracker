/**
 * Created by lerayne on 07.01.17.
 */

require('babel-register')
const notJS = ['.css', '.less', '.sass', '.ttf', '.woff', '.woff2']
notJS.forEach(ext => require.extensions[ext] = () => {})
require('babel-polyfill')
require('./src/server.jsx')