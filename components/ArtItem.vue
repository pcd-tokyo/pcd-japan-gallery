<template>
  <div class="artItem">
    <n-link
      class="imageContainer"
      :to="{ name: 'art-id', params: { id: art.id } }"
    >
      <ImageView
        v-if="art.thumbnail"
        class="thumbnail"
        :src="art.thumbnail"
        :alt="art.title"
        :is-background-image="true"
      />
    </n-link>
    <div class="infoContainer">
      <p class="title">
        <n-link :to="{ name: 'art-id', params: { id: art.id } }">{{
          art.title
        }}</n-link>
      </p>
      <div class="userNameContainer">
        <span>by</span>
        <p class="userName">{{ art.user.name }}</p>
      </div>
      <p v-if="art.description" class="description">{{ art.description }}</p>
      <DateView class="createdAt" :date="art.createdAt" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Art } from '~/types/entity'
import DateView from '~/components/DateView.vue'
import ImageView from '~/components/ImageView.vue'
@Component({
  components: { ImageView, DateView },
})
export default class ArtItem extends Vue {
  @Prop({ required: true }) private art!: Art
}
</script>

<style scoped lang="stylus">
@require '~@/assets/style/variables'
@require '~@/assets/style/mixin'

.artItem
  .imageContainer
    width 100%
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
    margin-top $margin_8
    padding 0 $padding_4

    .title
      font-size $font_size_16
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
</style>
