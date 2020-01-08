<template>
  <div>
    <div class="tab_bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {

};
</script>

<style scoped>
.tab_bar{
    display: flex;
    height: 49px;
    font-size: 14px;
    background: #f6f6f6;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
}
</style>