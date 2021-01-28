<template>
  <div class="artDetailPage">
    <ArtItem :art="art" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Art } from '~/types/entity'
import { HeadMetaInfo } from '~/headMetaInfo'
import ArtItem from '~/components/ArtItem.vue'
@Component({
  components: { ArtItem },
  head() {
    const _this = this as any
    return new HeadMetaInfo({
      url: `https://https://pcd-tokyo-gallery.vercel.app/art/${_this.artId}`,
      imageUrl: _this.imageUrl,
      twitterCardType: 'summary',
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
  .artItem
    max-width 500px
</style>
