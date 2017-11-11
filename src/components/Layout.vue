<template>
  <div id="app" class="vbox viewport">
    <header>
      <slot name="header">Header</slot>
    </header>

    <section class="main hbox space-between">
      <nav v-if="showNav">
        <slot name="nav">Nav</slot>
      </nav>
      <article>
        <slot name="article">Article</slot>
      </article>
      <aside v-if="showAside">
        <slot name="aside">Aside</slot>
      </aside>
    </section>

    <footer>
      <slot name="footer">Footer</slot>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'layout',
    created () {
      this.$eventHub.$on('toggle-nav', this.toggleNav)
      this.$eventHub.$on('toggle-aside', this.toggleAside)
    },
    data () {
      return {
        showNav: true,
        showAside: true
      }
    },
    methods: {
      toggleNav () {
        this.showNav = !this.showNav
      },
      toggleAside () {
        this.showAside = !this.showAside
      }
    }
  }
</script>
