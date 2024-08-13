const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
mode: 'development',
entry:
{
   bundle: path.resolve(__dirname, 'src/index.js')
},
output: {
   path: path.resolve(__dirname, 'dist'),
   filename: '[name][contenthash].js',
   clean: true,
},
module: {
      rules: [
         {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
         }, 
         {
         test: /\.(png|svg|jpeg|gif|woff2)$/i,
         type: 'asset/resource',
         use: [
            {
               loader: 'file-loader',
               options: {
               name: '[name].[ext]',
               outputPath: 'images/',
               },
            },
         ],
         },
      ],
},
plugins: [
   new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
   })
]
};