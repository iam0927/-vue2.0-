<template>
  <div id="app">
    <img src="./assets/images/logo.png" alt="">
    <v-header></v-header>
    <nav>
      <router-link to="/Goods">商品</router-link>
      <router-link to="/Pinglun">评论</router-link>
      <router-link to="/XiangQing">详情</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/details/details'
export default {
  name: 'app',
  components: {
    'v-header': Header
  }
}
</script>

<style lang="less">
@import './assets/css/base.less';
nav {
  width: 100%;
  display: flex;
  a {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    border: 1px solid #666;
  }
}
.active {
      background: #666;
      color: white;
      font-size: 20px;
    }
</style>

