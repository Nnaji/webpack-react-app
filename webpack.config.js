const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = (env) => {
    console.log(env.mode);
    return {
        devtool: 'source-map',
        mode: env.mode,
        //Enttry point of the app
        entry: './src/index.js',
        output: {
            filename: 'assets/js/bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name: '[name].[contenthash].[ext]',
                                outputPath: 'assets/img/',
                                //   publicPath: './assets/',
                            },
                        },
                    ],
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: { minimize: true },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'Webpack react app',
            }),
            new MiniCssExtractPlugin({
                filename: 'assets/css/[name].css',
                chunkFilename: '[name].css',
            }),
        ],
    };
};
