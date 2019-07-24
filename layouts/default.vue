<template>
  <v-app dark>
    <v-content id="content">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-bottom-navigation
      v-model="bottomNav"
      fixed
      grow
    >
      <v-btn
        value="recent"
      >
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        value="favorites"
      >
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        value="nearby"
      >
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 'recent'
    }
  },
  mounted() {
    const inbox = document.getElementById('content')

    inbox.addEventListener('touchmove', (e) => {
      e.preventDefault()
    }, { passive: false })
    window.scrollTo(0, 0)
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
