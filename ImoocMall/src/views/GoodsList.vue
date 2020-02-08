<template>
  <div>
    <Header />
    <NavBread>
      <span slot="bread">Goods</span>
    </NavBread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a
            @click="soortGoods"
            class="price"
            href="javascript:void(0)"
            v-bind:class="{'sort-up':!soortFlag}"
          >
            Price
            <!-- <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short"></use>
            </svg>-->
            <img class="icon icon-arrow-short" src="../assets/上箭头.svg" alt />
          </a>
          <a @click="showFilterPop" href="javascript:void(0)" class="filterby stopPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div :class="{'filterby-show':filterBy}" class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd>
                <a
                  @click="priceCheck = 'all'"
                  :class="{'cur':priceCheck === 'all'}"
                  href="javascript:void(0)"
                >All</a>
              </dd>
              <dd @click="setPriceFitter(index)" v-for="(item,index) in priceFilter" :key="index">
                <a
                  :class="{'cur':priceCheck ==index}"
                  href="javascript:void(0)"
                >{{item.startpriice}} - {{item.endPrice}}</a>
              </dd>
            </dl>
          </div>
          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item,index) in list" :key="index">
                  <div class="pic">
                    <a href="#">
                      <img v-lazy="'/static/'+item.productImage" alt />
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice}}</div>
                    <div class="btn-area">
                      <a
                        href="javascript:;"
                        class="btn btn--m"
                        @click="addCart(item.productId)"
                      >加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div
                class="loading"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="busy"
                infinite-scroll-distance="30"
              >
                <img src="../assets/loading-spinning-bubbles.svg" v-show="loading" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div @click="closePop" v-show="overLayFlag" class="md-overlay"></div>
    <!-- // -->
    <Modal :mdShow="mdShow" @close="closeModal">
      <p slot="message">请先登录，否则无法加入购物车!</p>
      <div class="btn_main" slot="btnGroup">
        <a class="btn btn--m" id="btn_off" @click="mdShow = false" href="javascript:;">关闭</a>
      </div>
    </Modal>
    <Modal :mdShow="mdShowCart" @close="closeModal">
      <p slot="message">
        <svg class="icon-status-ok">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok" />
        </svg>
        <span>加入购物车成功</span>
      </p>
      <div class="btn_main" slot="btnGroup">
        <a class="btn btn--m" id="btn_off" @click="mdShowCart = false" href="javascript:;">继续购物</a>
        <router-link id="btn_cart" class="btn btn--m btn--red" href="javascript:;" to="/cart">查看购物车</router-link>
      </div>
    </Modal>
    <Navfotter />
  </div>
</template>
<script>
import Header from "../components/Hdader";
import Navfotter from "../components/Navfotter";
import NavBread from "../components/Bread";
import Modal from "../components/Modal";
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      priceFilter: [
        {
          startpriice: "0.00",
          endPrice: "100.00"
        },
        {
          startpriice: "100.00",
          endPrice: "500.00"
        },
        {
          startpriice: "500.00",
          endPrice: "1000.00"
        },
        {
          startpriice: "1000.00",
          endPrice: "5000.00"
        }
      ],
      priceCheck: "all",
      filterBy: false,
      overLayFlag: false,
      soortFlag: true,
      page: 1,
      mdShowCart:false,
      pageSize: 8,
      busy: true,
      loading: false,
      mdShow: false
    };
  },
  components: {
    Header,
    Navfotter,
    NavBread,
    Modal
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    closeModal() {
      this.mdShow = false;
      this.mdShowCart =false
    },
    //商品列表
    getGoodsList(flag) {
      var param = {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.soortFlag ? 1 : -1,
        priceLevel: this.priceCheck
      };
      axios.get("/goods/list", { params: param }).then(response => {
          let res = response.data;
          if (res.status == "0") {
            if (flag) {
              this.list = this.list.concat(response.data.result.list);
              if (response.data.result.count == 0) {
                this.busy = true;
              } else {
                this.busy = false;
              }
            } else {
              this.list = response.data.result.list;
              this.busy = false;
            }
          } else {
            this.list = [];
          }
        },
        response => {
          console.log("error");
        }
      );
    },
    // 显示
    showFilterPop() {
      this.filterBy = true;
      this.overLayFlag = true;
    },
    //消失
    closePop() {
      this.filterBy = false;
      this.overLayFlag = false;
    },
    // 选中
    setPriceFitter(index) {
      this.priceCheck = index;
      this.page = 1;
      this.getGoodsList();
    },
    soortGoods() {
      this.soortFlag = !this.soortFlag;
      this.page = 1;
      this.getGoodsList();
    },
    loadMore() {
      this.loading = true;
      this.busy = true;
      setTimeout(() => {
        this.page++;
        this.getGoodsList(true);
        this.loading = false;
      }, 1000);
    },
    //加入购物车
    addCart(productId) {
      axios.post("/goods/addCart", {
          productId: productId
        }).then(res => {
          window.console.log(res);
          if (res.data.status == 0) {
            // alert("成功");
            this.mdShowCart = true;
            this.$store.commit("updateCartCount",1)
          } else {
            // alert(res.data.msg)
            this.mdShow = true;
          }
        });
    }
  }
};
</script>

<style  scoped>
.loading {
  width: 100px;
  margin: 0 auto;
}
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
</style>

