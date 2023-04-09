const path = require('path');
// import * as url from 'url';
// const __dirname = url.fileURLToPath(new URL('.', import.meta,eta.url));
// console.log(__dirname);
module.exports = {
    mode: 'development', // production
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
    // devServer: {
    //     port: 9000,
    //     open: true,
    //     static: {
    //         directory: path.resolve(__dirname, 'dist')
    //     }
    // }
}