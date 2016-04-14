var path = require('path');
module.exports = {
	entry: [
		'./demo/index.js'
	],
	output:{
		path: path.join(__dirname, '/demo'),
		filename: 'bundle.js'
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
			{test: /\.less/,loader: 'style-loader!css-loader!less-loader'},
			{test: /\.(css)$/,loader: 'style-loader!css-loader'},
			{test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]'}
		]
	},
	devServer: {
        contentBase: 'demo/'
    }
}
