<template>
  <div class="tab_bar_item" @click="itemClick">
    <!-- 未选中icon -->
    <div v-if="isActive">
      <slot name="item_icon"></slot>
    </div>
    <!-- 选中icon -->
    <div v-else>
      <slot name="item_icon_active"></slot>
    </div>
    <!-- 文字 -->
    <div :class="{active:!isActive}">
      <slot name="item_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  },
  data() {
    return {};
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      // this.$route.path===this.path
      return this.$route.path.indexOf(this.path);
    }
  }
};
</script>

<style  scoped>
.tab_bar_item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  margin-top: 2px;
}
.tab_bar_item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: red;
}
</style>