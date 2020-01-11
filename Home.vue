<template>
  <div>
    <div v-show="isPudown">刷新</div>
    <div class="home">
      <div class="home_list">
        <div class="div" v-for="(item,index) in count" :key="index">{{item}}</div>
      </div>
    </div>
    <div v-show="ispuup">加载</div>
  </div>
</template>

<script>
// @ is an alias to /src

import BScroll from "better-scroll";
export default {
  name: "home",
  components: {},
  data() {
    return {
      isPudown: false,
      ispuup: false,
      count:5
    };
  },
  methods: {
    tioa(){
      this.$router.push("/about")
    }
  },
  mounted() {
    //初始化
    var scroll = new BScroll(".home", {
      scrollX: false,
      scrollY: true,
      //下拉
      pullDownRefresh: {
        threshold: 40,
        stop: 0
      },
      //上拉
      pullUpLoad:{
        threshold:-30
      }
    });
    //判断
    scroll.on("scroll", por => {
      if (por.y > 30) {
        this.isPudown = true;
      }
    });
    scroll.on("pullingDown", () => {
      setTimeout(() => {
        this.isPudown = false;
      }, 1000);
      scroll.finishPullDown()
    });
    scroll.on("pullingUp",()=>{
      this.ispuup =true
      setTimeout(() => {
        this.ispuup = false;
        this.count +=1
      }, 1000);
      scroll.finishPullUp()
    })
  }
};
</script>


<style  scoped>
.div {
  width: 100%;
  height: 100px;
  background: red;
  margin-top: 10px;
}
.home {
  width: 100%;
  height: 617px;
  overflow: hidden;
}
.home_list {
  width: 100%;
  padding-bottom: 100px;
}
</style>


