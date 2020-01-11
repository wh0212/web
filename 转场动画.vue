<template>
  <div id="app">
    <div id="nav"></div>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      window.console.log(to);
      window.console.log(from);
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index < from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>

<style>
.slide-left-leave-active {
  opacity: 0;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 1);
  transform: translate(-100%, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
  transition-timing-function: cubic-bezier(0.5, 0, 1, 1);
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms;
  position: fixed;
}
.slide-right-enter {
  transform: translate(-100%, 0);
  transition-timing-function: ease-in;
}

.slide-left-enter {
  transform: translate(100%, 0);
  transition-timing-function: ease-in;
}

* {
  margin: 0px;
  padding: 0px;
}
</style>
