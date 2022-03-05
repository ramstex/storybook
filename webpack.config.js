import webpack from 'webpack';
import path   from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import __config from './config/app.config.js';

export default (env, argv) => {
	return {
		mode: 'development',

		entry: [
			'./src/app.js',
		],

		output: {
			path: path.join(process.cwd(), '../js'),
			filename: 'index.js',
			publicPath: __config.mode[argv.mode].baseUrl,
		},

		devServer: {
			hot: true,
			historyApiFallback: true,
			host: __config.mode[argv.mode].host,
			port: __config.mode[argv.mode].port,
		},

		module: {
			rules: [
				{
					test: /\.vue$/,
					use: 'vue-loader',
				},

				{
					test: /\.s[ac]ss$/,
					use: [
						'vue-style-loader',
						'css-loader',
						'resolve-url-loader',
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							}
						},
					],
				},
			],
		},

		plugins: [
			new webpack.DefinePlugin({
				__VUE_OPTIONS_API__: true,
				__VUE_PROD_DEVTOOLS__: true,
			}),

			new VueLoaderPlugin(),

			//  Генерация index.html требуется только при разработке. Для билда этот файл не нужен.
			...( argv.mode === 'development'
					?
						[
							new HtmlWebpackPlugin( {
								filename: 'index.html',
								template: 'src/index.html',
								inject: 'body',
							} )
						]
					:
						[]
			),

			new HtmlWebpackPlugin( {
				filename: '../main.tpl',
				template: 'src/main.html',
				inject: 'body',
			} ),
		],
	}
};
