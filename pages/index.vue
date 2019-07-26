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
      <v-btn large @click="click">ログイン</v-btn>
      <programs v-show="routerPath === 'programs'" />
    </v-flex>
  </v-layout>
</template>
<script>
import { GraphQLClient } from 'graphql-request'
import axios from 'axios'

import programs from '~/components/programs'

export default {
  components: {
    programs
  },
  data() {
    return {
      routerPath: '',
      annictAPIClient: undefined,
      annictEndPoint: 'https://api.annict.com/graphql',
      userWatching: []
    }
  },
  computed: {
    auth() {
      return this.$store.state.authCode
    }
  },
  created() {
    // console.log(this.auth)
    // console.log(this.$route)
    this.$nuxt.$on('routerIndex', this.router)
    if (this.$route.query.code) {
      this.annictAPIClient = new GraphQLClient(this.endPoint, {
        headers: {
          Authorization: `Bearer ${this.$route.query.code}`
        }
      })
    }
  },
  methods: {
    router(path) {
      this.routerPath = path
    },
    click() {
      console.log(this.$route.query.code)
      axios.post('/api/annict/authenticate/', {
        code: this.$route.query.code
      }).then((val) => {
        console.log(val)
      })
      // if (this.annictAPIClient) {
      //   const query = `
      //     query { user( username: "6sRyuSK" ) { name works { edges{node {
      //     twitterUsername
      //   }} }} }
      //   `
      //   this.annictAPIClient.request(query).then((data) => {
      //     this.userWatching = data.user.works.edges.map(val => val.node.twitterUsername)
      //   })
      //   console.log(this.userWatching)
      // }
    }
  }
}
</script>
