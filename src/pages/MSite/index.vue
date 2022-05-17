<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="addressName">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link
        class="header_login"
        slot="right"
        :to="userInfo._id ? '/userinfo' : '/login'"
      >
        <span class="header_login_text" v-if="!userInfo._id">
          {{ "登录|注册" }}
        </span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorysData.length">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(categorys, index) in categorysData"
            :key="index"
          >
            <a
              href="javascript:"
              class="link_to_food"
              v-for="category in categorys"
              :key="category.id"
            >
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url" />
              </div>
              <span>{{ category.title }}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="back" v-else />
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

import Swiper from "swiper";
import "swiper/css/swiper.min.css";

import HeaderTop from "../../components/HeaderTop";
import ShopList from "../../components/ShopList";

export default {
  name: "MSite",
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com",
    };
  },
  components: {
    HeaderTop,
    ShopList,
  },
  computed: {
    ...mapState(["msite", "login"]),
    addressName() {
      return this.msite.address.name;
    },
    categorysData() {
      const { categorys } = this.msite;
      const _arr = [];
      // let _tempArr = [];
      categorys.forEach((c, index) => {
        //   if (_tempArr.length === 8) {
        //     _tempArr = [];
        //   }
        //   if (_tempArr.length === 0) {
        //     _arr.push(_tempArr);
        //   }
        //   _tempArr.push(c);
        //第二种方法
        const page = Math.floor(index / 8);
        if (!_arr[page]) {
          _arr[page] = [];
        }
        _arr[page].push(c);
      });
      return _arr;
    },
    userInfo() {
      return this.login.userInfo;
    },
  },
  mounted() {
    //派发 action
    // this.$store.dispatch("getFoodCategorys");
    // this.$store.dispatch("getAddress");
    // this.$store.dispatch("getShopList");

    //使用mapActions
    this.getAddress();
    this.getFoodCategorys();
    this.getShopList();
  },
  methods: {
    ...mapActions(["getAddress", "getFoodCategorys", "getShopList"]),
  },
  watch: {
    categorysData() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.msite // 首页
  width: 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top: 45px
    height: 200px
    background: #fff
    .swiper-container
      width: 100%
      height: 100%
      .swiper-wrapper
        width: 100%
        height: 100%
        .swiper-slide
          display: flex
          justify-content: center
          align-items: flex-start
          flex-wrap: wrap
          .link_to_food
            width: 25%
            .food_container
              display: block
              width: 100%
              text-align: center
              padding-bottom: 10px
              font-size: 0
              img
                display: inline-block
                width: 50px
                height: 50px
            span
              display: block
              width: 100%
              text-align: center
              font-size: 13px
              color: #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background: #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top: 10px
    background: #fff
    .shop_header
      padding: 10px 10px 0
      .shop_icon
        margin-left: 5px
        color: #999
      .shop_header_title
        color: #999
        font-size: 14px
        line-height: 20px
</style>

