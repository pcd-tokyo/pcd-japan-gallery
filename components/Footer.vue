<template>
  <footer class="footer" :class="{ sp: $device.isMobileOrTablet }">
    <div class="container">
      <span>©PCD Japan Gallery</span>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class Footer extends Vue {}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.footer
  .container
    color $accent_text_color
    text-align center
    padding $padding_20
</style>
