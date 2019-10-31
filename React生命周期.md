# React 生命周期

## 创建阶段

####  constructor
构造函数，组件被创建时调用一次，有且只调用一次，为默认state赋初始值。

####   componentWillMount
组件即将被渲染的时候调用，render（）函数之前调用,有且只调用一次，在组件渲染之前进行的操作：操作默认state
```JavaScript
componentWillMount(){
    console.log("组建即将被渲染");
    console.log(this.state);

    //对默认state进行处理
  }
```

#### componentDidMount
组件已经被渲染之后调用，render（）函数之后，有且只调用一次
```JavaScript
componentDidMount(){
  //render函数执行之后调用
  //发送请求，请求数据
}
```

#### render()
组件state发生变化，就会执行。
```JavaScript
render(){

}
```

## 更新阶段
## componentWillReceiveProps
组件将要接受props时调用，多次调用，只要有数据props更新，它就会被调用
```JavaScript
componentWillReceiveProps(props){
    console.log("组件即将接受数据");
    console.log(props)

    //更新当前组件的state
    this.setState({
      image:this.props.image
    })
  }
```

#### shouldComponentUpdate
在接受数据函数调用之后调用，用于阻止当前组件更新

```JavaScript
shouldComponentUpdate(){
  console.log("组建被更新之前阻止");

  //state验证
  //true 不阻止
  return false;
}
```

#### componentWillUpdate
如果不阻止更新，在render之前调用
```JavaScript
componentWillUpdate(){
    console.log("组件即将被更新");
  }
```


#### componentDidUpdate
更新之后，render渲染结束调用
```JavaScript
componentDidUpdate(){
    console.log("组件被渲染完成之后调用");
  }
```
## 销毁阶段
componentWillUnmount()

在组件被卸载和销毁之前立刻调用。可以在该方法里处理任何必要的清理工作，例如解绑定时器，取消网络请求，清理任何在componentDidMount环节创建的DOM元素。
