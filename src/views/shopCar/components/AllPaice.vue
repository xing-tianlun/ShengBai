<template>
  <div class="all_box">
    <div class="checkbox" :class="{ active: gGetAllFlag }">
      <i class="iconfont icon-duigouxiao" @click="changeAllFlag"></i>&nbsp;<span
        >全选</span
      >
    </div>
    <p>
      合计：<span>￥{{ allparice }}</span>
    </p>
    <button class="pay">结算</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AllPaice",
  methods: {
    changeAllFlag() {
      this.$store.commit("mchangeAllFlag");
    },
  },
  computed: {
    ...mapGetters(["allparice", "gGetAllFlag"]),

  }
};
</script>
<style lang="scss" scoped>
$green: #a6b620;
.all_box {
  height: 1.2rem;
  padding: 0.2rem 0.4rem;
  box-sizing: border-box;
  display: flex;
  font-size: 0.4rem;
  font-weight: bold;
  p {
    display: flex;
    align-items: center;
    margin: 0.266667rem;
    flex: 1;
    span {
      color: #f60;
    }
  }
  button.pay {
    padding: 0.133333rem 0.4rem;
    border: none;
    background: $green;
    color: #fff;
    border-radius: 0.5rem;
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
