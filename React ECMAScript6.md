# ECMAScript6

## 目标
* 熟练使用ES6语法
* Symbol
* Promise对象


## 什么是ES6
ES6， 全称 ECMAScript 6.0 ，是 JavaScript 的下一个版本标准，2015.06 发版。
ES6 主要是为了解决 ES5 的先天不足，比如 JavaScript 里并没有类的概念，

####  Let、const和var的区别
ES6新增了let和const来声明变量，主要是解决var声明变量所造成的困扰和问题：
* var不能用于定义常量
* var可以重复声明变量
* var存在变量提升
* var不支持块级作用域

#### let和const解决了以上问题如下：
* 不可以重复声明变量
```JavaScript
let site = 'itLike';
let site = 'itLike';
console.log(site);
```

* 不存在变量提升
```JavaScript
console.log(site);

let site = 'itLike';
```
* 可以定义常量
```JavaScript
const E = 2.718;

E = 2.71;

console.log(E);

//  引用类型
const LK = {

   name:'itLike',

   intro: '喜欢IT, 就上撩课(itLike.com)'

};

LK.name = '撩课';
console.log(LK);
```

* 块级作用域
如果用var定义变量，变量是通过函数或者闭包拥有作用域；但，现在用let定义变量，不仅仅可以通过函数/闭包隔离，还可以通过块级作用域隔离。
块级作用域用一组大括号定义一个块，使用 let 定义的变量在大括号的外部是访问不到的，此外，let声明的变量不会污染全局作用域。
```JavaScript
{let site = 'itLike';}

console.log(site);

if(1){  let str = '04'; }

console.log(str);
```

## 解构赋值
解构赋值是对赋值运算符的扩展。
他是一种针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。
在代码书写上简洁且易读，语义更加清晰明了；也方便了复杂对象中数据字段获取。

* 构的源，解构赋值表达式的右边部分。
* 解构的目标，解构赋值表达式的左边部分。

####  变量解构赋值（数组解构）
```JavaScript
let nameArr = ['撩课', '小撩', '小煤球'];

let name1 = nameArr[0];

let name2 = nameArr[1];

let name3 = nameArr[2];

//  解构写法

let [name1, name2, name3] = nameArr;

console.log(name1, name2, name3);
```
####  变量解构赋值（对象解构）
```JavaScript
//  写法1

let {name, age, sex}

 = {name: '小煤球', age: 1, sex: '公'};

// 结果: 小煤球 1 公

console.log(name, age, sex);

//  写法2： 解构重命名

let {name: lkName, age: lkAge, sex: lkSex}

= {name: '小煤球', age: 1, sex: '公'};

// 结果: 小煤球 1 公

console.log(lkName, lkAge, lkSex);  

//  写法3： 可以设置默认值

let {name, age, sex = '公'}

= {name: '小煤球', age: 1};

console.log(sex);  // 公


//  写法4：省略解构

let [, , sex] = ['小煤球', 1, '公 '];

console.log(sex);
```


## 字符串、正则、数值、函数、数组、对象的扩展，箭头函数和普通函数区别

#### 模板字符串
模板字符串用反引号()包含，变量用${}括起来; 在开发中使用是非常灵活的。

```JavaScript
 let name = '小煤球';
 let sex = '公';
 let result = `我叫 ${name} , 我是 ${sex} 的`;
 console.log(result);
```
#### 字符串扩展方法

* startsWith()
判断字符串是否以 XX 开头
```JavaScript
let url = 'http://www.itlike.com';

console.log(url.startsWith('http'));  // true
```

* endsWith()
判断字符串是否以 XX 结尾
```JavaScript
let file = 'index.html';

console.log(file.endsWith('html'));  // true
```

* includes
判断字符串中是否包含 XX
```JavaScript
let str = 'liaoke';

console.log(str.includes('ao')); // true
```

* repeat()
拷贝n份
```JavaScript
let title = '撩课在线';

console.log(title.repeat(100));
```

* padStart() / padEnd()

padStart()用于头部补全，
padEnd()用于尾部补全;

第一个参数用来指定字符串的最小长度，

第二个参数是用来补全的字符串。

```JavaScript
//  "2030111111"

let y1 = '2030'.padEnd(10, '1');

//   "2030-11-22"

let y2 = '11-22'.padStart(10, '2030-MM-DD');  

console.log(y1, y2);
```
