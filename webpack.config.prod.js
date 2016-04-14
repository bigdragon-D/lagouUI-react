var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require("webpack");
module.exports = {
	entry: [
		'./src/main.js'
	],
	output: {
        path: './build',
        library: 'main',
        libraryTarget: 'commonjs2',
        filename: 'reactUI.js'
    },
	resolve: {
        extensions: ['', '.js', '.jsx']
    },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
                loaders: [
                    'react-hot',
                    'es3ify',
                    'babel?{presets:["es2015", "stage-0", "react"]}'
                ],
                exclude: /node_modules/
			},
			{test: /\.less/,loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader?modules&importLoaders=1')},
			{test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]'}
		]
	},
	plugins: [
  		new ExtractTextPlugin("reactUI.css")
    ]
}
