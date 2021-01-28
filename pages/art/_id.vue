<template>
  <div class="artDetailPage">
    <div class="container">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Art } from '~/types/entity'
import { HeadMetaInfo } from '~/headMetaInfo'
import ArtItem from '~/components/ArtItem.vue'
import ImageView from '~/components/ImageView.vue'
import DateView from '~/components/DateView.vue'
@Component({
  components: { DateView, ImageView, ArtItem },
  head() {
    const _this = this as any
    return new HeadMetaInfo({
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
  padding-top $padding_20

  .container
    display flex
    max-width 800px
    margin 0 auto

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
      padding $padding_8 $padding_12

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
</style>
