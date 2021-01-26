<template>
  <div class="date">
    {{ formattedDate }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({
  components: {},
})
export default class DateView extends Vue {
  @Prop({ required: true }) private date!: string
  @Prop({ default: 'YYYY.MM.DD（dd）' }) private formatStyle!: string

  private get formattedDate(): string {
    return this.$dayjs(this.date).format(this.formatStyle)
  }
}
</script>
