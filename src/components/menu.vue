<template>
  <div class="menu">
     <ul class="mlist">
       <li><router-link :to="{name: 'Home'}">home</router-link></li>
       <li><router-link :to="{name: 'About'}">about</router-link></li>
       <li><router-link :to="{name: 'Case'}">case</router-link></li>
       <li><router-link :to="{name: 'Contact'}">contact</router-link></li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {

    }
  }
}
</script>
