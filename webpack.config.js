const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        alias: {
        //   constants: path.resolve(__dirname, 'src/constants'),
        //   actions: path.resolve(__dirname, 'src/actions'),
        //   containers: path.resolve(__dirname, 'src/containers'),
        //   components: path.resolve(__dirname, 'src/components'),
        //   reducers: path.resolve(__dirname, 'src/reducers'),
        //   images: path.resolve(__dirname, 'src/images'),
          styles: path.resolve(__dirname, 'src/styles'),
        //   utility: path.resolve(__dirname, 'src/utility')
        }
      },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(css|sass)$/,
                use: [{
                    loader: "style-loader"
                  }, {
                    loader: "css-loader" 
                  }, {
                    loader: "sass-loader"
                  }]
              }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
    port: "5200"
    }
};