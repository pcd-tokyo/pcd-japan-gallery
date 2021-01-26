<template>
  <div class="artItem">
    <img
      v-if="art.thumbnail"
      class="thumbnail"
      :src="art.thumbnail"
      :alt="art.title"
    />
    <div class="infoContainer">
      <p>{{ art.title }}</p>
      <p v-if="art.description">{{ art.description }}</p>
      <DateView :date="art.createdAt" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Art } from '~/types/entity'
import DateView from '~/components/DateView.vue'
@Component({
  components: { DateView },
})
export default class ArtItem extends Vue {
  @Prop({ required: true }) private art!: Art
}
</script>

<style scoped lang="stylus">
.artItem
  padding 10px

  .thumbnail
    height 200px
</style>
