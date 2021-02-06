<template>
  <div class="app">
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import Footer from '@/components/Footer'
@Component({
  components: { Footer },
})
export default class extends Vue {}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.app
  .footer
    margin-top $margin_20
</style>
