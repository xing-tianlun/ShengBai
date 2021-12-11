<template>
  <div>
    <keep-alive>
      <router-view class="view" @tabChange="tabChange" />
    </keep-alive>
    <Tabbar class="tabbar">
      <tabbar-item
        @tabbarFn="tabbarFn(index)"
        v-for="(item, index) in tabList"
        :key="index"
        :obj="item"
        @click="tabFn(index)"
        :class="{ active: index === tabIndex }"
      ></tabbar-item>
    </Tabbar>
  </div>
</template>
<script>
import Tabbar from "../components/Tabbar.vue";
import TabbarItem from "../components/TabbarItem.vue";
export default {
  data() {
    return {
      tabList: [
        {
          iconfont: "icon-1",
          txt: "首页",
        },
        {
          iconfont: "icon-2",
          txt: "分类",
        },
        {
          iconfont: "icon-gouwucheman",
          txt: "购物车",
        },
        {
          iconfont: "icon-wode-wode",
          txt: "我的",
        },
      ],
      tabIndex: 0,
    };
  },
  components: {
    Tabbar,
    TabbarItem,
  },
  methods: {
    tabbarFn(index) {
      this.tabIndex = index;
      if (this.$route.path != "/main/home")
        if (index === 0) this.$router.replace("/main/home");
      if (this.$route.path != "/main/classify")
        if (index === 1) this.$router.push("/main/classify");
      if (this.$route.path != "/main/shopcar")
        if (index === 2) this.$router.push("/main/shopcar");
      if (this.$route.path != "/main/info")
        if (index === 3) this.$router.push("/main/info");
    },
    tabChange(index) {
      this.tabIndex = index
    }
  },
  mounted() {
    if (this.$route.path === "/main/home") {
      this.tabIndex = 0;
    } else if (this.$route.path === "/main/classify") {
      this.tabIndex = 1;
    } else if (this.$route.path === "/main/shopcar") {
      this.tabIndex = 2;
    } else if (this.$route.path === "/main/info") {
      this.tabIndex = 3;
    }
  },
};
</script>
<style lang="scss" scope>
$green: #a6b620;
.iconfont {
  font-size: 0.4rem;
}
.view {
  width: 100%;
  height: calc(100vh - 1.733333rem);
  overflow: hidden;
}
.tabbar {
  position: fixed;
  bottom: 0;
}
.active {
  color: $green;
}
</style>
