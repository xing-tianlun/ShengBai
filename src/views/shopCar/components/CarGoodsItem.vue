<template>
  <li>
    <div class="checkbox" :class="{ active: item.flag }">
      <i class="iconfont icon-duigouxiao" @click="changeFlag(item)"></i>
    </div>
    <img :src="item.image" alt="" />
    <div class="itemInfo">
      <p class="name">{{ item.name }}</p>
      <p class="price">￥{{ item.price }}<span>/份</span></p>
      <div class="btn_box">
        <span @click="subFn(item)">-</span>
        <span class="num">{{ getNum(item) }}</span>
        <span @click="addFn(item)">+</span>
      </div>
    </div>
  </li>
</template>

<script>
import mixin from "@/unitl/mixins.js";

export default {
  name: "CarGoodsItem",
  props: ["item"],
  mixins: [mixin], // 混入 加减按钮方法 和 获取购物车商品数量方法
  methods: {
    changeFlag(goods) {
      let goodsObj = {
        name: goods.name,
        price: goods.price,
      };
      this.$store.commit("mchangeFlag", goodsObj);
    },
  },
};
</script>
<style lang="scss" scoped>
$green: #a6b620;
li {
  padding: 0.266667rem;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0.266667rem;
  margin-bottom: 0.2rem;
  position: relative;
  display: flex;
  img {
    width: 2.266667rem;
    height: 2.266667rem;
    border-radius: 0.266667rem;
    margin: 0 0.266667rem;
  }
  .itemInfo {
    p.name {
      font-size: 0.4rem;
      line-height: 0.6rem;
    }
    .price {
      margin-top: 1.1rem;
      font-size: 0.4rem;
      color: #f60;
      font-weight: bold;
      span {
        font-size: 0.3rem;
        color: #aaa;
        font-weight: normal;
      }
    }
  }
  .btn_box {
    position: absolute;
    right: 0.266667rem;
    bottom: 0.266667rem;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: #f8f8f8;
      text-align: center;
      line-height: 0.5rem;
      font-size: 0.4rem;
    }
    span.num {
      font-size: 0.28rem;
      margin: 0 0.066667rem;
    }
  }
}
.checkbox {
  display: flex;
  align-items: center;
  i {
    border: 2px solid #aaa;
    border-radius: 50%;
  }
  i::before {
    color: transparent;
  }
  span {
    color: #000;
  }
}
.checkbox.active {
  i {
    border: 2px solid $green;
    border-radius: 50%;
  }
  i::before {
    color: $green;
  }
}
</style>
