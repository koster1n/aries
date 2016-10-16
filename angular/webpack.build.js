'use strict';

var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var _ = require('lodash');

module.exports = function(options) {
	var BUILD = !!options.BUILD;
	var TEST = !!options.TEST;

	var config = {};

	config.entry = {
		app: path.resolve(__dirname, './resources/angular/app.js')
	};
	if (!TEST) {
		config.entry.vendor = getNPMPackageIds();
	}

	if (!BUILD) {
		config.devtool= 'source-map'
	}

	config.output = {
        path: path.resolve(__dirname, './resources/public/js/webpack'),
        filename: 'app.bundle.js',
        publicPath: "./js/webpack/"
    }

	config.node = {
		  fs: "empty"
	}

	config.module = {
		loaders: [
		    { test: /\.css$/,                        loader: "style-loader!css-loader" },
			{ test: /bootstrap\/js\//,               loader: 'imports?jQuery=jquery' },
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
			{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/font-woff" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" },
			{ test: /\.less$/,                       loader: "style!css!less" },
			{ test: /\.(jpe?g|png|gif)$/i,           loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]'}

		]
	};

	if (!BUILD && !TEST) {
		config.devServer = {
			contentBase: './resources/public/',
			hot: true,
		    inline: true
		};
	}

	config.plugins = [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			jquery: "jquery"
		})
	];
	if (BUILD) {
		config.plugins.push(new ngAnnotatePlugin({ add: true }));
	}
	if (!TEST) {
		config.plugins.push(new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"));
	}

	return config;
}

function getNPMPackageIds() {
	var packageManifest = {};
	try {
		packageManifest = require('./package.json');
	} catch (e) {
		console.log('Missing package.json manifest');
	}
	return _.keys(packageManifest.dependencies) || [];
}
