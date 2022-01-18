<template>
  <div class="home">
    <Headbar class="head">
      <template slot="left">
        <div class="address">
          <i class="iconfont icon-dizhi"></i>
          <span>北京工商管理...</span>
          <i class="iconfont icon-xiangyou1"></i>
        </div>
      </template>
      <template slot="right">
        <div class="search" @click="searchFn">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索</span>
        </div>
      </template>
    </Headbar>
    <Scroll
      class="homeScroll"
      ref="scroll"
      :pullUp="true"
      @pullingUp="loadMore"
    >
      <BannerImg>
        <img src="../../assets/img/home_01.png" alt="" />
      </BannerImg>
      <Promise />
      <div class="classify">
        <ul>
          <li
            v-for="(item, index) in goodsList"
            @click="goClassify(index)"
            :key="index"
          >
            <img :src="typeList[index].image" alt="" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
      <Sale />
      <Juan />
      <BannerImg>
        <img src="../../assets/img/home_active_01.png" alt="" />
      </BannerImg>
      <ScrollRow class="scrollRow" ref="scrollRow" :width="1225">
        <CenterNavbar />
      </ScrollRow>
      <BannerImg>
        <img src="../../assets/img/home_active_02.png" alt="" />
      </BannerImg>
      <div class="goodsList">
        <GoodsItem v-for="(item, index) in goods" :obj="item" :key="index" />
      </div>
      <div class="pullup-tips">
        <div v-if="!isPullUpLoad" class="before-trigger">
          <span class="pullup-txt">Pull up and load more</span>
        </div>
        <div v-else class="after-trigger">
          <span class="pullup-txt">Loading...</span>
        </div>
      </div>
    </Scroll>
    <ScrollRow
      class="scrollRow scrollRow2"
      ref="scrollRow2"
      :class="{ active2: isScrollRow }"
      :width="1225"
    >
      <CenterNavbar />
    </ScrollRow>
  </div>
</template>

<script>
import Headbar from "../../components/Headbar.vue";
import Scroll from "../../components/Scroll.vue";
import ScrollRow from "../../components/ScrollRow.vue";

import BannerImg from "./components/BannerImg.vue";
import Promise from "./components/Promise.vue";
import Sale from "./components/Sale.vue";
import Juan from "./components/Juan.vue";
import CenterNavbar from "./components/CenterNavbar.vue";
import GoodsItem from "./components/GoodsItem.vue";
export default {
  name: "Home",
  data() {
    return {
      typeList: [
        {
          name: "蔬菜豆菇",
          image: require("../../assets/img/home_02.png"),
        },
        {
          name: "时令水果",
          image: require("../../assets/img/home_03.png"),
        },
        {
          name: "肉禽蛋品",
          image: require("../../assets/img/home_04.png"),
        },
        {
          name: "海鲜水产",
          image: require("../../assets/img/home_05.png"),
        },
        {
          name: "牛奶面包",
          image: require("../../assets/img/home_06.png"),
        },
        {
          name: "粮油调味",
          image: require("../../assets/img/home_07.png"),
        },
        {
          name: "酒饮冲品",
          image: require("../../assets/img/home_08.png"),
        },
        {
          name: "休闲零食",
          image: require("../../assets/img/home_09.png"),
        },
        {
          name: "速冻速食",
          image: require("../../assets/img/home_10.png"),
        },
        {
          name: "个洗家清",
          image: require("../../assets/img/home_11.png"),
        },
      ],
      goodsList: null,
      scrollHeight: 0,
      scrollRowTop: 0,
      isScrollRow: false,
      lastScroll: "scrollRow",
      goods: [],
      page: 0,
      limit: 4,
      isPullUpLoad: true,
    };
  },
  components: {
    Headbar,
    Scroll,
    ScrollRow,

    BannerImg,
    Promise,
    Sale,
    Juan,
    CenterNavbar,
    GoodsItem,
  },
  methods: {
    goClassify(index) {
      this.$router.push({ name: "Classify", params: { type: index } });
      this.$emit("tabChange", 1);
    },
    searchFn() {
      this.$router.push("/search");
    },
    loadMore() {
      // 上拉钩子触发的函数，重新新的商品数据，加入到 goods 中
      this.getGoods();
      this.$refs.scroll.finishPullUp();
    },
    async getGoods() {
      // 通过参数分次请求展示商品数据
      this.isPullUpLoad = true;
      await this.axios
        .post("/api/goodsList", {
          page: this.page,
          limit: this.limit,
        })
        .then((res) => {
          this.isPullUpLoad = false;
          this.goods.push(...res.data);
        });
      this.page++;
    },
  },
  computed: {
    getGoodsList() {
      let arr = [];
      if (this.goodsList) {
        arr = this.goodsList.map((el) => el.foods).flat();
      }
      return arr;
    },
  },
  created() {
    this.axios.get("/api/goods").then((res) => {
      this.goodsList = res.data.data;
    });
  },
  mounted() {
    setTimeout(() => {
      // 同步首页两个横向 scroll 组件
      // this.scrollRowTop = this.$refs.scrollRow.$el.offsetTop
      this.$refs.scroll.scroll.on("scroll", (pos) => {
        // 获取 scrollRow 距离顶部的高度
        this.scrollRowTop = this.$refs.scrollRow.$el.offsetTop;
        this.scrollHeight = parseInt(Math.abs(pos.y));
        if (this.scrollHeight > this.scrollRowTop) {
          this.isScrollRow = true;
        } else {
          this.isScrollRow = false;
        }
        if (this.lastScroll === "scrollRow") {
          let x = this.$refs.scrollRow.scroll.x;
          this.$refs.scrollRow2.scroll.scrollTo(x, 0, 0);
        } else if (this.lastScroll === "scrollRow2") {
          let x2 = this.$refs.scrollRow2.scroll.x;
          this.$refs.scrollRow.scroll.scrollTo(x2, 0, 0);
        }
      });
      this.$refs.scrollRow.scroll.on("scroll", () => {
        this.lastScroll = "scrollRow";
      });
      this.$refs.scrollRow2.scroll.on("scroll", () => {
        this.lastScroll = "scrollRow2";
      });
      // 初始化首页展示商品前几条
      this.getGoods();
    }, 100);
  },
  updated() {
    this.$refs.scroll.refresh();
  },
};
</script>
<style lang="scss" scoped>
$green: #a6b620;
.home {
  width: 100%;
  position: relative;

  .head {
    position: absolute;
    top: 0;
    z-index: 10;
    width: 100%;
    padding: 0.16rem 0.4rem 0.16rem;
    box-sizing: border-box;
    height: 1.333333rem;
    background: $green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .address {
      font-size: 0.36rem;
      color: #fff;
      i {
        display: inline-block;
        margin: 0 0.066667rem;
      }
    }
    .search {
      width: 5.333333rem;
      height: 0.826667rem;
      border-radius: 0.826667rem;
      background: #fff;
      text-align: center;
      line-height: 0.826667rem;
      font-size: 0.32rem;
      color: #a5a5a5;
      i {
        vertical-align: middle;
        margin: 0 0.066667rem;
      }
    }
  }
  .homeScroll {
    width: 100%;
    margin-top: 1.333333rem;
    height: calc(100% - 1.333333rem);
    overflow: hidden;
  }
  .classify {
    margin: 0.2rem 0.4rem;
    padding: 0.293333rem 0 0 0;
    background: #f8f9f3;
    border-radius: 0.266667rem;
    ul {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 18%;
        margin-bottom: 0.266667rem;
        img {
          width: 100%;
        }
        p {
          font-size: 0.4rem;
          text-align: center;
        }
      }
    }
  }
  .scrollRow {
    width: 100%;
    padding: 0.266667rem 0 0 0;
  }
  .scrollRow2 {
    position: absolute;
    top: 1.333333rem;
    height: 1.066667rem;
    left: 0;
    background: #fff;
    padding: 0.266667rem 0;
    visibility: hidden;
  }
  .scrollRow2.active2 {
    visibility: visible;
  }
  .goodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    background: #f6f6f6;
    padding: 0.2rem 0;
  }
}

.pullup-tips {
  padding: 20px;
  text-align: center;
  color: #999;
}
</style>
