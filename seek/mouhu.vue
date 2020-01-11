<template>
  <div>
    <p>搜索：{{this.dataa}}</p>
    <div v-for="(item,index) in dataarr" @click="dian" :key="index" v-html="resove(item)"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    dataa: String
  },
  data() {
      return {
          list: [],
          his:[]
      }
  },
  methods: {
      dian(){
          this.his = JSON.parse(window.localStorage.getItem("his")) || [];
        var index = this.his.findIndex(item => item.name === this.dataa)
        if (index !==-1) {
            this.his.splice(index,1);
            this.his.unshift(this.dataa)
        }else{
            if (this.his.length ===3) {
                this.his.pop()
            }
            this.his.unshift(this.dataa)
        }
        window.localStorage.setItem("his",JSON.stringify(this.his))
      },
      resove(item){
          let title = item.name;
          let replace = new RegExp(this.dataa,"g");
          let reqstring = '<span id="act">'+this.dataa+'</span>'
          return title.replace(replace,reqstring)
      }
  },
  mounted() {
    axios.get("http://localhost:8080/seek.json").then(res => {
      window.console.log(res.data);
      this.list = res.data;
    });
  },
  computed: {
    dataarr() {
      var NewItems = [];
      this.list.forEach(val => {
        if (val.name.indexOf(this.dataa) !== -1) {
          NewItems.push(val);
        }
      });
      return NewItems;
    }
  }
};
</script>

<style >
#act{
    color: red
}
</style>