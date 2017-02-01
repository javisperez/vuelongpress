const webpack = require('webpack');
const package = require('./package.json');
const banner  =
    " VueLongpress plugin v" + package.version + "\n" +
    "\n" +
    " A button component that requires you to keep pressing to confirm a given action\n" +
    "\n" +
    " @author "+ package.author.name +" <"+ package.author.email +">\n" +
    " "+ package.homepage +"\n" +
    " Released under the MIT License.";

module.exports = {
    entry: './src/longpress-button.vue',

    output: {
        path: './dist/',
        filename: 'vue-longpress.js',
        library: 'VueLongpress',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    resolve: {
        extensions: ['', '.js', '.vue']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },

    plugins: [
        new webpack.BannerPlugin(banner),
         new webpack.optimize.UglifyJsPlugin({
            minimize: false,
            sourceMap: false,
            mangle: false,
            compress: {
                warnings: false
            },
            output: {
                comments: true
            }
        })
    ]
};