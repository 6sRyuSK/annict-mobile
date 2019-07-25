<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <h1>速く</h1>
      <v-btn large>ログイン</v-btn>
      <programs v-show="routerPath === 'programs'" />
    </v-flex>
  </v-layout>
</template>
<script>
import programs from '~/components/programs'

export default {
  components: {
    programs
  },
  data() {
    return {
      routerPath: ''
    }
  },
  computed: {
    auth() {
      return this.$store.state.authCode
    }
  },
  created() {
    console.log(this.auth)
    console.log(this.$route)
    this.$nuxt.$on('routerIndex', this.router)
  },
  methods: {
    router(path) {
      this.routerPath = path
    }
  }
}
</script>
