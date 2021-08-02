<template>
  <div class="skill-level">
    <p class="text-start mb-2 fs-6">{{ title }} <span class="float-end">{{ percent }}%</span></p>

    <div class="progress">
      <div class="progress-bar" role="progressbar" :style="`width: ${ percent }%`" :aria-valuenow="percent"
           aria-valuemin="0"
           aria-valuemax="100"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Component({
  components: {},
})
export default class SkillLevel extends Vue {
  @Prop({type: Number, default: 0})
  percent!: number

  @Prop({type: String})
  title!: string
}
</script>

<style lang="scss">

</style>
