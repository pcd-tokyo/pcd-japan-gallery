<template>
  <div
    v-if="isBackgroundImage"
    class="imageView"
    :style="{ backgroundImage: `url(${src})` }"
  >
    <slot></slot>
  </div>
  <img v-else class="imageView" :src="src" :alt="alt" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class ImageView extends Vue {
  @Prop({ default: '' }) private src!: string
  @Prop({ default: '' }) private alt!: string
  @Prop({ default: false }) private isBackgroundImage!: boolean
}
</script>
