const path = require('path')

module.exports = {
    mode: 'development',
    entry: './main.ts',
    watch: true,
    output: {
        filename: 'allergic-text.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'allergic-text',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    }
}