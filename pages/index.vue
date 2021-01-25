<template>
  <div class="topPage">
    <h1>Hello, PCD Tokyo!!</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class TopPage extends Vue {}
</script>

<style scoped lang="stylus">
.topPage
  h1
    color red
    text-align center
</style>
