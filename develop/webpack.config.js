import path from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __host = 'localhost';
const __port = '8080';
const __baseUrl = `http://${__host}:${__port}/`

export default {
	mode: 'development',

	entry: [
		'./src/app.js',
	],

	output: {
		path: path.resolve('../', 'js'),
		filename: 'index.js',
		publicPath: __baseUrl,
	},

	devServer: {
		hot: true,
		historyApiFallback: true,
		host: __host,
		port: __port,
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader',
				]
			}
		],
	},

	plugins: [
		new VueLoaderPlugin(),

		//  Генерация index.html требуется только дри разработке.
		//  Для билда этот файл не нужен.
		...( process.env.npm_lifecycle_event === 'dev'
				?
					[
						new HtmlWebpackPlugin( {
							filename: 'index.html',
							template: 'index.html',
							inject: 'body',
						} )
					]
				:
					[]
		),

		new HtmlWebpackPlugin( {
			filename: '../main.tpl',
			template: 'main.html',
			inject: 'body',
		} ),
	],

};
