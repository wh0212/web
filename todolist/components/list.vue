<template>
  <div id="div">
    <van-collapse id="b" v-model="activeNames">
      <van-collapse-item id="a" title="进行中" name="1">
        <Pedding v-for="(item,index) in pedd" :key="index" :item="item" />
      </van-collapse-item>
      <van-collapse-item title="已完成" name="2">
        <Pedding v-for="(item,index) in finsh" :key="index" :item="item" />
      </van-collapse-item>
      <van-collapse-item title="已取消" name="3">
        <Pedding v-for="(item,index) in del" :key="index" :item="item" />
      </van-collapse-item>
      <div style="display:none">{{$store.state.actcolor}}</div>
    </van-collapse>
  </div>
</template>

<script>
import Pedding from "./pedding";
export default {
  components: {
    Pedding
  },
  data() {
    return {
      activeNames: ["0"]
    };
  },
  methods: {},
  computed: {
    pedd() {
      let item = [];
      this.$store.state.todolist.map(val => {
        if (val.Type === "PEDDING") {
          item.push(val);
        }
      });
      return item;
    },
    finsh() {
      let item = [];
      this.$store.state.todolist.map(val => {
        if (val.Type === "FINSH") {
          item.push(val);
        }
      });
      return item;
    },
    del() {
      let item = [];
      this.$store.state.todolist.map(val => {
        if (val.Type === "DELETE") {
          item.push(val);
        }
      });
      return item;
    }
  },
  mounted() {
    var a = document.getElementsByClassName("van-cell");

    for (let index = 0; index < a.length; index++) {
      window.console.log(a[index]);
      a[index].style.backgroundColor=this.$store.state.actcolor
    }
  },
  updated() {
      window.console.log(654)
    var a = document.getElementsByClassName("van-cell");

    for (let index = 0; index < a.length; index++) {
      window.console.log(a[index]);
      a[index].style.backgroundColor=this.$store.state.actcolor
    }
  }
};
</script>

<style  >
#div {
  margin-top: 80px;
}

.xial {
  margin: 0 auto;
}
</style>