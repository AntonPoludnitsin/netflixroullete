const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	context: path.join(__dirname, 'src'),
	devtool: "source-map",
	entry: './index.js',
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
				use: ['style-loader', 'css-loader'],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'netflixRoulette',
			template: '../public/index.html'
		})
	],
	devServer: {
		open: true,
		port: 3000
	}
};
