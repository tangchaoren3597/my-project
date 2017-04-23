/**
 * Created by liuyuan on 2017/4/22.
 */

module.exports = {
    devtool: 'eval-source-map',//eval-source-map���ڿ�����ʹ�ã����������¶԰�ȫ�����ܶ���Ӱ��     cheap-module-eval-source-map ���������ٶȸ��죬���������Ŀ��ʹ��
    entry: __dirname + '/app/main.js', //Ψһ����ļ�
    output: {
        path: __dirname + '/public',//������ļ���ŵĵط�
        filename: 'bundle.js' //���������ļ����ļ���
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
                loader:'style-loader ! css-loader ?modules ! postcss-loader', //��Ӷ���ʽ��Ĵ���  ��̾�ŵ�����������ʹͬһ�ļ�ʹ�ò�ͬ��loader
            }
        ]
    },

    postcss: [
      require('autoprefixer') //����autoprefixer
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


