var path = require( 'path' );
var webpack = require( 'webpack' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: path.resolve( __dirname, 'src', 'app' ),
    output: {
        path: path.resolve( __dirname, 'dist' ),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve( __dirname, './' ),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /(\.(s*)css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    }, 
                    {
                        loader: 'sass-loader'
                    }
                ],
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'JSON Editor',
            template: 'index.hbs',
            hash: true,
        }),
        new webpack.DefinePlugin({
            NODE_ENV: process.env.NODE_ENV || JSON.stringify( 'production' ),
        }),
    ],
    resolve: {
        alias: {
            Components: path.resolve( __dirname, 'src', 'components' ),
            Styles: path.resolve( __dirname, 'src', 'styles' ),
        },
        extensions: ['.js', '.jsx', '.css', '.scss'],
    },
};