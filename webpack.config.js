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
            extensions: ['.ts', '.tsx', '.js']
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
                template: './src/index.html',
                filename: 'index.html'
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
                { 	test: /\.tsx?$/,
                    loader: "ts-loader",
                    include: [
                        path.resolve(__dirname, 'src'),
                        path.dirname(require.resolve('metabolica')),
                        path.dirname(require.resolve('metabolica-core')),
                        path.dirname(require.resolve('metabolica-viz')),
                        path.dirname(require.resolve('module-pathways')),
                        path.dirname(require.resolve('module-theoretical-yield')),
                        path.dirname(require.resolve('metabolica-map')),
                        path.dirname(require.resolve('module-upload'))
                    ],
                    options: {
                        transpileOnly: true,  // FIXME hack for prototyping purposes because dependencies are broken
                        isolatedModules: true
                    }
                },
                {
                    test: /\.js$/,
                    include: [
                        path.resolve(__dirname, 'src'),
                        path.dirname(require.resolve('metabolica')),
                        path.dirname(require.resolve('metabolica-core')),
                        path.dirname(require.resolve('metabolica-variants')),
                        path.dirname(require.resolve('metabolica-viz'))
                    ],
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'stage-0'],
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
                    test: /\.(jpe?g|png|svg)$/,
                    loader: 'file-loader?name=img/[hash:8].[name].[ext]'
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
            proxy: {
                '/api': {
                    // Set the following line to the address of the API you want to test against:
                    target: 'https://data.dd-decaf.eu',
                    secure: false,
                    changeOrigin: true
                }
            }
        }
    }
};
