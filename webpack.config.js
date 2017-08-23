var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

function getHtmlConfig(name){
	return {
	      	title:name,
	      	filename:'view/'+name+'.html',
	      	template:'src/view/'+name+'.html',
	      	inject:true,
	      	favicon:'',
	      	hash:false,
	      	chunks:['common',name]
	      };
}
module.exports = {
     entry: {
     		'common':['./src/page/common/index.js'],
     		'index':['./src/page/index/index.js'],
 			'login':['./src/page/login/index.js']
 			},
     output:{
        	path: __dirname+'/dist',//文件存储路径
        	publicPath:'/dist/',//文件访问路径
         	filename: 'js/[name].js'
     		},
      plugins: [
	      new HtmlWebpackPlugin(getHtmlConfig('index')),
	      new HtmlWebpackPlugin(getHtmlConfig('login')),
	      new ExtractTextPlugin("css/[name].css"),
	      new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        })
      ],
       resolve : {
        alias : {
            node_modules    : __dirname + '/node_modules',
            util            : __dirname + '/src/util',
            page            : __dirname + '/src/page',
            service         : __dirname + '/src/service',
            image           : __dirname + '/src/image'
        }
    },
      module: {
	    rules: [
	      {
	        test: /\.css$/,
	        use: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          use: "css-loader"
	        })
	      },
		  { 
		  	test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
		  	use: 'url-loader?limit=100&name=resource/[name].[ext]'
		  }
	    ]
    }
 };