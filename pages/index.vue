<template>
  <div class="topPage">
    <h1>Hello, PCD Tokyo!!</h1>
    <div>
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
.topPage
  h1
    color red
    text-align center
</style>
