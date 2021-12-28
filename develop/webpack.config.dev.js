import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	mode: 'development',

	entry: [
		'./src/app.js',
	],

	devServer: {
		hot: true,
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
		],
	},

	plugins: [
		new VueLoaderPlugin(),

		new HtmlWebpackPlugin( {
			filename: 'index.html',
			template: 'index.html',
			inject: true,
		} ),
	],

};
