<template>
  <div class="aboutPage">
    <Header />
    <div class="container">About PCD Tokyo Gallery 2021</div>
    <ArtSubmissionButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/Header.vue'
import ArtSubmissionButton from '~/components/ArtSubmissionButton.vue'
@Component({
  components: { Header, ArtSubmissionButton },
})
export default class AboutPage extends Vue {}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.aboutPage
  .container
    text-align center
    margin-top $margin_48

  .artSubmissionButton
    margin-top $margin_80
</style>
