const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')

const webpackConfig = {
	entry: {
		app: './src/main.js',
	},
	output: {
		filename: 'js/[name].[hash:8].js',
		path: path.resolve('dist')
	},
	resolve: {
		alias: {
			'@': path.resolve('src')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				include: path.resolve('src')
			},
			{ 
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.resolve('src')
			},
			{ 
				test: /\.s?css$/,
				use: extractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				}),
				include: path.resolve('src')
			},
			{
				test: /\.(png|jpe?g|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name][hash:8].[ext]'
						}
					}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name][hash:8].[ext]'
						}
					}
				]
			}
		]
	}
}

module.exports = webpackConfig