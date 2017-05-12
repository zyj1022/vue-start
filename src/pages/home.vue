<template>
  <div class="home">
    <HeaderBar :modle="father"></HeaderBar>
    <MenuBar></MenuBar>
    <div class="mod">
        <h1>{{msg}}</h1>
        <ul class="list">
          <li v-for="item in items">
                <h3>{{item.id}}</h3>
          </li>
        </ul>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>

import HeaderBar from '../components/header.vue'
import MenuBar from '../components/menu.vue'
import FooterBar from '../components/footer.vue'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to home!',
      father: '来自父组件对数据',
      items: [
        {'id': 1},
        {'id': 2},
        {'id': 3}
      ]
    }
  },
  components: {
    HeaderBar,
    MenuBar,
    FooterBar
  }
}
</script>
