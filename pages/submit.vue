<template>
  <div class="submitPage">
    <Header />
    <div class="container">How to submit your work to this gallery.</div>
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
export default class SubmitPage extends Vue {}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.submitPage
  .container
    text-align center
    margin-top $margin_48

  .artSubmissionButton
    margin-top $margin_80
</style>
