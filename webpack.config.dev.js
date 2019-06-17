'use strict'
const {
    VueLoaderPlugin
} = require('vue-loader')
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        "vue-key-input": './src/index.js',
        "example": './src/example.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],


    },
    devServer: {
        contentBase: path.join(__dirname, 'examples'),
        compress: true,
        port: 8080
    },
    plugins: [
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            template: "./src/index.ejs",
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    }
}