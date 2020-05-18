const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
	const isProd = env.mode === 'production';
	const isDev = env.mode === 'development';

	const getStyleLoaders = () => {
		return [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
	};
	const getPlugins = () => {
		const plugins = [
			new HtmlWebpackPlugin({
				title: 'netflixRoulette',
				template: '../public/index.html'
			})
		];
		if (isProd) {
			plugins.push(
				new MiniCssExtractPlugin({
					filename: 'main-[hash:8].css'
				}))
		}
		return plugins;
	};


	return {
		mode: isProd ? 'production' : isDev && 'development',
		output: {
			// ToDo: isProd && 'main-[hash:8].js' почему не так?
			filename: isProd ? 'main-[hash:8].js' : undefined,
		},
		context: path.join(__dirname, 'src'),
		devtool: isDev ? "source-map" : "",
		entry: './index.js',

		resolve: {
			extensions: ['.js', '.jsx']
		},
		module: {
			rules: [
				{
					test: /\.js$/,
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
					use: getStyleLoaders()
				},
			]
		},
		plugins: getPlugins(),
		devServer: {
			open: true,
			port: 3000
		}
	}
};
