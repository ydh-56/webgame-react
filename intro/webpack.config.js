const path = require('path');

module.exports = {
    name:'word-relay-setting',
    mode: 'development', // 실서비스:production
    devtool:'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./client'],
    }, // 입력
    module:{
        rules:[{
            test:/\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env', '@babel/preset-react'],
                Plugins:['@babel/plugin-proposal-class-properties'],
            }
        }]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }, //출력
};