/**
 * Created by liuyuan on 2017/4/22.
 */

module.exports = {
    devtool: 'eval-source-map',//eval-source-map仅在开发中使用，生产环境下对安全和性能都有影响     cheap-module-eval-source-map 方法构建速度更快，建议大型项目中使用
    entry: __dirname + '/app/main.js', //唯一入口文件
    output: {
        path: __dirname + '/public',//打包后文件存放的地方
        filename: 'bundle.js' //打包后输出文件的文件名
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader",
                query:{
                    presets:["es2015","react"]
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader ! css-loader ?modules ! postcss-loader', //添加对样式表的处理  感叹号的作用在于能使同一文件使用不同的loader
            }
        ]
    },

    postcss: [
      require('autoprefixer') //调用autoprefixer
    ],
    plugins:[
      new webpack.BannerPlugin('Copyright Flying Unicorns inc.')
    ],

    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 63342
    }
};


