<template>
  <div class="skill-level">
    <p class="text-start mb-2 fs-6">{{ title }} <span class="float-end" ref="progressBarLabel">{{ value }}%</span></p>

    <div class="progress">
      <div class="progress-bar" role="progressbar" :style="`width: ${ value }%`" :aria-valuenow="value"
           ref="progressBar"
           data-aos="fade-in"
           aria-valuemin="0"
           aria-valuemax="100"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

import anime from "animejs/lib/anime"

@Component({
  components: {},
})
export default class SkillLevel extends Vue {
  @Prop({type: Number, default: 0})
  percent!: number

  @Prop({type: String})
  title!: string

  value: number = 0

  $refs!: {
    progressBar: HTMLElement  & { startAnimation: () => void }
    progressBarLabel: HTMLElement
  }

  startAnimation() {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1500
    });

    tl.add({
      targets: this,
      round: 1,
      value: this.percent,
    })
  }

  mounted() {
    this.$refs.progressBar.startAnimation = this.startAnimation;
  }
}
</script>

<style lang="scss">

</style>
