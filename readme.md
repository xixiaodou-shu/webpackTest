# webpack基础使用
## 运行 npm run dev
### 打包发布 npm run build
考点：
仅针对初中级，大概梳理下面几个

什么是webpack
核心概念
与gulp、grunt的区别
打包过程
怎么实现按需加载
你平时项目中写过webpack吗
什么是webpack
webpack是一个静态模块处理器，当它处理应用程序时，它会递归地构建一个关系依赖图，其中包含应用程序需要的每个模块，然后把所有这些模块打包成一个或多个包。

核心概念
entry（入口）
告诉webpack要使用哪些模块，作为内部依赖图的开始

output（出口）
告诉webpack在哪里输出它所构建的bundles，以及如何命名这些文件

loader
处理非JS文件，把文件转换成webpack能处理的模块

loader 有两个属性：

- test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
- use 属性，表示进行转换时，应该使用哪个 loader。
复制代码
plugin 从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  //引入plugin
 
module.exports = {
  // JavaScript 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        use: [
            {loader: MiniCssExtractPlugin.loader},
            'css-loader',
        ],
      }
    ]
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: `[name]_[contenthash:8].css`,
          chunkFilename: '[id].css',
      })
  ]
};
复制代码

Module：
模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。

Chunk
代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。

与gulp、grunt的区别
Grunt
有大量现成的插件封装了常见的任务，也能管理任务之间的依赖关系，自动化执行依赖的任务

Gulp
是一个基于流的自动化构建工具。 除了可以管理和执行任务，还支持监听文件、读写文件。Gulp 被设计得非常简单，只通过下面5个方法就可以胜任几乎所有构建场景：

通过 gulp.task 注册一个任务；
通过 gulp.run 执行任务；
通过 gulp.watch 监听文件变化；
通过 gulp.src 读取文件；
通过 gulp.dest 写文件。
Gulp 的最大特点是引入了流的概念，同时提供了一系列常用的插件去处理流，流可以在插件之间传递。Gulp 的优点是好用又不失灵活，既可以单独完成构建也可以和其它工具搭配使用。

grunt和gulp是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。其缺点是集成度不高，要写很多配置后才可以用，无法做到开箱即用。

webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能。

所以总结一下：

从构建思路来说 gulp和grunt需要开发者将整个前端构建过程拆分成多个Task，并合理控制所有Task的调用关系 webpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工

webpack有哪些常见 loader 和 plugin，你用过哪些
file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件

source-map-loader：加载额外的 Source Map 文件，以方便断点调试

image-loader：加载并且压缩图片文件

babel-loader：把 ES6 转换成 ES5

css-loader：加载 CSS，支持模块化、压缩、文件导入等特性

eslint-loader：通过 ESLint 检查 JavaScript 代码

define-plugin：定义环境变量

commons-chunk-plugin：提取公共代码

uglifyjs-webpack-plugin：通过UglifyES压缩ES6代码

打包过程
1、初始化：启动构建，读取和合并参数，加载plugin，实例化complier

2、编译：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理。

3、输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统。