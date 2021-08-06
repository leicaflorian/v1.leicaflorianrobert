<template>
  <section class="page page-home" id="home">
    <div class="container position-relative">
      <div class="main-logo-tilt w-100">
        <MainLogo ref="mainLogo" ></MainLogo>
      </div>

      <div class="scroll-down-wrapper">
        <span class="scroll-down-line"></span>

        <i class="fas fa-chevron-up scroll-down-icon"></i>

        <h6 class="scroll-down-text">
          <span class="scroll-down-text-span">{{ $t("home.scroll") }}</span>
        </h6>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import LLines from "@/components/LLines.vue";
import MainLogo from "@/components/MainLogo.vue";
import anime from "animejs/lib/anime";
import VanillaTilt from "vanilla-tilt";

@Component({
  name: "Home",
  components: {
    LLines, MainLogo
  },
})
export default class Home extends Vue {

  $refs!: {
    mainLogo: typeof MainLogo
  }

  animateScrollDownArrow() {
    const initialDelay = 6000;

    const tl = anime.timeline({
      easing: "easeInOutExpo",

      delay: initialDelay
    })

    tl.add({
      targets: ".scroll-down-wrapper .scroll-down-line",
      height: [0, "88%"]
    })

    tl.add({
      targets: ".scroll-down-wrapper .scroll-down-icon",
      bottom: [0, "90%"],
      translateY: ["100%", "0px"],
      easing: "easeOutElastic",
      complete() {
        const target = this.animatables[0].target;

        anime({
          targets: target,
          duration: 1000,
          easing: "linear",
          translateY: [0, 10, -10, 10, -10, 0],
          loop: true,
          delay: 5000
        })
      }
    }, "-=" + (initialDelay + 500))

    tl.add({
      targets: ".scroll-down-wrapper .scroll-down-text-span",
      opacity: [0, 1],
      translateX: ["-100%", "0"],
      easing: "easeOutElastic",
      duration: 1000,
      complete() {
        const target = this.animatables[0].target.parentNode;

        anime({
          targets: target,
          duration: 1000,
          easing: "linear",
          translateY: [0, 10, -10, 10, -10, 10, -10, 0],
          loop: true,
          delay: 7000
        })
      }
    }, "-=" + (initialDelay))
  }

  mounted() {
    this.animateScrollDownArrow()

    VanillaTilt.init(document.querySelector(".main-logo-tilt") as HTMLElement, {

    })

    VanillaTilt.init(document.querySelector(".scroll-down-wrapper") as HTMLElement, {

    })
  }
}
</script>

<style lang="scss">
@import "../assets/scss/partials/variables";

.scroll-down-wrapper {
  position: fixed;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .scroll-down-line {
    height: calc(var(--vh-1) * 90);
    width: 2px;
    background-color: white;
    bottom: 0;
    position: absolute;
  }

  .scroll-down-icon {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    left: -8px;
  }

  .scroll-down-text {
    display: flex;
    align-items: center;
    position: absolute;
    left: 2px;
    padding-left: 16px;
    padding-right: 16px;
    top: calc(var(--vh-1) * 15);
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
  }
}

</style>
