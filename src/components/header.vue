<template>
  <div class="header">
    <h1>{{msg}}</h1>
    <h2>{{other}}</h2>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'I"am header',
      other: this.modle
    }
  },
  props: ['modle']
}
</script>
