<template>
<div class="all">
  <div>这是商品页哟</div>
  <div class="goods_list">
    <router-link  v-for="goods in goodsList" :key="goods.id" :to="{name: 'GoodsList', params: {id: goods.id}}">第{{goods.id}}个</router-link>
  </div>
  <div class="prop" @click="proNum"></div>
  <router-view :child-pornum="proStr" />
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
      ],
      proStr: {
        num: 1
      }
    }
  },
  methods: {
    // proNum () {
    //   this.proStr.num++
    // },
    proNum () {
      let url = 'http://123.56.6.167:8082/h5/gps/param/findDeviceByNo'
      this.$axios.get(url, {
        params: {
          deviceNo: 12323
        }
      }).then((res) => {
        let data = res.data
        console.log(data)
        if (data.resultCode === 0) {
          let result = data.result
          // this.manCode = result.manCode
          if (result.manCode === '1000') {
            this.proStr.num = result.simNo
            this.$router.push({name: 'GoodsList'})
          }
        }
      })
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
    .prop {
      width: 100%;
      height: 50px;
      background: yellowgreen;
    }
  }
</style>
