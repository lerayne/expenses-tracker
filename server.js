/**
 * Created by lerayne on 07.01.17.
 */

require('babel-core/register')
const notJS = ['.css', '.less', '.sass', '.ttf', '.woff', '.woff2']
notJS.forEach(ext => require.extensions[ext] = () => {})
require('babel-polyfill')
require('server.jsx')