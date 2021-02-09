<template>
  <div class="artDetailPage" :class="{ sp: $device.isMobileOrTablet }">
    <Header />
    <div class="artContainer">
      <a class="imageContainer" :href="art.url" target="_blank">
        <ImageView
          v-if="art.thumbnail"
          class="thumbnail"
          :src="art.thumbnail"
          :alt="art.title"
          :is-background-image="true"
        />
      </a>
      <div class="infoContainer">
        <p class="title">
          <span>{{ art.title }}</span>
        </p>
        <div class="userNameContainer">
          <span>by</span>
          <p class="userName">{{ art.user.name }}</p>
        </div>
        <p v-if="art.description" class="description">{{ art.description }}</p>
        <DateView class="createdAt" :date="art.createdAt" />
        <div class="artUrlContainer">
          <a :href="art.url" target="_blank">作品を見る</a>
        </div>
      </div>
    </div>
    <ArtSubmissionButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Art } from '~/types/entity'
import { HeadMetaInfo } from '~/headMetaInfo'
import ArtItem from '~/components/ArtItem.vue'
import ImageView from '~/components/ImageView.vue'
import DateView from '~/components/DateView.vue'
import Header from '~/components/Header.vue'
import ArtSubmissionButton from '~/components/ArtSubmissionButton.vue'
@Component({
  components: { ArtSubmissionButton, Header, DateView, ImageView, ArtItem },
  head() {
    const _this = this as any
    return new HeadMetaInfo({
      title: _this.art.title,
      description: _this.art.description,
      url: `${process.env.BASE_URL}/art/${_this.artId}`,
      imageUrl: _this.imageUrl,
    }).getMeta()
  },
})
export default class ArtDetailPage extends Vue {
  async fetch({ store, params }) {
    const id = parseInt(params.id)
    await store.dispatch('art/detail/fetch', id)
  }

  private get art(): Art {
    return this.$store.state.art.detail.art
  }

  private get artId(): number {
    return parseInt(this.$route.params.id)
  }

  private get imageUrl(): string {
    return this.art.thumbnail
  }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.artDetailPage
  .artContainer
    display flex
    max-width $contents_width
    margin 0 auto
    margin-top $margin_48

    .imageContainer
      width 400px
      max-width 400px
      display block
      position relative

      &::before
        content ''
        display block
        padding-top 100%

      .thumbnail
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        display block
        background-position 50%
        background-repeat no-repeat
        background-size cover
        background-color #ddd

    .infoContainer
      flex 1
      background-color $white_fff
      padding $padding_16

      .title
        font-size $font_size_48
        font-weight $font_weight_bold

      .userNameContainer
        display flex
        font-size $font_size_12

        .userName
          margin-left $margin_4

      .description
        font-size $font_size_12
        margin-top $margin_8

      .createdAt
        color $gray_aaa
        font-size $font_size_12
        margin-top $margin_8

      .artUrlContainer
        text-align center
        margin-top $margin_20

        a
          display block
          padding $padding_12
          background-color $black_222
          color $white_fff
          font-size $font_size_16
          text-decoration none
  .artSubmissionButton
    margin-top $margin_80

  &.sp
    .artContainer
      flex-direction column

      .imageContainer
        width 100%
        max-width 100%
</style>
