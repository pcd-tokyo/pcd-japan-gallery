<template>
  <header class="header">
    <h1 class="title">PCD Tokyo Gallery</h1>
    <p class="caption">Online artworks made by awesome artists.</p>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class Header extends Vue {}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.header
  text-align center
  padding $padding_20

  .title
    font-size $font_size_88
    color #ff2600

  .caption
    font-size $font_size_14
    margin-top $margin_16
</style>
