<template>
  <div class="color-wrapper">
    <topbar></topbar>
    <div class="clearfix layout-wrapper">
      <div class="header-container ">
        <offer-header></offer-header>
      </div>
      <div class="view-container">
        <router-view></router-view>
      </div>
    </div>
    <offer-footer></offer-footer>
  </div>
</template>

<script>
import Hello from './components/Hello'
import topbar from './components/topbar/topbar'
import offerHeader from './components/header/header'
import footer from './components/footer/footer'
import store from './vuex/store.js'
export default {
  store,
  components: {
    'Hello': Hello,
    'topbar': topbar,
    'offer-header': offerHeader,
    'offer-footer': footer
  }
}

</script>

<style lang="less">
.color-wrapper {
  .layout-wrapper {
    padding-left: 270px;
    width: 100%;
    margin: 0 auto;
    .header-container {
      width: 270px;
      float: left;
      margin-left: -270px;
    }
    .view-container {
      width: 100%;
      float: left;
    }
  }
  .clearfix::after {
    content: ".";
    /*加一段内容*/
    display: block;
    /*让生成的元素以块级元素显示，占满剩余空间*/
    height: 0;
    /*避免生成的内容破坏原有布局高度*/
    clear: both;
    /*清除浮动*/
    visibility: hidden;
    /*让生成的内容不可见*/
  }
  .clearfix {
    overflow: hidden;
  }
}
</style>