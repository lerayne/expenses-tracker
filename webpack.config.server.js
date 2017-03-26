/**
 * Created by lerayne on 26.03.17.
 */

const webpack = require('webpack')
const path = require('path')
const getExternals = require('webpack-node-externals')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const externals = getExternals({
    whitelist: [
        /\.css$/i
    ]
})

console.log('externals', externals)

module.exports = function (env) {

    const DEV = env.mode === 'development'
    const PROD = env.mode === 'production'

    const babelOptions = {
        babelrc: false,
        presets: [
            ["env", {
                targets: {node: "current"}
            }],
            "react",
            "stage-0",
            "flow"
        ]
    }

    const plugins = [
        new webpack.LoaderOptionsPlugin({
            debug: DEV,
            minimize: PROD
        }),

        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: JSON.stringify(false),
                NODE_ENV: JSON.stringify(env.mode || 'development')
            }
        })
    ]

    if (PROD) {
        plugins.push(new UglifyJsPlugin({
            mangle: true,
            comments: false
        }))
    }

    return {
        target: 'node',

        entry: {
            main: path.join(__dirname, 'src', 'server.js'),
        },

        output: {
            path: path.join(__dirname),
            filename: 'expenses.js'
        },

        resolve: {
            extensions: ['.js', '.jsx']
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'babel-loader',
                        options: babelOptions
                    }]
                },
                {
                    test: /\.css$/,
                    use: [{
                        loader: 'css-loader/locals',
                        options: {
                            url: false,
                            localIdentName: '[name]-[local]--[hash:base64:5]'
                        }
                    }]
                }
            ]
        },

        externals: [
            {
                config: 'require("./config.js")'
            },
            getExternals({
                whitelist: [
                    /\.css$/i
                ]
            })
        ],

        node: {
            __dirname: false,
            __filename: false,
        },

        plugins,

        devtool: DEV ? 'inline-source-map' : false
    }
}
