const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 3000,
    },
    entry: "./src/index.js",
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: 'source-map-loader',
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            }
        ],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    resolve: {
        extensions: ["*", ".css", ".js", ".jsx", ".ts", ".tsx"],
    }
};
