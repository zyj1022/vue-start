<template>
  <div class="home">
    <HeaderBar :modle="father"></HeaderBar>
    <MenuBar></MenuBar>
    <div class="mod">
        <h1>{{msg}}{{total}}</h1>
        <ul class="list">
          <li v-for="item in items">
                <h3>{{item.id}}</h3>
          </li>
        </ul>
    </div>
    <FooterBar @add="addTotal"></FooterBar>
  </div>
</template>

<script>

/**
@link https://vuefe.cn/v2/guide/components.html
使用 $on(eventName) 监听事件
使用 $emit(eventName) 触发事
父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件
**/

import HeaderBar from '../components/header.vue'
import MenuBar from '../components/menu.vue'
import FooterBar from '../components/footer.vue'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to home!',
      father: '来自父组件对数据',
      total: 0,
      child: '',
      items: [
        {'id': 1},
        {'id': 2},
        {'id': 3}
      ]
    }
  },
  methods: {
    addTotal: function (...fdata) {
      this.total += 1
      console.log('子组件的数据是：', fdata)
    }
  },
  components: {
    HeaderBar,
    MenuBar,
    FooterBar
  }
}
</script>
