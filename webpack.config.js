const path = require('path');

module.exports = (env) => {
    return {
        entry: env.production===true ? './src/ContextProvider.js' :  './src/Mocked.js',
        output: {
        filename: 'ContextProvider.js',
        libraryTarget: "umd",
        library: "Context",
        path: path.resolve(__dirname, 'dist')
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist'
        },
        module: {
            rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                'style-loader',
                'css-loader',
                'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'url-loader'
                ]
            }
            ]
        }
    }
};