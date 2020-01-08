<template>
  <div id="app">
    <router-view />
    <TabBar>
      <TabBarItem :path="home">
        <img slot="item_icon" src="./assets/img/tabbar/首页.png" alt />
        <img slot="item_icon_active" src="./assets/img/tabbar/首页-选中.png" alt />
        <div :data="this.$router" slot="item_text">首页</div>
      </TabBarItem>
      <TabBarItem :path="about">
        <img slot="item_icon" src="./assets/img/tabbar/分类-未选中.png" alt />
        <img slot="item_icon_active" src="./assets/img/tabbar/分类-选中.png" alt />
        <div slot="item_text">分类</div>
      </TabBarItem>
      <TabBarItem :path="cart">
        <img slot="item_icon" src="./assets/img/tabbar/购物车-未选中.png" alt />
        <img slot="item_icon_active" src="./assets/img/tabbar/购物车-选中.png" alt />
        <div slot="item_text">购物车</div>
      </TabBarItem>
      <TabBarItem :path="profile">
        <img slot="item_icon" src="./assets/img/tabbar/我 的-未选中.png" alt />
        <img slot="item_icon_active" src="./assets/img/tabbar/我 的-选中.png" alt />
        <div slot="item_text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  data() {
    return {
      home: "/home",
      about: "/about",
      cart: "/cart",
      profile: "/profile"
    };
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
@import "./assets/css/main.css";
</style>
