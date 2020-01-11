<template>
  <div class="home">
    <Hander />
    <Input/>
    <Contetn/>
  </div>
</template>

<script>
import Hander from "../components/header";
import Input from '../components/input';
import Contetn from '../components/content'
export default {
  name: "home",
  components: {
    Hander,
    Input,
    Contetn
  }
};
</script>

<style  scoped>
</style>
