var path = require('path');

module.exports = {
	entry: './script.js',
	output: {
		path: path.resolve(__dirname, ''),
		filename: 'build.js'
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/, 
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}