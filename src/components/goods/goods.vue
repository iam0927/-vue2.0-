<template>
<div class="all">
  <div>这是商品页哟</div>
  <div class="goods_list">
    <router-link  v-for="goods in goodsList" :key="goods.id" :to="{name: 'GoodsList', params: {id: goods.id}}">第{{goods.id}}个</router-link>
  </div>
  <router-view/>
</div>
</template>

<script>
export default {
  data () {
    return {
      goodsList: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .all {
    width: 100%;
    background: aqua;
    .goods_list {
      width: 100%;
      height: 80px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      a {
        height: 40px;
        width: 33%;
        display: flex;
        color: white;
        background: green;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
