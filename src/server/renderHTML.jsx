/**
 * Created by lerayne on 08.01.17.
 */

const assetUrl = process.env.NODE_ENV !== 'production' ? '' : 'public/'

export default function renderHTML(componentHTML, initialState) {
    return `
    <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Expenses tracker</title>
        <link rel="stylesheet" href="${assetUrl}assets/styles.css">
        <script>
          window.REDUX_INITIAL_STATE = ${JSON.stringify(initialState)}
        </script>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <div id="dev-tools"></div>
        <script type="application/javascript" src="${assetUrl}assets/bundle.js"></script>
      </body>
    </html>
  `
}