<template>
  <div>
    <header class="header">
      <symbol id="icon-cart" viewBox="0 0 38 32">
        <title>cart</title>
        <path
          class="path1"
          d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"
        ></path>
        <path
          class="path2"
          d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"
        ></path>
        <path
          class="path3"
          d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"
        ></path>
        <path
          class="path4"
          d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"
        ></path>
      </symbol>
      <div class="navbar">
        <div class="navbar-left-container">
          <a href="/">
            <img class="navbar-brand-logo" src="static/logo.png" />
          </a>
        </div>
        <div class="navbar-right-container" style="display: flex;">
          <div class="navbar-menu-container">
            <!--<a href="/" class="navbar-link">我的账户</a>-->
            <span class="navbar-link" v-if="nickName" v-text="nickName"></span>
            <a
              href="javascript:void(0)"
              @click="loginModalFlag = true"
              v-if="!nickName"
              class="navbar-link"
            >Login</a>
            <a href="javascript:void(0)" @click="logOut" v-if="nickName" class="navbar-link">Log out</a>
            <a
              href="javascript:void(0)"
              @click="regIster"
              v-if="!nickName"
              class="navbar-link"
            >register</a>
            <div class="navbar-cart-container">
              <span class="navbar-cart-count" v-if="cartCount>0">{{cartCount}}</span>
              <a class="navbar-link navbar-cart-link" href="/#/cart">
                <svg class="navbar-cart-logo">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- // -->
      <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':loginModalFlag}">
        <div class="md-modal-inner">
          <div class="md-top">
            <div class="md-title">Login in</div>
            <button class="md-close" @click="loginModalFlag=false">Close</button>
          </div>
          <div class="md-content">
            <div class="confirm-tips">
              <div class="error-wrap">
                <span class="error error-show" v-show="errorTip">用户名或者密码错误</span>
              </div>
              <ul>
                <li class="regi_form_input">
                  <i class="icon IconPeople"></i>
                  <input
                    type="text"
                    tabindex="1"
                    name="loginname"
                    v-model="userName"
                    class="regi_login_input regi_login_input_left"
                    placeholder="User Name"
                    data-type="loginname"
                  />
                </li>
                <li class="regi_form_input noMargin">
                  <i class="icon IconPwd"></i>
                  <input
                    type="password"
                    tabindex="2"
                    name="password"
                    v-model="userPwd"
                    class="regi_login_input regi_login_input_left login-input-no input_text"
                    placeholder="Password"
                    @keyup.enter="login"
                  />
                </li>
              </ul>
            </div>
            <div class="login-wrap">
              <a href="javascript:;" class="btn-login" @click="login">登 录</a>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-if="loginModalFlag" @click="loginModalFlag=false"></div>
    </header>
    <Modal :mdShow="isMdShow" @close="closeModal">
      <p slot="message">账号注册</p>
      
      <div slot="inp">
        <span class="zhuce" v-show="errorTip2">{{msg}}</span><br />
        账号：
        <el-input placeholder="请输入账号" v-model="input" clearable></el-input>密码：
        <el-input placeholder="请输入密码" v-model="input1" type="password" clearable></el-input>
      </div>
      <div class="btn_main" slot="btnGroup">
        <a class="btn btn--m" id="btn_off" @click="regIsterLog" href="javascript:;">确认</a>
        <a class="btn btn--m" id="btn_off" @click="isMdShow = false" href="javascript:;">取消</a>
      </div>
    </Modal>
    <Modal :mdShow="regIsteract" @close="closeModal">
      <p slot="message">
        <svg class="icon-status-ok">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok" />
        </svg>
        <span>注册成功</span>
      </p>
      <div class="btn_main" slot="btnGroup">
        <a class="btn btn--m" id="btn_off" @click="regIsteract = false" href="javascript:;">确定</a>
      </div>
    </Modal>
  </div>
</template>

<script>
import "../assets/css/login.css";
import Modal from "./Modal";
import axios from "axios";
//辅助函数 帮助我们生成计算属性
import { mapState } from "vuex";
export default {
  components: {
    Modal
  },
  data() {
    return {
      userName: "admin",
      userPwd: "123456",
      errorTip: false,
      loginModalFlag: false,
      isMdShow: false,
      errorTip2:false,
      input: "",
      input1: "",
      id:10000080,
      msg:'',
      regIsteract:false
    };
  },
  mounted() {
    this.checkLogin();
  },
  computed: {
    ...mapState(["nickName", "cartCount"])
    // nickName(){
    //   return this.$store.state.nickName
    // },
    // cartCount(){
    //   return this.$store.state.cartCount
    // },
  },
  methods: {
    //注册
    regIster() {
      this.isMdShow = true;
    },
    closeModal() {
      this.isMdShow = false;
      this.regIsteract = false
    },
    regIsterLog() {
      this.id++;
      axios.post("/users/register", {
        userName: this.input,
        userPwd: this.input1,
        userId:this.id
      }).then(response=>{
        let res = response.data;
        if (res.status=="0") {
          this.isMdShow = false;
          this.regIsteract = true
        }else{
          this.errorTip2 = true;
          this.msg = res.msg
        }
        console.log(res);
      });
    },
    checkLogin() {
      axios.get("/users/checkLogin").then(response => {
        var res = response.data;
        var path = this.$route.pathname;
        if (res.status == "0") {
          // this.nickName = res.result;
          this.getCartCount();
          this.$store.commit("updateUserInfo", res.result);
          // this.loginModalFlag = false;
        }
      });
    },
    login() {
      if (!this.userName || !this.userPwd) {
        this.errorTip = true;
        return;
      }
      axios
        .post("/users/login", {
          userName: this.userName,
          userPwd: this.userPwd
        })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            this.errorTip = false;
            this.loginModalFlag = false;
            // this.nickName = res.result.userName
            this.$store.commit("updateUserInfo", res.result.userName);
            this.getCartCount();
          } else {
            this.errorTip = true;
          }
        });
    },
    logOut() {
      axios.post("/users/logout").then(response => {
        let res = response.data;
        if (res.status == "0") {
          // this.nickName = '';
          this.$store.commit("updateUserInfo", "");
        }
      });
    },
    getCartCount() {
      axios.get("users/getCartCount").then(response => {
        var res = response.data;
        this.$store.commit("initCartCount", res.result);
      });
    }
  }
};
</script>


<style>
.btn_main{
  display: flex;
  justify-content: space-around;
  align-items: center
}
#btn_off {
  width: 160px;
}
#btn_cart{
  width: 160px;
}
.zhuce{
  color: red
}
.header {
  width: 100%;
  background-color: white;
  font-family: "moderat", sans-serif;
  font-size: 16px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 70px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 5px 20px 10px 20px;
}
.navbar-left-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: -20px;
}
.header a,
.footer a {
  color: #666;
  text-decoration: none;
}
a {
  -webkit-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
}
.navbar-right-container {
  display: none;
  justify-content: flex-start;
  align-items: center;
}
.navbar-menu-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 10px;
}
.navbar-link {
  padding-left: 15px;
}
.navbar-cart-container {
  position: relative;
}
.navbar-cart-count {
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -9px;
  right: -11px;
  width: 20px;
  border-radius: 10px;
  color: white;
  background-color: #eb767d;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
.navbar-cart-logo {
  width: 25px;
  height: 25px;
  transform: scaleX(-1);
}
</style>