<template>
  <div class="submitPage">
    <Header />
    <div class="container">
      <h2 class="title">あなたのスケッチ・作品でPCD Japanを盛り上げよう</h2>
      <p class="description">
        ページ下部のボタンから誰でもスケッチ・作品を本ギャラリーに投稿できます。<br />オンラインで閲覧できるスケッチ・作品であれば何でも可能です。<br />OpenProcessingやp5.js
        web editor、自分のWebサイトなど、あなたのスケッチ・作品を共有してPCD
        Japanを盛り上げましょう！
      </p>
    </div>
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
    color $white_fff
    text-align center
    margin-top $margin_48

    .title
      font-size $font_size_36

    .description
      font-size $font_size_14
      line-height 2.4rem
      margin-top $margin_20

  .artSubmissionButton
    margin-top $margin_80
</style>
