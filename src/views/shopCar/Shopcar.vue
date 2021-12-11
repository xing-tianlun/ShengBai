<template>
  <div class="shopcar">
    <Headbar class="top">
      <template slot="left">
        <span class="tit">购物车</span>
      </template>
      <template slot="center">
        <div class="address">
          <i class="iconfont icon-dizhi"></i>
          <span>北京工商管理...</span>
          <i class="iconfont icon-xiangyou1"></i>
        </div>
      </template>
      <template slot="right">
        <span class="clear" @click="clearCar">清空</span>
      </template>
    </Headbar>
    <Scroll class="scroll" ref="scroll">
      <ul class="carList">
        <CarGoodsItem
          v-for="(item, index) in carList"
          :key="index"
          :item="item"
        />
      </ul>
    </Scroll>
    <AllPaice />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Headbar from "../../components/Headbar.vue";
import Scroll from "../../components/Scroll.vue";

import CarGoodsItem from "./components/CarGoodsItem.vue";
import AllPaice from "./components/AllPaice.vue";

export default {
  name: "Shopcar",
  data() {
    return {};
  },
  components: {
    Headbar,
    Scroll,

    CarGoodsItem,
    AllPaice,
  },
  methods: {
    clearCar() {
      this.$store.commit("mclearCar");
    },
  },
  computed: {
    ...mapGetters(["carList"]),
  },
};
</script>
<style lang="scss" scoped>
$green: #a6b620;
.shopcar {
  width: 100%;
  .top {
    height: 0.933333rem;
    padding: 0.266667rem 0.4rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    font-size: 0.4rem;
    span.tit {
      font-size: 0.4rem;
    }
    span.clear {
      font-size: 0.4rem;
      color: #aaa;
    }
  }
  .scroll {
    height: calc(100% - 0.933333rem - 1.2rem);
    overflow: hidden;
    background: #f6f6f6;
    .carList {
      padding: 0.4rem;
      box-sizing: border-box;
    }
  }
}
</style>
