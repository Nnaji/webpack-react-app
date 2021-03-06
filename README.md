# webpack-react-app
App development with react and webpack4
# Tools
### Requirements
Nodejs & NPM (For installing and managing packages)
Alternately:
Nodejs and yarn(for installing and managing packages)

## Installation
### Webpack specific tools
single line installation
```
npm install --save-dev webpack webpack-cli webpack-dev-server eslint prettier stylelint eslint-config-prettier eslint-plugin-prettier stylelint-config-prettier stylelint-prettier
```
```
npm init
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev html-webpack-plugin clean-webpack-plugin

```
### Linting tools
```
npm install --save-dev eslint eslint-config-prettier eslint-plugin-prettier

```
### Code formating tools
```
npm install --save-dev prettier
npm install --save-dev stylelint stylelint-config-prettier stylelint-prettier

```
### Adding Babel
```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/cli

```
### CSS & SASS
```
npm install --save-dev mini-css-extract-plugin html-loader css-loader url-loader file-loader node-sass sass-loader
```
```
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
```
