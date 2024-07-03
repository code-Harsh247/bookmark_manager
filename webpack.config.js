const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        popup: './src/popup/popup.tsx',
    },
    module:{
        rules:[
            {
                use:'ts-loader',
                test:/\.tsx$/,
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new CopyPlugin({    
            patterns: [
                { from: path.resolve('src/manifest.json'), 
                    to: path.resolve('dist') 
                },
                { from: path.resolve('src/assets/icon16.png'), 
                    to: path.resolve('dist') 
                },
                { from: path.resolve('src/assets/icon48.png'), 
                    to: path.resolve('dist') 
                },
                { from: path.resolve('src/assets/icon128.png'), 
                    to: path.resolve('dist') 
                },
            ],
        }),
        new HTMLPlugin({
            title: "BookMark Manager",
            filename: "popup.html",
        })

    ],
    resolve:{
        extensions:['.ts','.js','.tsx']
    },
    output:{
        filename:"index.js"
    }

}