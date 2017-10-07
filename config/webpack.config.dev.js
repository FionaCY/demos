const webpack = require('webpack')
const htmlWepackPlugin = require('html-webpack-plugin')
const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: './src/js/index.js',
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, '../dist')
	},
	devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9101
  },
	module: {
		rules: [
			{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader'
				}
			}
		]
	},
	plugins: [
		new htmlWepackPlugin({
			template: './src/html/index.html'
		}),
		new cleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '..') })
	]
}