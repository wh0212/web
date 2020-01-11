<template>
  <div>
    <div class="header" :style="{background:this.$store.state.actcolor}">
      学习记事本
      <img class="image" @click="drawer = true" src="../../public/image/更多.png" alt />
    </div>
    <div>
      <div id="sty">
        <el-drawer
          title="设置"
          :visible.sync="drawer"
          :direction="direction"
          style="width:600px"
          :with-header="false"
        >
          <a-button
            @click="drawer2 = true, drawer= false"
            :style="{background:this.$store.state.actcolor}"
            class="btn"
            type="primary"
          >按钮</a-button>
        </el-drawer>
      </div>
      <el-drawer
        title="设置"
        :visible.sync="drawer2"
        :direction="direction"
        style="width:600px"
        :with-header="false"
      >
        <el-color-picker @change="cheange" v-model="color" show-alpha :predefine="predefineColors"></el-color-picker>
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      drawer: false,
      drawer2: false,
      direction: "ltr",
      visible: false,
      placement: "left",
      color: "rgba(255, 69, 0, 0.68)",
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577"
      ]
    };
  },
  methods: {
    cheange() {
      this.$store.commit("color", this.color);
      
    },
    showPopup() {
      this.show = true;
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onChange(e) {
      this.placement = e.target.value;
    }
  }
};
</script>
<style >
#sty .el-drawer {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>


<style scoped>
.image {
  float: right;
  margin-right: 50px;
  margin-top: 15px;
}
.header {
  width: 100%;
  height: 60px;
  background: rgb(250, 159, 174);
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}
</style>