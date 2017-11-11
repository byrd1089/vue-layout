# vue-layout

Check out the [Demo](https://vue-layout.herokuapp.com/)


> A Vue.js project implementing a Full-Screen "Holy Grail" Layout using Flexbox. 
>
> At its core, the Holy Grail Layout is a page with a header, footer, and three columns. 
>
> The center column contains the main content, and the left and right columns contain supplemental content like ads or navigation.
> 
> Most CSS solutions to this problem aim to meet a few goals:
>
> The application should completely fill the screen.
> 
> The main content area should have a fluid center with fixed-width sidebars.
> 
> All columns should be the same height, regardless of which column is actually the tallest.
>
> Columns should require minimal markup.
>
> The footer should “stick” to the bottom of the page.
>
> With Vue.js, the vue-layout becomes a Flexbox component with Slots to accept other components. 


### Usage

```vue
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
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
