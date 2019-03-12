<template>
  <div v-if="childPornum">
    <h1>我是点击{{$route.params.id}}传进来的</h1>
    <h1>我是点击{{childPornum.num}}传进来的</h1>
    <input type="text" v-model="childPornum.num">
  </div>
</template>

<script>
export default {
  props: ['childPornum'],
  data () {
    return {
      goodsId: ''
    }
  },
  mounted () {
    // this.goodsId = this.$route.params.id
    window.addEventListener('load', () => {
      console.log(this.$router.path)
      this.$router.replace('./Goods')
    })
  }
}
</script>

<style lang="less" scoped>
  div {
    h1 {
      height: 50px;
      background: blue;
      color: black;
    }
  }
</style>
