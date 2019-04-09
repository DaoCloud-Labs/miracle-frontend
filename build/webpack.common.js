const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: './src/main.js',
    },
    module: {
        rules: [
            {
                test: /\.(ico)$/,
                loader: 'url-loader',
                options: {
                    limit: 50,
                    name: 'favicon.[ext]'//相对于path的路径
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        attrs: ['img:src', 'link:href']
                    }
                },
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    // 'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[hash].[ext]',
                            outputPath: './img'
                        },
                    },
                    // should be the first one to execute
                    {
                        loader: 'image-webpack-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'production',
            template: path.join(__dirname, '../src/index.html'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "[hash].css",
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    }
};