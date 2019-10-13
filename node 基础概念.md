# Node 基础概念

## 目标
* 掌握 Node 安装
* Node 服务器
* 简单 Node 服务器搭建

## Node 安装

#### 下载地址
https://nodejs.org/en/download/

#### windows 下安装检测
检测PATH环境变量是否配置了Node.js，点击开始=》运行=》输入"cmd" => 输入命令"path"，输出如下结果
```cmd
path
```

输出结果：
```cmd
PATH=C:\oraclexe\app\oracle\product\10.2.0\server\bin;C:\Windows\system32;
C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;
c:\python32\python;C:\MinGW\bin;C:\Program Files\GTK2-Runtime\lib;
C:\Program Files\MySQL\MySQL Server 5.5\bin;
C:\Program Files\nodejs\;
C:\Users\rg\AppData\Roaming\npm
```
检测 node 版本
```cmd
node --version
```
正确输出版本号，说明node安装成功

## Nodejs
* Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
* Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效
* Node.js 的包管理器 npm，是全球最大的开源库生态系统

#### Node业务
* 高性能的网站服务器
* 实时多人游戏后台服务器
* 简单易用的命名行应用程序
* gulp、less、bower、fis、http-server
* 高大上的桌面应用程序
* 使用 Web 技术 作为解决方案
* electron Linus + Max + Windows
* 底层的物联网开发
* 移动开发


#### Node 服务器与Java服务器对比

* Node.js优点：
1、采用事件驱动、异步编程，为网络服务而设计。其实Javascript的匿名函数和闭包特性非常适合事件驱动、异步编程。而且JavaScript也简单易学，很多前端设计人员可以很快上手做后端设计。
2、Node.js非阻塞模式的IO处理给Node.js带来在相对低系统资源耗用下的高性能与出众的负载能力，非常适合用作依赖其它IO资源的中间层服务。
3、Node.js轻量高效，可以认为是数据密集型分布式部署环境下的实时应用系统的完美解决方案。Node非常适合如下情况：在响应客户端之前，您预计可能有很高的流量，但所需的服务器端逻辑和处理不一定很多。

node.js与Java比较：
（1）node.js比Java更快 ：node.js开发快，运行的效率也算比较高，但是如果项目大了就容易乱，而且javascript不是静态类型的语言，
要到运行时才知道类型错误，所以写的多了之后免不了会出现光知道有错但是找不到哪儿错的情况，所以测试就得些的更好更详细。
     java开发慢，但是如果项目大、复杂的话，用java就不容易乱，管理起来比node.js省。

（2）Node.js 前后端都采用Javascript，代表未来发展的趋势，而java则是现在的最流行的服务器端编程语言。
（3）Node.js和Java EE——一种是解释语言，一种是编译语言.


Node.js给我们提供一个交互式运行环境——REPL，在这个环境中我们可以做一些简单的应用程序的测试或调试。进入命令行窗口，输入”node”命令并按下回车键，即可进入REPL运行环境。

任何时候，输入的任何表达式回车键后，运行环境都会显示该表达式的执行结果。

或者执行一些布尔类型的操作

===在JavaScript中表示的是完全相等

2，REPL环境中操作变量

在REPL环境中可以使用var来定义一个变量并为其赋值。

出现不同的结果的原因是环境内部使用JavaScript的eval函数来解析该表达式的。
对于赋值后的变量名，如果想查看变量的值，只需要在环境中输入变量名就可以了。
在给对象赋值时：


3，REPL环境中使用下划线

通过下划线来访问最近使用的表达式：

但是输入下划线并不意味着可以修改变量的值，可以在执行上述代码后，再输入该变量的名称a，你会发现a的值没有发生改变。

4，REPL环境中直接运行函数



5，REPL环境中的上下文对象

在Node.js的模块文件中，可以使用start方法来开启一个REPL的运行环境。可以在start方法中使用一个参数对象来指定开启REPL运行环境时使用的各种选项。start方法返回被开启的REPL运行环境，可以为REPL运行环境指定一个上下文对象，可以将该上下文对象保存的变量作为REPL运行环境中的全局变量来进行使用。

var repl = require("repl");
var con = repl.start().context;
con.msg = "示例消息";
con.testFunction = function(){console.log(con.msg);};
以上代码保存到contextTest.js中，在命令行窗口中输入node contextTest.js。

6，REPL环境中的基础命令

.break：书写一个多行函数的中途想要放弃该函数的书写或重写该函数时候，该命令可以返回到命令提示符的起点处。或者是按下两次的ctrl+c
.clear：清除REPL运行环境上下文对象中保存的所有变量与函数。
.exit：退出REPL运行环境。
.help：显示所有基础命令。
.save：REPL环境中输入的所有表达式保存到一个文件中。
.load：把文件中的所有表达式载入到REPL的环境中。



```javascript
//1. 导入 http 模块
const http = require('http');

//2. 创建服务器对象
const server = http.createServer();

//3. 开启服务器
server.listen(3000, () => {
    console.log('Server is running...');
});

//4. 监听浏览器请求并进行处理 response

server.on('request', (req, res) => {
    // end方法能够将数据返回给浏览器，浏览器会显示该字符串
    res.end('Hello Nodejs');
});
```

on ：该方法用来监听事件

　　参数1（此处的request）：事件类型，request 代表浏览器请求事件

　　参数2 ：回调函数。当监听到浏览器请求后出发的回调函数，该函数中有两个参数

　　　　　　第一个参数（此处的 req ）：请求对象

　　　　　　第二个参数（此处的 res ）：相应对象

　　end 方法能够将数据返回给浏览器，浏览器会显示该字符串
