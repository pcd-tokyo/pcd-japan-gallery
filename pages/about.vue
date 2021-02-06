<template>
  <div class="aboutPage">
    <Header />
    <div class="container">
      <h2 class="title">PCD Japan Galleryについて</h2>
      <p class="description">
        本サイトは<a href="https://pcd-tokyo.github.io/" target="_blank"
          >PCD Japan 2021</a
        >に合わせて開催されるオンラインギャラリーで、クリエイターが投稿したスケッチ・作品を閲覧できます。
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
export default class AboutPage extends Vue {}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.aboutPage
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
