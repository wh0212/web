<template>
  <div class="main">
    <a-input class="inp" @keydown.13="tian" v-model="inp" placeholder="Basic usage" />
    <a-button
      :style="{background:this.$store.state.actcolor}"
      class="btn"
      type="primary"
      @click="tian"
    >按钮</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inp: ""
    };
  },
  methods: {
    tian() {
      this.$store.commit("add", this.inp);
    },
    add() {
      this.$store.commit("add", this.inp);
    }
  }
};
</script>

<style  scoped>
.inp {
  width: 250px;
  height: 42px;
}
.main {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btn {
  background: rgb(250, 159, 174);
  border: none;
  height: 40px;
  width: 80px;
}
</style>