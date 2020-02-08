<template>
  <div>
    <Navheader />
    <div class="container">
      <div class="page-title-normal">
        <h2 class="page-title-h2">
          <span>check out</span>
        </h2>
      </div>
      <!-- 进度条 -->
      <div class="check-step">
        <ul>
          <li class="cur">
            <span>Confirm</span> address
          </li>
          <li class="cur">
            <span>View your</span> order
          </li>
          <li class="cur">
            <span>Make</span> payment
          </li>
          <li class="cur">
            <span>Order</span> confirmation
          </li>
        </ul>
      </div>

      <div class="order-create">
        <div class="order-create-pic">
          <img src="/static/ok-2.png" alt />
        </div>
        <div class="order-create-main">
          <h3>
            Congratulations!
            <br />Your order is under processing!
          </h3>
          <p>
            <span>Order ID：{{orderId}}</span>
            <span>Order total：{{orderTotal |currency("$")}}</span>
          </p>
          <div class="order-create-btn-wrap">
            <div class="btn-l-wrap">
              <router-link to="/cart" class="btn btn--m">Cart List</router-link>
            </div>
            <div class="btn-r-wrap">
              <router-link to="/" class="btn btn--m">Goods List</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navfotter />
  </div>
</template>
<script>
import Navheader from "../components/Hdader";
import Navfotter from "../components/Navfotter";
import NavBread from "../components/Bread";
import Modal from "../components/Modal";
import { currency } from "../util/currency";
import axios from "axios";
export default {
  components: {
    Navheader,
    Navfotter,
    NavBread,
    Modal
  },
  data() {
    return {
      orderId: "",
      orderTotal: 0
    };
  },
  filters: {
    currency:currency
  },
  mounted() {
    let orderId = this.$route.query.orderId;
    if (!orderId) {
      return;
    }
    axios.get("/users/orderDetail", {
        params:{
          orderId: orderId
        }
      })
      .then(response => {
        let res = response.data;
        if (res.status == "0") {
          this.orderId = orderId;
          this.orderTotal = res.result.orderTotal;
        }
      });
  }
};
</script>
