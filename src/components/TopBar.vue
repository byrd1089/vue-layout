<template>
  <div class="topnav">
    <div class="menu-left">
      <router-link :to="{name:'home'}" exact>Home</router-link>
      <router-link :to="{name:'article1'}">Article 1</router-link>
      <router-link :to="{name:'article2'}">Article 2</router-link>
    </div>

    <div class="menu-right">
      <a href="#" @click.prevent="toggleNav">Toggle Nav</a>
      <a href="#" @click.prevent="toggleAside">Toggle Aside</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'top-bar',
    methods: {
      toggleNav () {
        this.$eventHub.$emit('toggle-nav')
      },
      toggleAside () {
        this.$eventHub.$emit('toggle-aside')
      }
    }
  }
</script>
<style scoped>
  /* Add a black background color to the top navigation */
  .topnav {
    background-color: inherit;
    overflow: hidden;
    display: flex;
  }

  .topnav .menu-right {
    margin-left: auto;
  }

  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 14px;
    border-radius: 0.25em;
    margin-right: .25rem;
    font-weight: bold;
  }

  /* Change the color of links on hover */
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  /* Add a color to the active/current link */
  .topnav a.active {
    background-color: #4CAF50;
    color: white;
  }
</style>
