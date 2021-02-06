<template>
  <div class="artSubmissionButton">
    <a :href="url" target="_blank">スケッチ・作品を投稿する</a>
    <p class="caption">誰でも無料で投稿でき、こちらのサイトに掲載されます。</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class ArtSubmissionButton extends Vue {
  private get url(): string {
    return `${process.env.SUBMIT_FORM_URL}`
  }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.artSubmissionButton
  text-align center

  a
    display inline-block
    padding $padding_20 $padding_40
    background-color $accent_color
    color $white_fff
    font-size $font_size_16
    font-weight $font_weight_bold

  .caption
    font-size $font_size_12
    color $white_fff
    margin-top $margin_12
</style>
