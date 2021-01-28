<template>
  <header class="header">
    <h1 class="title">
      <n-link to="/">PCD Tokyo Gallery</n-link>
    </h1>
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
    a
      font-size $font_size_88
      color $accent_text_color

  .caption
    font-size $font_size_14
    color $white_fff
    margin-top $margin_16
</style>
