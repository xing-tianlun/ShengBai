<template>
  <!-- 分类 -->
  <div class="classify">
    <HeadBar>
      <template slot="center">
        <div class="search" @click="searchFn">
          <i class="iconfont icon-sousuo"></i>
          <span>找寻您的称心商品</span>
        </div>
      </template>
    </HeadBar>
    <ScrollRow class="scrollRow" ref="scrollRow" :width="scrollRowW">
      <ul v-if="goodsList">
        <li
          @click="typeTab(index)"
          ref="typeItem"
          :class="{ active: typeIndex === index }"
          v-for="(item, index) in goodsList"
          :key="index"
        >
          <div class="img_box"><img :src="typeList[index].image" alt="" /></div>
          <p class="typename">{{ item.name }}</p>
        </li>
      </ul>
    </ScrollRow>
    <div class="type_con">
      <Scroll class="scrollLeft" ref="scrollLeft">
        <ul>
          <li>
            <span>{{ getTypeTitle(typeIndex) }}</span>
          </li>
        </ul>
      </Scroll>
      <Scroll class="scrollRight" ref="scrollRight">
        <div class="carList">
          <CGoodsItem
            v-for="(item, index) in getTypeList(typeIndex)"
            :item="item"
            :key="index"
          />
        </div>
      </Scroll>
    </div>
    {{ getTypeIndex }}
  </div>
</template>

<script>
import HeadBar from "../../components/Headbar.vue";
import Scroll from "../../components/Scroll";
import ScrollRow from "../../components/ScrollRow";

import CGoodsItem from "./components/CGoodsItem.vue";
export default {
  name: "Classify",
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
      typeIndex: 0,
      scrollRowW: 0,
      goodsList: null,
    };
  },
  components: {
    HeadBar,
    Scroll,
    ScrollRow,

    CGoodsItem,
  },
  methods: {
    typeTab(index) {
      this.typeIndex = index;
    },
    getTypeTitle(index) {
      let title = "";
      if (this.goodsList) {
        title = this.goodsList[index].name;
      }
      return title;
    },
    getTypeList(index) {
      let arr = [];
      if (this.goodsList) {
        arr = this.goodsList[index].foods;
      }
      return arr;
    },
    searchFn() {
      this.$router.push("/search");
    },
  },
  computed: {
    getTypeIndex() {
      if (this.$route.params?.type || this.$route.params?.type === 0) {
        this.typeIndex = this.$route.params.type;
      }
    },
  },
  created() {
    this.axios.get("/api/goods").then((res) => {
      this.goodsList = res.data.data;
    });
  },
  mounted() {
    setTimeout(() => {
      let length = this.$refs.typeItem.length;
      this.scrollRowW = this.$refs.typeItem[0].clientWidth * length;
    }, 200);
  },
  updated() {
    this.$refs.scrollRight.scroll.refresh();
  },
};
</script>
<style lang="scss" scoped>
$green: #a6b620;
.classify {
  width: 100%;
  .search {
    width: 100%;
    height: 0.8rem;
    margin: 0.266667rem 0.4rem;
    background: #f6f6f6;
    border-radius: 0.8rem;
    text-align: center;
    color: #aaa;
    i {
      font-size: 0.5rem;
      vertical-align: middle;
      line-height: 0.8rem;
    }
    span {
      font-size: 0.32rem;
      vertical-align: middle;
      line-height: 0.8rem;
    }
  }
  .scrollRow {
    width: 100%;
    height: 2.133333rem;
    padding: 0.266667rem 0;
    box-sizing: border-box;
    ul {
      li {
        float: left;
        width: 1.6rem;
        padding: 0 0.133333rem;
        .img_box {
          width: 1.2rem;
          height: 1.2rem;
          margin: 0 auto;
          border: 5px solid transparent;
          box-sizing: border-box;
          border-radius: 0.266667rem;
          img {
            width: 1.066667rem;
            height: 1.066667rem;
            border-radius: 50%;
          }
        }
        .typename {
          font-size: 0.293333rem;
          line-height: 0.293333rem;
          margin-top: 0.2rem;
          text-align: center;
        }
      }
      li.active {
        .img_box {
          border: 5px solid $green;
          box-sizing: border-box;
          border-radius: 0.266667rem;
        }
      }
    }
  }
  .type_con {
    height: calc(100% - 1.333333rem - 2.213333rem);
    display: flex;
    .scrollLeft {
      width: 2.2rem;
      background: #f6f6f6;
      overflow: hidden;
      ul {
        li {
          height: 1.333333rem;
          padding: 0.453333rem 0;
          background: #fff;
          box-sizing: border-box;
          span {
            display: inline-block;
            width: 100%;
            text-align: center;
            height: 0.426667rem;
            line-height: 0.426667rem;
            border-left: 5px solid $green;
            color: $green;
            box-sizing: border-box;
          }
        }
      }
    }
    .scrollRight {
      width: 7.8rem;
      overflow: hidden;
      .carList {
        padding: 0.4rem;
        box-sizing: border-box;
      }
    }
  }
}
</style>
