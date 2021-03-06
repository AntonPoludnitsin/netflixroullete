const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	context: path.join(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'main-[hash:8].js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			//Loading images
			{
				test: /\.(png|jpg|jpeg|gif|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images',
							name: '[name]-[sha1:hash:7].[ext]'
						}
					}
				]
			},
			// Loading css
			{
				test: /\.(css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'netflixRoulette',
			template: '../public/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'main-[hash:8].css'
		})
	],
	devServer: {
		open: true,
		port: 3000
	}

};
