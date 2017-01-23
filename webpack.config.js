
var webpack=require("webpack");
//commo.js依赖
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//插入文件，新建html
var HtmlWebpackPlugin=require('html-webpack-plugin');
//分离css
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
	//插件项
	plugins:[commonsPlugin],
	entry:{
		index:'./echartapp.js'
	},
	//入口文件输出配置
	output:{
		path:'build',
		filename:'[name].js'
	},
	plugins:[new HtmlWebpackPlugin({
		title: 'app',
		filename: 'index.html',
		template:'index.html',
		inject:'body',
		hash: true
	}),new ExtractTextPlugin(
	"css/[name].css",{allChunks: true,disable: false}),
	new webpack.ProvidePlugin({//全局加载jq
            $: "jquery",
            jQuery: "jquery"
        })],
	module:{
		//加载器配置
		
		loaders:[
			{test:/\.css$/,loader:ExtractTextPlugin.extract('style-loader','css-loader','postcss-loader')},
			
			{test:/\.(jpg|png)$/,loader:'url-loader?limit=8192'},

			{test: /\.js$/,exclude: /node_modules/,loader: 'babel-loader',query: {presets: ['es2015']}}
		]
	 },
}