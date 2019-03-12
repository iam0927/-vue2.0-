<template>
  <div>这是详情页哟
    <img src="./image/kind1.png" alt="">
    <p>
      我的名字是:{{name}}
    </p>
    <div><button @click="achievePing()">点击获取评论</button></div>
    <ul>
      <li v-for="good in goods" :key="good.index">
        {{good.name}}
      </li>
    </ul>
    <ul>
      <li v-for="pinlun in ratings" :key="pinlun.index">
        {{pinlun.text}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      goods: [],
      ratings: []
    }
  },
  computed: {
    // 获取的是状态对象
    ...mapState(['name'])
  },
/*   created () {
    this.$axios.get(this.$host + '/test/data.json')
    .then(res => {
      this.goods = res.data.goods
    })
    .catch(err => {
      console.log(err)
    })
  }, */
  methods: {
    achievePing () {
      this.$axios.get(this.$host + '/test/data.json')
    .then(res => {
      this.ratings = res.data.ratings
      console.log(this.ratings)
    })
    .catch(err => {
      console.log(err)
    })
    }
  }
}
</script>

<style lang="less" scoped>
  div {
    width: 100%;
    height: 50px;
    background: hotpink;
  }
</style>
