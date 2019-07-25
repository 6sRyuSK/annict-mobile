<template>
  <v-container>
    <v-layout row wrap class="programList">
      <v-flex v-for="item in items" :key="item" md3 xs6 sm4>
        <v-img
          src="https://www.onsen.ag/program/ippo/image/668_pgi01_m.jpg"
          width="100%"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [...'qwe']
    }
  }
}
</script>
