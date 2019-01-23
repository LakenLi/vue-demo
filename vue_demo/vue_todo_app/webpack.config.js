const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UrlLoaderPlugin = require('url-loader')
//const CssLoaderPlugin = require('css-loader')

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins:[
        new VueLoaderPlugin(),
        //new CssLoaderPlugin(),
        //new UrlLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: ['vue-loader', 'style-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png|jpeg|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 1024,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
        ]
    }
}