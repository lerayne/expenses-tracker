/**
 * Created by lerayne on 08.01.17.
 */

import {staticResourcesUrl} from 'config'

const DEV = process.env.NODE_ENV === 'development'
const assetUrl = process.env.HOT ? '//localhost:8050/public/assets/' : staticResourcesUrl

export default function renderHTML(componentHTML, initialState) {
    const html = `
    <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Expenses tracker</title>
        <link rel="stylesheet" href="${assetUrl}styles.css">
        <script>
          window.REDUX_INITIAL_STATE = ${JSON.stringify(initialState)}
        </script>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <div id="dev-tools"></div>
        <script type="application/javascript" src="${assetUrl}bundle.js"></script>
      </body>
    </html>
  `
    return html
}