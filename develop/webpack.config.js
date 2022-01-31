import webpack from 'webpack';
import { fileURLToPath } from 'url';
import path, { dirname }  from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import __config from './app.config.js';

const __task = process.env.npm_lifecycle_event;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
	mode: 'development',

	entry: [
		'./src/app.js',
	],

	output: {
		path: path.resolve(__dirname, '../js'),
		filename: 'index.js',
		publicPath: __config[__task].baseUrl,
	},

	devServer: {
		hot: true,
		historyApiFallback: true,
		host: __config.dev.host,
		port: __config.dev.port,
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
					'sass-loader',
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

		//  Генерация index.html требуется только при разработке.
		//  Для билда этот файл не нужен.
		...( __task === 'dev'
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
};
