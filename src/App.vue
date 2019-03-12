<template>
  <div id="app">
    <img src="./assets/images/logo.png" alt="">
    <v-header></v-header>
    <nav>
      <router-link to="/Goods">商品</router-link>
      <router-link to="/Pinglun">评论</router-link>
      <router-link to="/XiangQing">详情</router-link>
    </nav>
    <transition name="slide-fade">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from './components/details/details'
export default {
  name: 'app',
  components: {
    'v-header': Header
  },
  data () {
    return {
      transitionName: 'slide-left'
    }
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

