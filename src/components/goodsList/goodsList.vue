<template>
  <div>
    <h1>我是点击{{$route.params.id}}传进来的</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodsId: ''
    }
  }
  // created () {
  //   this.goodsId = this.$route.params.id
  // }
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
