<template>
  <div class="topPage">
    <h1>Hello, PCD Tokyo!!</h1>
    <div class="artsContainer">
      <ArtItem v-for="(item, i) in arts" :key="i" :art="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Art } from '~/types/entity'
import ArtItem from '~/components/ArtItem.vue'
@Component({
  components: { ArtItem },
})
export default class TopPage extends Vue {
  async fetch({ store }) {
    await store.dispatch('art/fetch')
  }

  private get arts(): Art[] {
    return this.$store.state.art.items
  }
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.topPage
  h1
    color red
    text-align center

  .artsContainer
    max-height 600px
    display grid
    grid-template-columns repeat(auto-fill, minmax(200px, 1fr))
    grid-column-gap $margin_8
    grid-row-gap $margin_8
    box-sizing border-box
    margin-top $margin_20
</style>
