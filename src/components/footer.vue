<template>
  <div class="footer">
      <h1>footer</h1>
      <button @click="add">{{msg}}{{num}}</button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      num: 0,
      msg: '我是底部数据'
    }
  },
  methods: {
    add: function () {
      let fdata = {
        f: 'footer'
      }
      this.num += 1
      this.$emit('add', fdata, 'lalala')
    }
  }
}
</script>
