const path = require('path');
const webpack = require("webpack");
const Vue = require('vue');

module.exports = {
  entry: {
  	foo:'./src/js/foo.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].build.js'
  },
  module:{
    rules: [
		    {
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader'
		      }
		    },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
				  test: /\.vue$/,
				  loader: 'vue-loader',
				  options: {
				    loaders: {
				      scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
				      sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
				    }
				  }
				}
		  ]
           //配置loader，注意使用rules而不是loaders
  	},
  plugins:[
          new webpack.HotModuleReplacementPlugin()
            //注意是数组
  ],
  devServer: {
	    contentBase: "./", //path.join(__dirname, "dist")
      historyApiFallback:true,
      compress: true,
      inline:true,
      hot:true,
      port: 3000
	}
};



console.log(__dirname)

