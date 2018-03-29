<template>
  <div>这是评论页哟
    <p>
      姓名是<input type="text" v-model="nameT">
      <button @click="sendName">点击发送姓名</button>
    </p>
    <span></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nameT: 'zhaosi'
    }
  },
  methods: {
    sendName () {
      this.$store.commit('newName', this.nameT)
    }
  }
}
</script>

<style lang="less" scoped>
  div {
    width: 100%;
    height: 50px;
    background: yellowgreen;
    span {
      width: 100%;
      display: block;
      height: 100px;
      background: url('./images/未标题-1.png');
      background-size: 100px,100px;
    }
  }
</style>
