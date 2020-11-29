const path = require('path');

module.exports = {
    mode: 'development',
    entry: './dicey.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
            }
        ]   
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'dicey.js',
        path: path.resolve(__dirname, 'dist/js')
    }
};