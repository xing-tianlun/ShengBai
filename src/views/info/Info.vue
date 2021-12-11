<template>
  <!-- 我的 -->
  <div class="info">
    <Scroll>
      <InfoTop />
      <OrderFormList />
      <Remaining />
      <BannerImg>
        <img src="@/assets/img/info_activity_01.png" alt="" />
      </BannerImg>
      <More />
    </Scroll>
  </div>
</template>

<script>
import Scroll from "../../components/Scroll.vue";

import InfoTop from "./components/InfoTop.vue";
import OrderFormList from "./components/OrderFormList.vue";
import Remaining from "./components/Remaining.vue";
import BannerImg from "./components/BannerImg.vue";
import More from "./components/More.vue";
export default {
  name: "Info",
  components: {
    Scroll,

    InfoTop,
    OrderFormList,
    Remaining,
    BannerImg,
    More,
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.info {
  width: 100%;
  background: #f6f6f6;
}
</style>
