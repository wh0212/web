## 定义变量
```js
// let 相当于之前的var
// let a =12
// const 常量，定义好了不能改变
  let a = 12;
  function fn() {
    alert(a);//TDZ--暂时性死区
    let a = 5;//tdz--结束
  }

```

### let和const解决了以上问题如下
* 不可以重复定义变量
* 不存在变量提升
* 可以定义常量.

### let
* 没有域解析，不存在变量提升--在代码块内，只要let定义变量，在之前使用都是报错
* 在同一个作用域里不能重复定义变量
* for循环，里面是父级的作用

>  object.freeze(参数)--冻结

### const
* 不能修改
* 只要声明，必须赋值

## 结构赋值
* 特别是在数据交互中有用

```js

let [a,b,c] = [12,5,60];

console.log(a,b,c);

```

> 左右两边，结构格式一致，解构的时候可以给默认值

```js
let [a,b,c="暂无数据"] = [12,5];

console.log(a,b,c);

```

## 模板字符串
* 模板字符串用反引号`(`)包含，变量用${}括起来; 在开发中使用是非常灵活的
* 可以随时换行

```js
let name = '小煤球';
 let sex = '公';
 let result = `我叫 ${name} , 我是 ${sex} 的`;
 console.log(result);
 // 我叫 小煤球 , 我是 公 的
```

新增字符串方法
startsWith()
判断字符串是否以 XX 开头

```js
let url = 'http://www.itlike.com';

console.log(url.startsWith('http'));  // true

```

endsWith()
判断字符串是否以 XX 结尾

```js
let file = 'index.html';

console.log(file.endsWith('html'));  // true

```

includes
判断字符串中是否包含 XX

```js
let str = 'liaoke';

console.log(str.includes('ao')); // true

```

repeat()
拷贝n份

```js
let title = '撩课在线';

console.log(title.repeat(100));

```

5) padStart() / padEnd()

padStart()用于头部补全，

padEnd()用于尾部补全;

第一个参数用来指定字符串的最小长度，

第二个参数是用来补全的字符串。

```js
//  "2030111111"

let y1 = '2030'.padEnd(10, '1');

//   "2030-11-22"

let y2 = '11-22'.padStart(10, '2030-MM-DD');  

console.log(y1, y2);

```
# 对象

```js
const age =12;
const name = "amy";
const person = {age,name};
console.log(person);

//方法
const person = {
  name,
  age,
  sayHi(){//个人建议不使用箭头函数
    console.log("Hi");
  }
}
person.sayHi();  //"Hi"

```
## Generator
* generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次.除了return语句，还可以用yield返回多次。

```js
const obj = {
  * my(){
    yield 'hello world'
  }
}

```
# 常量
* Number.EPSILON
* Number.EPSILON 属性表示 1 与大于 1 的最小浮点数之间的差。

### Number.isFinite()
* 用于检查一个数值是否为有限的（ finite ），即不是 Infinity

### Number.parseInt()
* 用于将给定字符串转化为指定进制的整数。

### Math.cbrt
* 用于计算一个数的立方根。
### Math.imul
* 两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。

### Math.hypot
* 用于计算所有参数的平方和的平方根。

### Math.clz32
* 用于返回数字的32 位无符号整数形式的前导0的个数。

### Math.trunc
* 用于返回数字的整数部分。

### Math.fround
* 用于获取数字的32位单精度浮点数形式。

### Math.sign
* 判断数字的符号（正、负、0）。

### Math.expm1()
* 用于计算 e 的 x 次方减 1 的结果，即 Math.exp(x) - 1

### Math.log1p(x)
* 用于计算1 + x 的自然对数，即 Math.log(1 + x) 。

### Math.log10(x)
* 用于计算以 10 为底的 x 的对数。


### 对象的拓展运算符
* 拓展运算符(...),用于取出参数参数对象所有可遍历属性然后拷贝到当前对象
* 展开数组、剩余运算符
```js
let person = {name: "Amy", age: 15};
let someone = { ...person };//展开了把对象
someone;  //{name: "Amy", age: 15}
console.log(someone);

> 数据回来之后，本地做映射，不能改原始数据

//可用于合并两个对象
let age = {age: 15};
let name = {name: "Amy"};
let person = {...age, ...name};
person;  //{age: 15, name: "Amy"}

```

## `object.js()`--比较两个值是否相等

```js
console.log(NaN == NaN);//false
object.is(NaN,NaN);//true

```

## `object.assign(target,source_1,...)` --合并对象
* 用于将原对象的所有可枚举属性复制到目标对象中
* 复制对象、数组
* 合并参数

```js
let target = {a:1};
let object = {b:2};
let object1 = {c:3};
object.assign(target,object,object1);
//第一个参数是目标对象，后面的参数是源对象
//{a:1,b:2,c:3}

//如果目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖原来的属性
// 如果该函数只有一个参数，当参数为对象时，直接返回该对象；当参数不是对象时，会先将参数转为对象然后返回。

```

> arguments 是一个对应于传递给函数的参数的类数组对象。

```js
let json = {
  a:1,
  b:2,
  c:3
}
for (let key of object.keys(json)) {
  console.log(key);//a,b,c
}
for (value of values(json)) {
  //1,2,3
}
for (item of entries(json)) {

}
for ([key,val]] of entries(json)) {

}
```

## 数组创建
* Array.of()--将参数中所有值作为元素形成数组--一组值转为数组;

```js
let arr = [1,2,3]
for (val of arr) {
  console.log(val);
}

for (index of arr.keys()) {//数组下标
  console.log(index);
}

for (item of arr.entries()) {
  console.log(item);
}

for ([key,val] of arr.entries()) {//数组某一项
  console.log(key,val);
}
```
* Array.from()--将类组对象可迭代对象转化为数组

```js
let json = {
  0:'apple',
  1:'banana',
  2:'orange',
  length:3//对应里面json的长度
}
let arr = Array.from(json)
console.log(arr);//apple,banana,orange

```
### 数组和字符串转换

```js
//数组转字符
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(typeof(arr.join()))//string
// ------------------------------------------------------
//字符转数组
var str = "一二三四";      
  var str1 = "篮球、排球、乒乓球";      
  var arr = str.split("");//全部分割      
  console.log(arr)
  var arr1 = str1.split("、");//按照顿号分割
  console.log(arr1)     
  var arr2 = str1.split("、",3);//按照顿号分割,保留两段       
  console.log(arr2)

```

```js
console.log(Array.of(1,2,3))//[1,2,3];

// 参数值可为不同类型
console.log(Array.of(1, '2', true)); // [1, '2', true]

// 参数为空时返回空数组
console.log(Array.of()); // []

// Array.from(arrayLike[, mapFn[, thisArg]])

// 参数为数组,返回与原数组一样的数组
console.log(Array.from([1, 2])); // [1, 2]

// 参数含空位
console.log(Array.from([1, , 3])); // [1, undefined, 3]

```
#### 循环

```js
arr.forEach();
//没有返回值
arr.forEach((val,index,arr)=>{
  console.log(值，索引，数组);
},window)
//1 --------------------------------------------
arr.map();//做数据交互、映射
//需要配合return，返回的是个新的数组，没有就相当于foreach
//重新整理数据结构
var arr = [{name:'wh',age:18,hot:true}]
let newarr = arr.map((item,index,arr)=>{
  var json = {};
  json.t = `${item.name}`;
  json.y =  item.age;
  json.u = item.hot;
  return json
})
console.log(newarr);
//2----------------------------------------------
arr.filter();//过滤，过滤一些不想要的元素，如果回调函数返回的true就留下来
var arr = [{name:'wh',age:18,hot:true}]
arr.filter((item,index,arr)=>{
  return item.hot;//是不是等于true，如果返回true就留下
})
//3-----------------------------------------------
arr.some();//类似查找,数组里面某一个元素符合条件返回true
arr.some((item,index,arr)=>{
  return item == "wh"
})
//4--------------------------------------------------
arr.every();//数组里所有的元素都符合条件返回true
let arr = [1,3,5,7,9,]
arr.every((item,index,arr)=>{
  return item%2 == 1//数组里面是不是都符合条件
})
//以上除了回调函数外还有，this指向谁,很少用
//5--------------------------------------------------
arr.reduce();//求数组的和   从左往右
var arr = [1,2,3,4,5,6]
            0     1
arr.reduce((prev,cur,index,arr)=>{//prev上一个和，cur当前
  return prev+cur;
})
arr.reduceRight();//从右往左

```

## 数组扩展
* find() 查找数组中符合条件的元素，若有多个符合条件的元素，则返回第一个,如果没找到就返回undefined
* findindex() 查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引，没找到返回-1
* fill(填充的东西，开始位置，结束位置) 将一定范围索引的数组元素内容填充为单个指定的值
* copyWithin() 将一定范围的数组元素修改为此数组另一指定范围索引的元素
* entries() 遍历键值对
* keys() 遍历键名
* vales() 遍历键值
* includes() 数组是否包含指定值，返回true或false
* flat() 嵌套数组转一维数组
* flatMap() 先对数组中每个元素进行了处理，再对数组执行flat()方法

```js
let arr = Array.of(1,2,3,4);
arr.find((val,index,arr)=>{
  return val>100
}); //3

console.log([, 1].find(n=> true))//undefined;

```
## 函数
* 参数可以传默认值
* 函数参数默认已经定义了，不能再使用let,const声明

## 箭头函数
* 参数 => 函数体

```js
var f = () =>v//()=>return

//当箭头函数要返回对象的时候，为了区别于代码块，要用()将对象包裹起来
var f = (id,name) =>({id:id,name:name})
f(6,2)

// this问题，定义函数所在的对象，不再运是行时所在的对象---this指针固化
// 箭头函数里没有arguments、-----arguments 是一个对应于传递给函数的参数的类数组对象。
// 箭头函数不能当构造函数
//箭头函数体中的this对象，是定义函数时的对象，而不是使用函数时的对象
// A.call(B,x,y):
// 改变A的this指向，使之指向B，
// 把函数A放在B中运行
```

### for...of循环
for...of 是 ES6 新引入的循环，用于替代 for..in 和 forEach() ，并且支持新的迭代协议。它可用于迭代常规的数据类型，如 Array 、 String 、 Map 和 Set 等等。

## Iterator
* Iterator 是 ES6 引入的一种新的遍历机制，迭代器有两个核心概念：

迭代器是一个统一的接口，它的作用是使各种数据结构可被便捷的访问，它是通过一个键为Symbol.iterator 的方法来实现。
迭代器是用于遍历数据结构元素的指针（如数据库中的游标）。
迭代过程
迭代的过程如下：

通过 Symbol.iterator 创建一个迭代器，指向当前数据结构的起始位置
随后通过 next 方法进行向下迭代指向下一个位置， next 方法会返回当前位置的对象，对象包含了 value 和 done 两个属性， value 是当前属性的值， done 用于判断是否遍历结束
当 done 为 true 时则遍历结束

```js
const items = ["zero", "one", "two"];
const it = items[Symbol.iterator]();

it.next();//next() 获得匹配元素集合中每个元素紧邻的同胞元素。如果提供选择器，则取回匹配该选择器的下一个同胞元素
>{value: "zero", done: false}
it.next();
>{value: "one", done: false}
it.next();
>{value: "two", done: false}
it.next();
>{value: undefined, done: true}

```

## Promise：承诺、许诺
* 计解决异步回调问题，大部分用回调函数，事件

## promise状态
* Promise 异步操作有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）。除了异步操作的结果，任何其他操作都无法改变这个状态。
* Promise 对象只有：从 pending 变为 fulfilled 和从 pending 变为 rejected 的状态改变。只要处于 fulfilled 和 rejected ，状态就不会再变了即 resolved（已定型）。

```js
//推荐用法
new Promise().then().catch()

let a = 10;
let b = new Promise(function(resolve,reject){
    if (a == 10) {
        resolve()
    }else{
        reject()
    }
})
b.then((err,res)=>{
    if (err) {
        console.log("shibai")
    }else{
        console.log("cg");
    }
})

//Promise.resolve()--将现有的东西转成一个promise对象，成功状态
//promise.reject()--将现有的东西转成一个promise对象，失败状态
//promise.all()--把promise打包，扔到一个数组里面，必须确保，所有的promise对象都是成功状态
//promise.race()--只要有一个成功就返回
//Promise.catch()--发生错误别名用于指定发生错误时的回调函数。
//promise.prototype.then 返回一个新的promise对象
let p1 = Promise.resolve("a");
let p2 = Promise.resolve("a");
let p3 = Promise.resolve("a");
Promise.all([p1,p2,p3]).then(res=>{
  console.log(res);//[a,a,a]
})
promise.catch(err=>{
  console.log("失败");
})

getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前两个回调函数的错误
});

```

### Promise 常用三个场景。
* 处理异步回调
* 多个异步函数同步处理
* 异步依赖异步回调
* 封装统一的入口办法或者错误处理

# 模块化
* js不支持模块化
es6之前
  commonjs---主要服务器端
  AMD----requirejs,curljs
  CMD ---- seajs
es6之后--需要放到服务器环境
  导出模块
    export 东西
  如何引用
    import

```js
<script type="module">
  import '路径.js'
  import {a} from '路径.js'
  import * as mouto from ''
  mouto.a
  import mod,{show,sum ,a,b} from '';
  show()
  sum()
  console.log(a);
</script>

const a = 12;
const b = 12;
const c = 13;
//用as可以起别名
export {
  a,b,c
}

```
## import
* 相对路径
* 只会导入一次
* 有提升效果
* 导出的模块内容，如果有定时器更改，外边也会更改
* import '路径.js'相当于引入文件

```js
//按需加载
//可以写在if里
//路径也可以是动态的
import() --动态引入，默认不写到if里
import('./').then((res)=>{
  console.log(res);
})

promise.all([])

async await

'use strice'//严格模式

```

### 类 class

>

super关键字用于访问和调用一个对象的父对象上的函数

```js
class Person{
  constructor(name,age){//构造方法(函数),调用new，自动执行
    this.name = name;
    this.age = age
  }
  showname(){
    return `${this.name}`
  }
  showage(){
    return `${this.age}`
  }
}
let p1 = new Person('wh',18);
console.log(p1.showname(),p1.showage());


let a = 'strive';
let b = 'met';
class ClassName {
  [a](){

  }
  [a+b](){

  }
}
//注意-- es6里面class没有提升功能
// this
```

class里面取值函数(getter),存值函数(setter)

```js
class One{
  constructor(){
    get aaa(){
      return `aaa的属性`
    }
    set aaa(val){//设置
      console.log(val);//123
    }
  }
}

let p = new One();
p.aaa = "123"

```

### 静态方法：类身上的方
```js
class ClassName {
  constructor() {

  }
  static aaa(){
    return '这是静态方法'
  }
}
let p = new ClassName();

console.log(ClassName.aaa());

```

## 继承

```js
//之前
function Person(name){
    this.name = name
  }
  Person.prototype.showname = function() {
      return `名字是${this.name}`
  }
  function Strdent(name,skill){
    Person.call(this,name)
    this.skill = skill
  }
  Strdent.prototype = new Person()
  let stu1 = new Strdent('wh','学习');
  console.log(stu1.showname());

  class one{
      constructor(name){
          this.name = name;
      }
      fun(){
          return this.name;
      }
  }
  class Two extends one{

  }
  let p = new Two("wh");
  console.log(p.fun());

```

```js
class Person{
  constructor(name){
    this.name = name
  }
  showName(){
    console.log("父类");
  }
}

class student extends Person{
  constructor(name,skill){
    super(name);
    this.skill = skill;
  }
  showName(){
    super.showName();//父类的方法
    console.log("子类的方法");
  }
  showSkill(){
    return `哥们${this.skill}`
  }
}

let stu1 = new student('wh','学习');
console.log(stu1.showName());

```

### 拖拽

```js
//父类----拖动
class Drag {
  constructor(id){
    this.oDiv = document.querySelector(id);
    this.disX = 0;
    this.disY = 0;
    this.init();
  }
  init(){
    this.oDiv.onmousedown = function (ev) {
      this.disX = ev.clientX-this.oDiv.offsetLeft;
      this.disY = ev.clientY - this.oDiv.offsetTop;

      document.onmousemove = this.fnMove.bind(this);//f.bind(obj)，实际上可以理解为obj.f()，这时f函数体内的this自然指向的是obj；
      document.onmouseup = this.fnUp.bind(this);
      return false
    }.bind(this)//bind() 方法为被选元素添加一个或多个事件处理程序，并规定事件发生时运行的函数。
  }
  fnMove(ev){
    this.oDiv.style.left = ev.clientX - this.disX+'px';
    this.oDiv.style.top = ev.clientY - this.disY+'px';
  }
  fnUp(){
    document.onmousemove = null;
    document.onmouseup = null
  }
}
//子类---限制范围
class LimitDrag extends Drag{
  fnMove(ev){
    super(fnMove(ev));
    if (this.oDiv.offsetLeft<=0) {
      this.oDiv.offsetLeft = 0;
    }
  }
}

new Drag("#div1")
new LimitDrag("#div2")

```

### bind()

```js
var a = {
    b: function() {
      var func = function() {
        console.log(this.c);//hello
      }.bind(this);
      console.log(this);//{ b: [Function: b], c: 'hello' }
      func();
    },
    c: 'hello'
  }
  a.b(); // hello
  console.log(a.c,'2'); // hello

```
