<template>
  <div>
    <!-- <a-menu mode="inline" class="xial" style="width: 95%">
      <a-sub-menu key="sub1">
        <span slot="title">
          <span>进行中</span>
        </span>
        <a-menu-item key="1">学习</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <span>已完成</span>
        </span>
        <a-menu-item key="1">学习</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <span slot="title">
          <span>已取消</span>
        </span>
        <a-menu-item key="1">学习</a-menu-item>
      </a-sub-menu>
    </a-menu> -->
    <List/>
  </div>
</template>

<script>
import List from './list'
export default {
    components:{
        List
    },
  data() {
    return {
        
    };
  },
  methods: {}
};
</script>

<style  scoped>

</style>