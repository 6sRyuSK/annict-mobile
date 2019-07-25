<template>
  <v-app dark>
    {{ bottomNav }}
    <v-content id="content">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-bottom-navigation
      v-model="bottomNav"
      fixed
      grow
      app
    >
      <v-btn
        value="home"
      >
        <span>home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn
        value="programs"
      >
        <span>programs</span>
        <v-icon>calendar_today</v-icon>
      </v-btn>

      <v-btn
        value="watching"
      >
        <span>watching</span>
        <v-icon>play_arrow</v-icon>
      </v-btn>

      <v-btn
        value="search"
      >
        <span>search</span>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn
        value="menu"
      >
        <span>menu</span>
        <v-icon>menu</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: '/'
    }
  },
  mounted() {
    const inbox = document.getElementById('content')

    inbox.addEventListener('touchmove', (e) => {
      e.preventDefault()
    }, { passive: false })
    window.scrollTo(0, 0)
  },
  watch: {
    bottomNav(path) {
      this.$nuxt.$emit('routerIndex', path)
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  overflow: hidden;
  overscroll-behavior: none;
}
</style>
