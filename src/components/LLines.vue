<template>
  <div class="l-line-wrapper" ref="l_line" data-aos="fade-up" :class="{'light': light}">
    <div class="l-line-left"></div>
    <div class="l-line-right"></div>

    <div class="l-line-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import anime from "animejs/lib/anime";
import {Prop} from "vue-property-decorator";

@Component({
  components: {},
})
export default class LLines extends Vue {
  @Prop({type: Boolean, default: false})
  light!: boolean

  $refs !: {
    l_line: HTMLElement & { startAnimation: () => void }
  }

  startAnimation() {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    })

    tl.add({
      targets: this.$refs.l_line.querySelector(".l-line-left"),
      left: "50%",
    }, 300)

    tl.add({
      targets: this.$refs.l_line.querySelector(".l-line-right"),
      right: "50%"
    }, 300)

    tl.add({
      targets: this.$refs.l_line.querySelector(".l-line-content"),
      opacity: 1,
      scale: [.8, 1]
    })
  }

  mounted() {
    this.$refs.l_line.startAnimation = this.startAnimation
  }
}
</script>
