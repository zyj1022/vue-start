<template>
  <div class="contact">
    <HeaderBar></HeaderBar>
    <MenuBar></MenuBar>
    <div class="mod">
        <h1>contact</h1>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>

import HeaderBar from '../components/header.vue'
import MenuBar from '../components/menu.vue'
import FooterBar from '../components/footer.vue'

export default {
  name: 'contact',
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
