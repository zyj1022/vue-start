<template>
  <div class="about">
    <HeaderBar></HeaderBar>
    <MenuBar></MenuBar>
    <div class="mod">
        <h1>about</h1>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>

import HeaderBar from '../components/header.vue'
import MenuBar from '../components/menu.vue'
import FooterBar from '../components/footer.vue'

export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    HeaderBar,
    MenuBar,
    FooterBar
  }
}
</script>
