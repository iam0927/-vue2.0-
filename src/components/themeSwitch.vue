<template>
  <div>
    <ColorPicker v-model="color" v-on:change="headleChangeColor"/>
    <Button>Default</Button>
  </div>
</template>
<script>
import theme from '@/assets/js/theme.js'
import ColorPicker from './color-picker/colorPicker'
export default {
  components: {
    ColorPicker
  },
  data () {
    return {
      theme3: 'light',
      color: 'red'
    }
  },
  methods: {
    headleChangeColor () {
      theme.gai(this.color)
    }
  }
}
</script>
