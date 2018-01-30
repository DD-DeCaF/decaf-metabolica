const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = function () {
    return {
        entry: {
            main: './src/index.js'
        },
        devtool: 'cheap-source-map',
        output: {
            filename: '[chunkhash].[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            // To support `npm link` for metabolica components, do not resolve symlinks.
            // See: https://github.com/babel/babel-loader/issues/149
            symlinks: false,
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'],
                minChunks: function (module) {
                    return module.context
                        && module.context.indexOf('node_modules') !== -1
                        && module.context.indexOf('metabolica') === -1;
                }
            }),
            new ExtractTextPlugin('[chunkhash].[name].css'),
            new HtmlWebpackPlugin({
                inject: 'head',
                template: './src/index.ejs',
                filename: 'index.html'
            }),
            new webpack.EnvironmentPlugin({
                ENVIRONMENT: 'dev',
                TRUSTED_URLS: 'http://localhost,https://iloop-staging.dd-decaf.eu,https://data.dd-decaf.eu,https://api.dd-decaf.eu,https://api-staging.dd-decaf.eu',
                POTION_API_HOST: 'https://iloop-staging.dd-decaf.eu',
                POTION_API_PREFIX: '/api',
                DECAF_API: 'https://api-staging.dd-decaf.eu',
                MODEL_API: 'https://api-staging.dd-decaf.eu',
                MODEL_WS_HOST: 'wss://api-staging.dd-decaf.eu',
                MODEL_WS_PREFIX: '/wsmodels',
                PATHWAYS_API: 'https://api-staging.dd-decaf.eu/pathways',
                PATHWAYS_WS: 'wss://api-staging.dd-decaf.eu/pathways',
                FIREBASE_API_KEY: '',
                FIREBASE_AUTH_DOMAIN: '',
                FIREBASE_DATABASE_URL: '',
                FIREBASE_PROJECT_ID: '',
                FIREBASE_STORAGE_BUCKET: '',
                FIREBASE_SENDER_ID: '',
                SENTRY_DSN: '',
                GUEST_TOKEN: '',
                GA_TRACKING_CODE: '',
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css?$/,
                    use: ExtractTextPlugin.extract({
                        use: 'css-loader'
                    })
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: [{
                            loader: 'css-loader'
                        }, {
                            loader: 'sass-loader'
                        }]
                    })
                },
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    include: [
                        // Project source
                        path.resolve(__dirname, 'src'),

                        // Metabolica core components
                        path.dirname(require.resolve('metabolica')),
                        path.dirname(require.resolve('metabolica-core')),
                        path.dirname(require.resolve('metabolica-variants')),
                        path.dirname(require.resolve('metabolica-viz')),

                        // DD-DeCaF components
                        // Avoid use of `require.resolve` to support `npm link` for local development
                        path.resolve(__dirname, 'node_modules', 'metabolica-home', 'src'),
                        path.resolve(__dirname, 'node_modules', 'metabolica-about', 'src'),
                        path.resolve(__dirname, 'node_modules', 'metabolica-login', 'src'),
                        path.resolve(__dirname, 'node_modules', 'metabolica-upload', 'src'),
                        path.resolve(__dirname, 'node_modules', 'metabolica-pathways', 'src'),
                        path.resolve(__dirname, 'node_modules', 'metabolica-yields', 'src'),
                        path.resolve(__dirname, 'node_modules', 'metabolica-map', 'src'),
                    ],
                    options: {
                        transpileOnly: true,  // FIXME hack for prototyping purposes because dependencies are broken
                        compilerOptions: {isolatedModules: true}
                    }
                },
                {
                    test: /\.js$/,
                    include: [
                        // Project source
                        path.resolve(__dirname, 'src'),

                        // Metabolica core components
                        path.dirname(require.resolve('metabolica')),
                        path.dirname(require.resolve('metabolica-core')),
                        path.dirname(require.resolve('metabolica-variants')),
                        path.dirname(require.resolve('metabolica-viz')),

                        // DD-DeCaF components
                        // Avoid use of `require.resolve` to support `npm link` for local development
                        path.resolve(__dirname, 'node_modules', 'metabolica-home', 'src'),
                        path.resolve(__dirname, 'node_modules', 'metabolica-about', 'src'),
                        path.resolve(__dirname, 'node_modules', 'metabolica-login', 'src'),
                        path.resolve(__dirname, 'node_modules', 'metabolica-upload', 'src'),
                        path.resolve(__dirname, 'node_modules', 'metabolica-pathways', 'src'),
                        path.resolve(__dirname, 'node_modules', 'metabolica-yields', 'src'),
                        path.resolve(__dirname, 'node_modules', 'metabolica-map', 'src'),
                    ],
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'stage-0', 'es2017'],
                        plugins: [
                            'transform-runtime'
                        ]
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(jpe?g|png|svg|gif)$/,
                    loader: 'file-loader?name=img/[hash:8].[name].[ext]'
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
            proxy: {
                '/api': {
                    // Set the following line to the address of the API you want to test against:
                    target: 'https://iloop-staging.dd-decaf.eu',
                    secure: false,
                    changeOrigin: true
                }
            }
        }
    }
};
