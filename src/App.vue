<template>
    <layout>
      <div slot="header">
        <top-bar></top-bar>
      </div>
      <div slot="nav" class="vbox h-100">
        <side-bar></side-bar>
      </div>
      <div slot="footer">
        vue-layout
      </div>
      <div slot="article">
        <router-view></router-view>
      </div>
    </layout>
</template>

<script>
  import './assets/style.css'
  import Layout from './components/Layout.vue'
  import TopBar from './components/TopBar.vue'
  import SideBar from './components/SideBar.vue'
export default {
    name: 'app',
    components: {
      Layout,
      TopBar,
      SideBar
    }
}
</script>

<style>

</style>
