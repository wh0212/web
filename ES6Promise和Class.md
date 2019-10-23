# ES6:Promise和Class

## Promise
Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。
Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。


## Promise对象有以下两个特点
* 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和Rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

* 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

## 使用场景
* 主要用于异步计算
* 可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果
* 可以在对象之间传递和操作promise，帮助我们处理队列


在JavaScript中，所有代码都是单线程执行的。这样导致JavaScript的所有网络操作，浏览器事件，都必须是异步执行。异步执行可以用回调函数实现：
```JavaScript
function callback() {
    console.log('Done');
}

console.log('before setTimeout()');
setTimeout(callback, 1000); // 1秒钟后调用callback函数
console.log('after setTimeout()');

//执行结果
// before setTimeout()
// after setTimeout()
// (等待1秒后)
// Done
```
异步操作会在将来的某个时间点触发一个函数调用。

## 异步操作的常见语法

* 事件监听
```JavaScript
document.getElementById('#start').addEventListener('click', start, false);
function start() {
  // 响应事件，进行相应的操作
}
// jquery on 监听
$('#start').on('click', start)
```

* 回调
```JavaScript
// 比较常见的有ajax
$.ajax('http://www.wyunfei.com/', {
 success (res) {
   // 这里可以监听res返回的数据做回调逻辑的处理
 }
})

// 或者在页面加载完毕后回调
$(function() {
 // 页面结构加载完成，做回调逻辑处理
})
```

## Promise
* 初始化Promise对象
```JavaScript

//写法一
new Promise(
  function (resolve, reject) {
    // 一段耗时的异步操作
    resolve('成功') // 数据处理完成
    // reject('失败') // 数据处理出错
  }
).then(
  (res) => {console.log(res)},  // 成功
  (err) => {console.log(err)} // 失败
)

//写法二
var p1 = new Promise(function (resolve, reject) {
  // 一段耗时的异步操作
  resolve('成功') // 数据处理完成
  // reject('失败') // 数据处理出错
});

var p2 = p1.then(function (result) {
    console.log('成功：' + result);
});
var p3 = p2.catch(function (reason) {
    console.log('失败：' + reason);
});
```

参数：函数类型
* resolve作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
* reject作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

* promise有三个状态：
1、pending[待定]初始状态
2、fulfilled[实现]操作成功
3、rejected[被否决]操作失败

* 当promise状态发生改变，就会触发then()里的响应函数处理后续步骤；
promise状态一经改变，不会再变。
Promise对象的状态改变，只有两种可能：
从pending变为fulfilled
从pending变为rejected。
这两种情况只要发生，状态就凝固了，不会再变了。


## Promise方法
#### then()方法
then 方法就是把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数。
而 Promise 的优势就在于这个链式调用。我们可以在 then 方法中继续写 Promise 对象并返回，然后继续调用 then 来进行回调操作。
可有两个参数，第一个是成功 resolve 调用的方法，第二个是失败 reject 调用的方法

then方法注册 当resolve(成功)/reject(失败)的回调函数
```JavaScript
// onFulfilled 是用来接收promise成功的值
// onRejected 是用来接收promise失败的原因
promise.then(onFulfilled, onRejected);
```

then方法是异步执行的

* resolve(成功) onFulfilled会被调用
```JavaScript
const promise = new Promise((resolve, reject) => {
   resolve('fulfilled'); // 状态由 pending => fulfilled
});
promise.then(result => { // onFulfilled
    console.log(result); // 'fulfilled'
}, reason => { // onRejected 不会被调用

})
```

* reject(失败) onRejected会被调用
```JavaScript
const promise = new Promise((resolve, reject) => {
   reject('rejected'); // 状态由 pending => rejected
});
promise.then(result => { // onFulfilled 不会被调用

}, reason => { // onRejected
    console.log(rejected); // 'rejected'
})
```

* 案例：下一步的的操作需要使用上一部操作的结果。（这里使用 setTimeout 模拟异步操作），正式开发可以用 ajax 异步

```JavaScript
        function buy(){
            console.log("开始买笔");
            var p = new Promise(function(resolve,reject){
                setTimeout(function(){
                    console.log("买了笔芯");
                    resolve("数学作业");
                },1000);
            });
            return p;
        }
        //写作业
        function work(data){
            console.log("开始写作业："+data);
            var p = new Promise(function(resolve,reject){
                setTimeout(function(){
                    console.log("写完作业");
                    resolve("作业本");
                },1000);
            });
            return p;
        }

        function out(data){
            console.log("开始上交："+data);
            var p = new Promise(function(resolve,reject){
                setTimeout(function(){
                    console.log("上交完毕");
                    resolve("得分：A");
                },1000);
            });
            return p;
        }
        /* 不建议使用这种方式
        buy().then(function(data){
            return work(data);
        }).then(function(data){
            return out(data);
        }).then(function(data){
            console.log(data);
        });*/

        //推荐这种简化的写法
        buy().then(work).then(out).then(function(data){
            console.log(data);
        });
```


* ajax案例
```JavaScript
// ajax函数将返回Promise对象:
function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            }
        };
        request.open(method, url);
        request.send(data);
    });
}

var p = ajax('GET', '/api/categories');
p.then(function (text) { // 如果AJAX成功，获得响应内容
    log.innerText = text;
}).catch(function (status) { // 如果AJAX失败，获得响应代码
    log.innerText = 'ERROR: ' + status;
});

```

#### resolve()方法
#### reject()方法
resolve 方法把 Promise 的状态置为完成态（Resolved），这时 then 方法就能捕捉到变化，并执行“成功”情况的回调。
而 reject 方法就是把 Promise 的状态置为已失败（Rejected），这时 then 方法执行“失败”情况的回调（then 方法的第二参数）



#### catch()方法：
* 它可以和 then 的第二个参数一样，用来指定 reject 的回调
* 它的另一个作用是，当执行 resolve 的回调（也就是上面 then 中的第一个参数）时，如果抛出异常了（代码出错了），那么也不会报错卡死 js，而是会进到这个 catch 方法中。

#### all()方法：
Promise 的 all 方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。
只有全部为resolve才会调用 通常会用来处理 多个并行异步操作
```JavaScript


const p1 = new Promise((resolve, reject) => {
    resolve(1);
});

const p2 = new Promise((resolve, reject) => {
    resolve(2);
});

const p3 = new Promise((resolve, reject) => {
    reject(3);
});

Promise.all([p1, p2, p3]).then(data => {
    console.log(data); // [1, 2, 3] 结果顺序和promise实例数组顺序是一致的
}, err => {
    console.log(err);
});
```

race()方法：
race 按字面解释，就是赛跑的意思。race 的用法与 all 一样，只不过 all 是等所有异步操作都执行完毕后才执行 then 回调。而 race 的话只要有一个异步操作执行完毕，就立刻执行 then 回调。

>注意：其它没有执行完毕的异步操作仍然会继续执行，而不是停止。

```JavaScript
Promise.race 只要有一个promise对象进入 FulFilled 或者 Rejected 状态的话，就会继续进行后面的处理。

function timerPromisefy(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(delay);
        }, delay);
    });
}
var startDate = Date.now();

Promise.race([
    timerPromisefy(10),
    timerPromisefy(20),
    timerPromisefy(30)
]).then(function (values) {
    console.log(values); // 10
});
```
race 使用场景很多。比如我们可以用 race 给某个异步请求设置超时时间，并且在超时后执行相应的操作。
```JavaScript
function requestImg(){
            var p = new Promise(function(resolve, reject){
            var img = new Image();
            img.onload = function(){
               resolve(img);
            }
            img.src = 'xxxxxx';
            });
            return p;
        }

        //延时函数，用于给请求计时
        function timeout(){
            var p = new Promise(function(resolve, reject){
                setTimeout(function(){
                    reject('图片请求超时');
                }, 5000);
            });
            return p;
        }

        Promise.race([requestImg(), timeout()]).then(function(results){
            console.log(results);
        }).catch(function(reason){
            console.log(reason);
        });
        //上面代码 requestImg 函数异步请求一张图片，timeout 函数是一个延时 5 秒的异步操作。我们将它们一起放在 race 中赛跑。
        //如果 5 秒内图片请求成功那么便进入 then 方法，执行正常的流程。
        //如果 5 秒钟图片还未成功返回，那么则进入 catch，报“图片请求超时”的信息。
```


## Class基本使用和继承
```JavaScript
class Example {
    a = 2;
    constructor () {
        console.log(this.a);
    }
}
```
