# Redux

## Redux 核心原理
* state
```javaScript
this.state ={
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

组件状态改变是因为本身state发生setState（）

* action
action对象，描述要对组件的state做什么样的操作
```javaScript
{
  type: 'ADD_TODO',
  text: 'Go to swimming pool'
}
```

* reducer函数
通过reducer函数将组件原`state`和对state惊醒更改的action传入reducer函数，利用action对stat进行更改，返回新的state。


* state 有多种状态，需要多个actio、多个reducer函数去做处理


* reducer函数
reducer（原state，action）；


## action
```javaScript
{
  type: 'ADD_TODO',
  text: 'Go to swimming pool'
}
```

* 生成action的action创建函数
```javaScript
function addTodo(name){
  return {
    type:"ADD_TODO",
    name:name
  }
}
```

* 创建并且提交
```javaScript
dispatch(addTodo(text))
```

* 创建一个 被绑定的 action 创建函数 来自动 dispatch(创建action，返回action，提交action)
```javaScript
const addTodo = name => dispatch(addTodo(name))


//最终redux提供你得函数
addTodo("add");

```

## React-redux 案例
#### 安装
* redux
* react-redux

```cmder
npm install redux react-redux --save
```

#### 创建工程目录
* Store 存放与redux相关的文件
  * Actions  存放所有action
  * Reducers 存放reduce
  * actionType.js  存放所有的action的type
  * index.js  Redux的入口文件

* Component 存放react组件

#### 引入 Provider
在项目入口文件index.js中引入 Redux 提供的 Provider 组件
```javaScript
ReactDOM.render(
  <Provider>
    <App />
  </Provider>
, document.getElementById('root'));
```

#### 创建store
在redux的入口文件中，创建store
* 引入createStore和combineReducers
  * createStore：创建store
    参数：合并后的reducer
    参数：初始化状态的state（这里写个空对象即可）
  * combineReducers：合并reducer
    参数：对象（多个reduce组成）
```javaScript
import {createStore,combineReducers} from "redux"
import {addTodoItem} from "./Reducers/TodoReducer"

const rootReducer = combineReducers({
  addItem:addTodoItem
});

const initialState = {

};

const store = createStore(rootReducer,initialState);
export default store;
```

创建store完成后，引入index.js,完成应用入口文件：
```javaScript
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
```

#### 创建actionType.js文件
actionType.js文件用于保存action对象的type值，因为type值必须为字符串类型，并且
在action创建函数和reducer都要用到action的type属性，所以创建actionType.js文件来
保存，在使用的时候引入即可：
```javaScript
export const ADD_TODO_ITEM = "add_todo_item";
export const CHANGE_PENDDING = "change_pendding";
export const CHANGE_FINISHED = "change_fininshed";
export const DELETE_ITEM = "delete_item";
```

#### 创建action.js文件
action.js文件把针对一个state进行操作的action创建函数定义在一起
```javaScript
import {ADD_TODO_ITEM,CHANGE_PENDDING,CHANGE_FINISHED,DELETE_ITEM} from "../ActionType";



export function addTodoList(toDoName){
  return {
    type:ADD_TODO_ITEM,
    itemName:toDoName
  }
}

export function penddingToFinished(item){
  return {
    type:CHANGE_PENDDING,
    item:item
  }
}

export function finishedToPendding(item){
  return{
    type:CHANGE_FINISHED,
    item:item
  }
}

export function deleteItem(item){
  return{
    type:DELETE_ITEM,
    item:item
  }
}
```

#### 创建reducer.js
每一个state对应一个reducer，我们把它定义在一个文件中，并且将组件的初始state也定义在这里，
组件默认回去state都是从这个reducer中获取到的
```javaScript
import {ADD_TODO_ITEM,CHANGE_PENDDING,CHANGE_FINISHED,DELETE_ITEM} from "../ActionType"


const initialState = {
  pendding:[
    // {
    //   status:false,
    //   itemName:"王凯学习迷糊了，已经崩盘中。。。"
    // }
  ],
  finished:[
    // {
    //   status:true,
    //   itemName:"Vue学习",
    // }
  ]
}

export function addTodoItem(state=initialState, action){
  switch(action.type){
    case ADD_TODO_ITEM:
      return{
          pendding:state.pendding.concat({status:false,itemName:action.itemName}),
          finished:state.finished
      }
    case CHANGE_PENDDING:
      state.pendding.map((value,index)=>{
        if(value.itemName === action.item.itemName){
          state.pendding.splice(index,1);
        }
      })
      return{
        pendding:state.pendding,
        finished:state.finished.concat({status:!action.item.status,itemName:action.item.itemName})
      }
    case CHANGE_FINISHED:
      state.finished.map((value,index)=>{
        if(value.itemName === action.item.itemName){
          state.finished.splice(index,1);
        }
      })
      return{
        pendding:state.pendding.concat({status:!action.item.status,itemName:action.item.itemName}),
        finished:state.finished
      }

    case DELETE_ITEM:
      if(action.item.status){
        state.finished.map((value,index)=>{
          if(value.itemName === action.item.itemName){
            state.finished.splice(index,1);
          }
        })
      }else{
        state.pendding.map((value,index)=>{
          if(value.itemName === action.item.itemName){
            state.pendding.splice(index,1);
          }
        })
      }

      return{
        pendding:state.pendding,
        finished:state.finished
      }
    default:
      return state;
  }

}
```
>初始化state的定义一定要跟组件对应

#### 组件相关函数
* mapStateToProps
组件接受数据，并且将数据放置在组件的this.props中

* mapActionToProps
组件提交对组件state更改的action

* connect
将组件接受数据和提交action的函数以及组件与redux中的对应reducer绑定

```javaScript
// 绑定组件对应的reducer，并且接受调用reducer返回新state
function mapStateToProps(state) {
  return{
    state:state.addItem
  }
}

// 提交action到上面那个函数绑定后跟组件对应的reducer
function mapActionToProps(dispatch){
  return {
    addItem:(name)=>{
      dispatch(addTodoList(name))
    },
    changePendding:(item)=>dispatch(penddingToFinished(item)),
    changeFinished:(item)=>dispatch(finishedToPendding(item)),
    deleteItem:(item)=>dispatch(deleteItem(item))
  }
}

export default connect(mapStateToProps,mapActionToProps)(Box);
```

原理：
mapStateToProps、mapActionToProps都是定义在组件中的回调函数，通过connect函数将他与rootReducer绑定；
connect(mapStateToProps,mapActionToProps)(Box)：绑定完成后，给组件this.props返回数据和dispatch函数；
组建可以接受数据和使用提交action的方法接受和提交action
提交action去rootReducer


>所有的 reducer 都会收到 action。
reducer 通过 action.type 来进行判定处理。
如果某个 reducer 不处理某个动作，也就是没有处理这个 action.type 的 case， 就会走 default 分支，把 state 原样返回。
