<template>
  <div class="div">
    <div class="main">
      <a-checkbox
        @click="qie(item)"
        class="check"
        :disabled="item.Type==='DELETE'"
        :checked="item.active"
        @change="onChange"
      ></a-checkbox>
      <span class="txt">
        <S v-if="item.Type ==='DELETE'">{{item.name}}</S>
        <span @click="xiu(item)" v-else>{{item.name}}</span>
      </span>
      <span v-show="item.Type==='FINSH'" class="btn date">{{item.date}}</span>
      <a-button
        v-show="!item.active"
        :style="{background:this.$store.state.actcolor}"
        @click="recover(item)"
        class="btn"
        type="primary"
      >{{item.Type==="DELETE"?"恢复":"取消"}}</a-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    xiu(item) {
      window.console.log(item);
    },
    recover(item) {

      this.$store.commit("recover", item);
    },
    del(item) {
      this.$store.commit("del", item);
    },
    qie(item) {
      window.console.log(this.currentTime);
      this.$store.commit("qie", item);
    },
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }
  }
};
</script>


<style>
.date {
  padding-top: 7px;
}
.btn {
  float: right;
  margin-top: 1.5px;
}
.txt {
  height: 30px;
}
.check {
  margin-left: 5px;
  margin-top: 6px;
}
.div {
  width: 100%;
  height: 35px;
  background: green;
  margin-bottom: 7px;
}
.main {
  width: 98.5%;
  height: 35px;
  background: #fff;
  float: right;
}
</style>