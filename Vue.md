# 安装

## CND
* 对于制作原型或学习，你可以这样使用最新版本
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

## npm
* 在vue构建大型应用时推荐使用npm安装，能很好的和诸如webpack或browserify模块打包器配合使用。同时Vue也提供配套工具来开发单文件组件

```npm
# 最新稳定版
npm install vue
```

## 什么是vue.js
* vue.js是目前最火的一个前端框架，react是最流行的一个前端框架(还可以开发APP，vue也可以开发APP，借助于weex)
* vue.js是一套构建用户界面的渐进式框架，只关注视图层，他不仅易于上手，还便于与第三方库或既有项目整合

> new Vue() → 执行`Vue.prototype._init`方法 → 进行Vue初始化 → 初始化完成

### vue简介

* vue.js是一个构建数据驱动的web界面的框架
* vue.js的目标是实现相应的数据绑定和组合的视图组件
* vue.js的核心是一个响应的数据绑定系统

## ![](https://upload-images.jianshu.io/upload_images/1808251-216a4f6516af3559.png?imageMogr2/auto-orient/strip|imageView2/2/w/900/format/webp)

## 框架和库的区别

+ 框架：是一套完整的解决方案，对项目的侵入性较大，项目如果需要更换框架，则需要重新架构整个项目
+ 库(插件) ：提供某一个小功能，对项目的侵入性小，如果某个库无法完成某些需求，可以很容易切换到其他库实现需求

## Node(后端)中的mvc 与 前端中的MVVM之间的区别
+ MVC是后端的分层开发概念
+ MVVC是前端视图层的概念，主要关注于视图层分离，也就是说：mvvc把前端的视图层分为了三个部分model，view，vm ViewModel

## 什么是mvvm
* view - ViewModel - Model


## 声明式渲染
+ Vue的核心是一个允许采用简洁的模板语法来声明式的将数据渲染进dom的系统

#### 注册全局组件

```js
Vue.component('users',Users)
```

#### 局部调用组件

```js
import Users from '引入'
export default {
	name:"app",
	component:{
		Users
	}
}
```



```html
数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
<div id="app">
  {{message}} <!--hello vue!-->
</div>

```

```js
var app = new Vue ({
  el:"#app",//表示当前我们new的这个vue实例，要控制页面上的那个区域
    //作用：抽象view也就是页面显示的数据，存放在data中，把view抽象成model
  data:{//data属性中，存放的是el中要用的数 -----在组件中是函数
    message:'hello vue!'
  },
  methods:{//实例中的方法

  },
  computed:{//计算属性
      
  }
})

```

> @是V-on的语法糖

绑定点击事件
```html
<div id="app">
        <!-- <ul>
            <li v-for="item in move">{{item}}</li>
        </ul> -->
        <h3>{{message}}件</h3>
        <button v-on:click="message++">+</button>
        <button v-on:click="message--">-</button>
    </div>



```

```js
const app = new Vue({
        el:'#app',
        data:{
            message:0,
            move:["1",'2','3','4']
        }
    })

```

### 绑定元素特性
```html
<!--
v-bind 特性被称之为指令。指令带有前缀v-，以表示他们是vue提供的特殊特性，
-->
<div id="app-2">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看次数动态绑定的提示信息！！
  </span>
</div>

```

```js
var app2 = new Vue({
  el:"#app-2",
  data:{
    message:'页面加载于'+ new Date().toLocaleString()
  }
})
```

### 条件与循环

```html
<div class="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>

<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>

```


```js
//在控制台输入app3.seen= false, 你会发现之前显示的消失了

var app3 = new Vue ({
  el:'#app-3',
  data:{
    seen:true
  }
})
  //在控制台里，输入app4.todos.push({text:'新项目'}),你会法相列表最后添加了一个新项目
  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  })
```


# 生命周期函数

## beforeCreate

实例组件刚创建，元素DOM和数据都还没有初始化，暂时不知道能在这个周期里面进行生命操作。

## created

数据data已经初始化完成，方法也已经可以调用，但是DOM为渲染。在这个周期里面如果进行请求是可以改变数据并渲染，由于DOM未挂载，请求过多或者占用时间过长会导致页面线上空白。

## beforeMount

DOM未完成挂载，数据也初始化完成，但是数据的双向绑定还是显示{{}}，这是因为Vue采用了Virtual DOM（虚拟Dom）技术。先占住了一个坑。

## mounted

数据和DOM都完成挂载，在上一个周期占位的数据把值给渲染进去。一般请求会放在这个地方，因为这边请求改变数据之后刚好能渲染。

## beforeUpdate

只要是页面数据改变了都会触发，数据更新之前，页面数据还是原来的数据，当你请求赋值一个数据的时候会执行这个周期，如果没有数据改变不执行。

## updated

只要是页面数据改变了都会触发，数据更新完毕，页面的数据是更新完成的。beforeUpdate和updated要谨慎使用，因为页面更新数据的时候都会触发，在这里操作数据很影响性能和容易死循环。

## beforeDestroy

这个周期是在组件销毁之前执行，在我项目开发中，觉得这个其实有点类似路由钩子beforeRouterLeave,都是在路由离开的时候执行，只不过beforeDestroy无法阻止路由跳转，但是可以做一些路由离开的时候操作，因为这个周期里面还可以使用data和method。比如一个倒计时组件，如果在路由跳转的时候没有清除，这个定时器还是在的，这时候就可以在这个里面清除计时器。

## Destroyed

说实在的，我还真的不知道这个周期跟beforeDestroy有什么区别，我在这个周期里面调用data的数据和methods的方法都能调用，所以我会觉得跟beforeDestroy是一样的。
