const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/allergic-text.ts',
    watch: true,
    output: {
        filename: 'allergic-text.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'AllergicText',
        libraryTarget: 'var'
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