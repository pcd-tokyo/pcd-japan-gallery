<template>
  <header class="header" :class="{ sp: $device.isMobileOrTablet }">
    <h1 class="title">
      <n-link to="/">PCD Japan Gallery</n-link>
    </h1>
    <div class="navigationContainer">
      <ul>
        <li><n-link to="/">TOP</n-link></li>
        <li><n-link to="/about">ABOUT</n-link></li>
        <li><n-link to="/submit">SUBMIT</n-link></li>
      </ul>
    </div>
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
      text-decoration none

  .navigationContainer
    margin-top $margin_20

    ul
      display flex
      justify-content center

      a
        font-size $font_size_14
        padding $padding_4
        margin 0 $margin_8
  &.sp
    .title
      a
        font-size 9vw
</style>
