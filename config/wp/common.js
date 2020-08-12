const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PROJ_DIR = "../../.."

let htmlOptions = {
    template:  './src/static/index.html',
    title:     "Kiran's Simple React App1",
    filename:  'index.html',
    favicon:   './src/static/images/favicon.ico'
}

module.exports = {
    entry: './src/app/index.js',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(htmlOptions)
    ],
    module: {
        rules: [{
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{loader: 'file-loader'}]
            }
        ]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname + PROJ_DIR, 'build')
    }
};
