# React 第一天

## 目标
* 熟悉 webpack的安装和基本使用
* .CSS、.SCSS 文件类型
* ES5、ES6 语法
* JSX 语法
gulp
## webpack
![webpack](http://www.runoob.com/wp-content/uploads/2017/01/what-is-webpack.png)

>webpack是一个 Javascript 应用程序的静态模块打包器，当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。它做的事情是：分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

##### 安装webpack
安装 webpack，你本地需要有node环境，我们使用 npm 来安装 webpack：

```
//全局安装
npm isntall -g webpack
//本地安装（安装到你的项目目录）
npm install --save-dev webpack
```

#### webpack.config.js

从 webpack v4.0.0 开始，可以不用引入一个配置文件。然而，webpack 仍然还是高度可配置的。在开始前你需要先理解四个核心概念：

* 入口(entry)
* 输出(output)
* loader
* 插件(plugins)



```JavaScript
// 一个常见的`webpack`配置文件
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
        entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
        output: {
            path: __dirname + "/build",
            filename: "bundle-[hash].js"
        },
        devtool: 'none',
        devServer: {
            contentBase: "./public", //本地服务器所加载的页面所在的目录
            historyApiFallback: true, //不跳转
            inline: true,
            hot: true
        },
        module: {
            rules: [{
                    test: /(\.jsx|\.js)$/,
                    use: {
                        loader: "babel-loader"
                    },
                    exclude: /node_modules/
                }, {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [{
                            loader: "css-loader",
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }, {
                            loader: "postcss-loader"
                        }],
                    })
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
};
```

#### 使用 webpack
1、创建一个空的项目文件夹

```
//cd 到你想要创建的目录
cd Desktop
//mkdir 项目名称
mkdir webpackDemo
```
2、使用 npm 初始化项目

```
//cd 到项目目录
cd webpackDemo
// 初始化项目
npm init
```
>package.json文件，这是一个标准的npm说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等

3、使用 npm 安装 webpack
```
//全局安装
npm isntall -g webpack
//本地安装（安装到你的项目目录）
npm install --save-dev webpack
```
4、创建项目文件开始使用

5、执行打包命令
```
webpack {entry file} {destination for bundled file}
```
在这里会遇到的问题

>问题1:webpack 执行失败，找不到 webpack 模块</br>
npm link webpack

</br>
>问题2:webpack 版本过高</br>
webpack source/index.js -o  public/bundle.js

#### Loader
Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。
所以如果我们需要在应用中添加 css 文件，就需要使用到 css-loader 和 style-loader，他们做两件不同的事情，css-loader 会遍历 CSS 文件，然后找到 url() 表达式然后处理他们，style-loader 会把原来的 CSS 代码插入页面中的一个 style 标签中。
接下来我们使用以下命令来安装 css-loader 和 style-loader(全局安装需要参数 -g)。

```
//安装 css-loader style-loader
npm install css-loader style-loader
```

>require CSS 文件的时候都要写 loader 前缀 !style-loader!css-loader!

#### 配置文件 webpack.config.js 使用

Webpack拥有很多其它的比较高级的功能（比如说本文后面会介绍的loaders和plugins），这些功能其实都可以通过命令行模式实现，但是正如前面提到的，这样不太方便且容易出错的，更好的办法是定义一个配置文件，这个配置文件其实也是一个简单的JavaScript模块，我们可以把所有的与打包相关的信息放在里面。

1、创建 webpack.config.js文件

2、添加配置

```JavaScript
module.exports = {
    entry: "./runoob1.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};

```

3、命令行执行 webpack 打包

## .SCSS 和 .CSS

#### css-loader style-loader sass-loader

同样，要处理 .SCSS 文件，就要交给相应的 loadeer 来处理。根据 webpack 规则：放在最后的 loader 首先被执行。所以，首先应该利用sass-loader将 scss 编译为 css，剩下的配置和处理 css 文件相同。对于其他的 css 预处理语言，处理方式一样，首先应该编译成 css，然后交给 css 的相关 loader 进行处理。

## ES5 ES6
```
//安装babel实现ES6到ES5

npm install -D babel-core babel-preset-es2015
```

```
//安装babel-loader

npm install -D babel-loader
```
ECMAScript
>核心代码书写规范

[ES5 ES6]<https://www.cnblogs.com/lovesong/p/4908871.html>


## JSX
babel-loader

## 总结
webpack
1、模块化开发（import，require）
2、预处理（Less，Sass，ES6，TypeScript……）
3、主流框架脚手架支持（Vue，React，Angular）
4、庞大的社区（资源丰富，降低学习成本）
