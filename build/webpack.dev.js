const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
        hot: true,
        inline: true,
        lazy: false,
        port: '8080',
        proxy: {
            '/api': {
                target: 'http://miracle-miracle:8080',
                changeOrigin: true,
                secure: false,
            }

        }

    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development',
});
