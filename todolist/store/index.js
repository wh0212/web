import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todolist: JSON.parse(window.localStorage.getItem("todo")) || [],
    actcolor:window.localStorage.getItem("color")
  },
  mutations: {
    color(state,value){
      state.actcolor = value;
      window.localStorage.setItem("color",state.actcolor)
    },
    del(state, value) {
      if (value.active) {
        var index = state.todolist.findIndex(item => item.name === value.name)
        if (index !== -1) {
          state.todolist.splice(index, 1)
        }
        state.todolist.push({
          Type: "DELETE",
          name: value.name,
          active: value.active
        })
      } else {
        var index2 = state.todolist.findIndex(item => item.name === value.name)
        if (index2 !== -1) {
          state.todolist.splice(index2, 1)
        }
        state.todolist.push({
          Type: "DELETE",
          name: value.name,
          active: value.active
        })
      }
      window.localStorage.setItem("todo",JSON.stringify(state.todolist))
    },
    add(state, value) {
      if (state.todolist.length !== 0) {
        var index = state.todolist.findIndex(item => item.name === value)
        if (index !== -1) {
          return
        } else {
          state.todolist.push({
            Type: "PEDDING",
            name: value,
            active: false
          })
        }
      } else {
        state.todolist.push({
          Type: "PEDDING",
          name: value,
          active: false
        })
      }
      window.localStorage.setItem("todo",JSON.stringify(state.todolist))
    },
    qie(state, value) {
      if (value.active) {
        var index2 = state.todolist.findIndex(item => item.name === value.name);
        if (index2 !== -1) {
          state.todolist.splice(index2, 1)
        }
        state.todolist.push({
          Type: "PEDDING",
          name: value.name,
          active: false
        })
      } else {
        var dat = new Date().toLocaleString()
        var index = state.todolist.findIndex(item => item.name === value.name);
        if (index !== -1) {
          state.todolist.splice(index, 1)
        }
        state.todolist.push({
          Type: "FINSH",
          name: value.name,
          active: true,
          act:1,
          date:dat
        })
      }
      window.localStorage.setItem("todo",JSON.stringify(state.todolist))
    },
    recover(state, value) {
      
        var index2 = state.todolist.findIndex(item => item.name === value.name);
        if (index2 !== -1) {
          state.todolist.splice(index2, 1)
        }
        state.todolist.push({
          Type: "DELETE",
          name: value.name,
          active: value.active
        })
      
      window.localStorage.setItem("todo",JSON.stringify(state.todolist))
    }
  },
  actions: {
  },
  modules: {
  }
})
