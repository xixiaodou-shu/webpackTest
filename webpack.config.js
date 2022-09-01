// 运行webpack首先要读取这个配置文件
const path = require('path')
// 1.导入插件，构造函数
// 通过 html-webpack-plugin 插件，将 src 目录下的 index.html 首页，复制到项目根目录中一份！
const HtmlPlugin = require('html-webpack-plugin')
// 2.创建插件实例
const htmlPlugin = new HtmlPlugin({
    // 要被复制的文件名
    template: './src/index.html',
    // 复制的文件名
    filename: './index.html'
})

// cleanWebpackPlugin插件作用是每次打包生成dist文件之前先删除dist下面的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanWebpackPlugin = new CleanWebpackPlugin()

//  mode: 'development'和'production' 
//   development：开发时候用，不进行优化，幅度快
//   production:
 
module.exports = {
    // 开发时候使用
    mode: 'development',
    // 让报错和源代码报错位置一致
    /* 在生产环境下，如果省略了 devtool 选项，则最终生成的文件中不包含 Source Map。
    这能够防止原始代码通 过 Source Map 的形式暴露给别有所图之人。*/
    // 开发环境下建议设置// 会暴露源代码
    devtool: 'eval-source-map', 
    // 生产环境下，建议关闭 SourceMap 或将 devtool 的值设置为 nosources-source-map
    // 只暴露行数，不暴露源代码
    // devtool: 'nosources-source-map',
    // devtool: 'source-map',


    // 打包入口
    entry: path.join(__dirname, './src/index.js'),
    // 打包出口
    output: {
        path: path.join(__dirname, './dist'),
        // 输出文件 将js文件生成到.js文件中
        filename: 'js/ bundle.js'
    },
  // 3. 通过plugins及诶的那使得htmlPlugin插件生效，把创建的插件挂载到plugins节点中
    plugins: [htmlPlugin, cleanWebpackPlugin],
    // 自动打开浏览器 
    devServer: {
        open: true, //初次打开包完成后，自动打开浏览器
        host: '127.0.0.1', //实时所使用的端口号
        port: 8080 //实施打包所使用的端口号 
    },

    module: {
        rules: [
            {
                // 匹配对象.css文件
                test:/\.css$/, 
                use: ['style-loader', 'css-loader']
            },
            {
                // 匹配对象.less文件
                test:/\.less$/, 
                use: ['style-loader', 'css-loader','less-loader']
            },
            {
            
                test: /\.jpg|png|gif$/,
                // limit是指定图片的大小，单位是字节，大于这个，图片就不会转化成base64；小于等于会转成base64
                // use: 'url-loader?limit=22229'
                // 等价写法 use指向一个对象
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 22228,
                        // 将图片生成到img文件中
                        outputPath:'image'
                    },
                },
            }, 
            { // 高级js
                test: /\.js$/,
                // exclude排除项，
                //表示babel-loader只需处理开发者编写的js文件，不需要处理node_modules下的js文件
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }

                }
            },



        ],
    }
}