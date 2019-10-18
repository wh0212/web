# Express 详解

## 目标
* 了解 Express 框架
* 安装 Express
* 搭建 Express 服务器
* Express 路由


## Express介绍
基于 Node.js 平台，快速、开放、极简的 Web 开发框架。Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。

#### Express的特点
* 可以设置中间件来响应HTTP请求
* 定义了路由表用于执行不同的HTTP请求动作：url=资源）映射
* 可以通过向模板传递参数来动态渲染HTML页面

#### Express官网
http://www.expressjs.com.cn（Express中文网）
http://expressjs.com


## Express 安装
步骤：
* 创建一个目录，然后进入此目录并将其作为当前工作目录。
```bash
$ mkdir myapp
$ cd myapp
```

* 通过 npm init 命令为你的应用创建一个 package.json 文件
```bash
$ npm init
```
此命令将要求你输入几个参数，例如此应用的名称和版本。 你可以直接按“回车”键接受大部分默认设置即可，下面这个除外：

```bash
entry point: (index.js)
```
键入你所希望的名称，这是当前应用的入口文件。如果你希望采用默认的 index.js 文件名，只需按“回车”键即可。

* 接下来在 myapp 目录下安装 Express 并将其保存到依赖列表中。如下：
```bash
$ npm install express --save
```
如果只是临时安装 Express，不想将它添加到依赖列表中，可执行如下命令：

```bash
$ npm install express --no-save
```

>注意：
npm 5.0+ 版本在默认情况下会将安装的模块添加到 package.json 文件中的 dependencies 列表中。对于较老的 npm 版本，你就必须指定 --save 参数。然后，照旧执行 npm install 命令即可自动安装依赖列表中所列出的所有模块。


## Express搭建服务器
```javascript
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('服务已启动 http://localhost:3000')
})
```

启动这个应用
```bash
node app.js
```

## Express框架中的路由
#### 路由介绍
路由是指接收用户请求，处理用户数据，返回结果给用户的一套程序，可以理解为：生成动态网页的程序；

>后端路由的核心：URL

#### 前后端路由的区别

###### 前端路由
页面不刷新，前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，每跳转到不同的URL都是使用前端的锚点路由.
随着（SPA）单页应用的不断普及，前后端开发分离，目前项目基本都使用前端路由，在项目使用期间页面不会重新加载。

* 优点:
1.用户体验好，和后台网速没有关系，不需要每次都从服务器全部获取，快速展现给用户
2.可以再浏览器中输入指定想要访问的url路径地址。
3.实现了前后端的分离，方便开发。有很多框架都带有路由功能模块。

* 缺点:
1.使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存
2.单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置

###### 后端路由
浏览器在地址栏中切换不同的url时，每次都向后台服务器发出请求，服务器响应请求，在后台拼接html文件传给前端显示, 返回不同的页面,
意味着浏览器会刷新页面，网速慢的话说不定屏幕全白再有新内容。后端路由的另外一个极大的问题就是 前后端不分离。

* 优点：分担了前端的压力，html和数据的拼接都是由服务器完成。

* 缺点：当项目十分庞大时，加大了服务器端的压力，同时在浏览器端不能输入制定的url路径进行指定模块的访问。
另外一个就是如果当前网速过慢，那将会延迟页面的加载，对用户体验不是很友好。

######使用前端路由条件
在单页面应用，大部分页面结构不变，只改变部分内容的使用

## Express 路由配置
路由（Routing）是由一个 URI（或者叫路径）和一个特定的 HTTP 方法（GET、POST 等）组成的，涉及到应用如何响应客户端对某个网站节点的访问。
每一个路由都可以有一个或者多个处理器函数，当匹配到路由时，这个或者这些函数将被执行。

## 请求方式
#### GET
get请求是用来获取数据的，只是用来查询数据，不对服务器的数据做任何的修改，新增，删除等操作。
在这里我们认为get请求是安全的，以及幂等的：
* 安全就是指不影响服务器的数据
* 幂等是指同一个请求发送多次返回的结果应该相同

特点：
* get请求会把请求的参数附加在URL后面，这样会产生安全问题，如果是系统的登陆接口采用的get请求，需要对请求的参数做一个加密。
* get请求其实本身HTTP协议并没有限制它的URL大小，但是不同的浏览器对其有不同的大小长度限制

#### POST
post请求一般是对服务器的数据做改变，常用来数据的提交，新增操作。

特点：
* post请求的请求参数都是请求体中
* post请求本身HTTP协议也是没有限制大小的，限制它的是服务器的处理能力

#### PUT
put请求与post一样都会改变服务器的数据，但是put的侧重点在于对于数据的修改操作，但是post侧重于对于数据的增加。

#### DELETE1
delete请求用来删除服务器的资源。

## 路由实现

```javascript
app.METHOD(PATH, HANDLER)
```
* app 是 express 的实例。
* METHOD 是 HTTP 请求方法。
* PATH 是服务器上的路径。
* HANDLER 是在路由匹配时执行的函数

#### get请求
```javascript
const express = require('express')
const app = express()

app.get('/login', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('服务已启动 http://localhost:3000')
})
```

#### post请求
```javascript
const express = require('express')
const app = express()

app.post('/register', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('服务已启动 http://localhost:3000')
})
```

#### put请求
```javascript
const express = require('express')
const app = express()

app.put('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('服务已启动 http://localhost:3000')
})
```

#### delete请求
```javascript
const express = require('express')
const app = express()

app.delete('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('服务已启动 http://localhost:3000')
})
```

## 静态文件托管
为了提供诸如图像、CSS 文件和 JavaScript 文件之类的静态文件，请使用 Express 中的 express.static 内置中间件函数。
语法：
```javascript
express.static(root, [options])
```

例如，通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了：

```javascript
app.use(express.static('public'))
```

Express 在静态目录查找文件，因此，存放静态文件的目录名不会出现在 URL 中。
如果要使用多个静态资源目录，请多次调用 express.static 中间件函数：

app.use(express.static('public'))
app.use(express.static('files'))
访问静态资源文件时，express.static 中间件函数会根据目录的添加顺序查找所需的文件。


app.use('/static', express.static('public'))
现在，你就可以通过带有 /static 前缀地址来访问 public 目录中的文件了。



app.use('/static', express.static(path.join(__dirname, 'public')))
