<template>
  <section class="page page-home" id="home">
    <div class="container position-relative">
      <MainLogo></MainLogo>

      <div class="scroll-down-wrapper">
        <span class="scroll-down-line"></span>

        <i class="fas fa-chevron-down scroll-down-icon"></i>

        <h6 class="scroll-down-text">
<!--          <span class="scroll-down-text-span">{{ $t("home.scroll") }}</span>-->
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

@Component({
  name: "Home",
  components: {
    LLines, MainLogo
  },
})
export default class Home extends Vue {

  animateScrollDownArrow() {
    const initialDelay = 6000;

    const tl = anime.timeline({
      easing: "easeInOutExpo",

      delay: initialDelay
    })

    tl.add({
      targets: ".scroll-down-wrapper .scroll-down-line",
      height: [0, "85vh"]
    })

    tl.add({
      targets: ".scroll-down-wrapper .scroll-down-icon",
      top: [0, "90vh"],
      translateY: ["-100%", "0px"],
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

    /*tl.add({
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
          delay: 10000
        })
      }
    }, "-=" + (initialDelay))*/
  }

  mounted() {
    this.animateScrollDownArrow()
  }
}
</script>

<style lang="scss">
@import "../assets/scss/partials/variables";

.scroll-down-wrapper {
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .scroll-down-line {
    height: 90vh;
    width: 2px;
    background-color: white;
  }

  .scroll-down-icon {
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    left: -8px;
  }

  .scroll-down-text {
    display: flex;
    align-items: center;
    position: absolute;
    left: 2px;
    padding-left: 16px;
    padding-right: 16px;
    bottom: 15vh;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
  }
}

</style>
