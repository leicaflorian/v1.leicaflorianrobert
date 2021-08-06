<template>
  <div class="pages-container" ref="pagesContainer">
    <Home class="active"></Home>

    <div class="horizontal-container-wrapper">
      <NavBar ref="navbar" :add-shadow="navbarAddShadow"></NavBar>

      <div class="horizontal-container" ref="horizontalContainer">
        <About data-anchor="about" class="section"></About>
        <Services data-anchor="services" class="section"></Services>
        <Curriculum data-anchor="curriculum" class="section"></Curriculum>
        <Contact data-anchor="contact" class="section"></Contact>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Services from "@/pages/Services.vue";
import Curriculum from "@/pages/Curriculum.vue";
import Contact from "@/pages/Contact.vue";
import NavBar from "@/components/NavBar.vue";
import "../node_modules/bootstrap/js/src/collapse";
import "./functions/ColorChanging"

@Component({
  components: {NavBar, Services, Home, About, Curriculum, Contact},
})
export default class App extends Vue {
  navbarAddShadow: boolean = false

  $refs!: {
    navbar: NavBar,
    pagesContainer: HTMLElement
    horizontalContainer: HTMLElement
  }

  initIntersectionObserver() {

    let options = {
      root: null, // relative to document viewport
      rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: .2 // visible amount of item shown in relation to root
    };

    let observer = new IntersectionObserver(onChange, options);
    let elementsToAnimate: NodeList = document.querySelectorAll('[data-aos]');


    function onChange(changes: any[]) {
      changes.forEach(change => {
        const target: HTMLElement = change.target as HTMLElement;

        if (change.intersectionRatio > 0 && !target.dataset.intersected) {
          const animation = target.dataset.aos;

          target.dataset.intersected = "true";

          //const delay = target.dataset.aosDelay;

          if (animation) {
            target.classList.add(animation, "aos-animate")

            if ("startAnimation" in target) {
              setTimeout(function () {
                // @ts-ignore
                target.startAnimation();
              }, 400)
            }
          }
          //navbar?.classList.add("animate__fadeInUp", "animate__fast")
        }
      });
    }

    elementsToAnimate.forEach((el: Node) => {
      const target = el as HTMLElement

      target.classList.add("aos-init")

      observer.observe(target);

    })
  }

  scrollToHorizontalContainer() {
    this.$refs.pagesContainer.scrollTo({top: this.$refs.pagesContainer.scrollHeight, behavior: 'smooth'})
    this.$refs.navbar.setActiveItem("about");

    this.$refs.pagesContainer.querySelector('.page-home')?.classList.remove("active")

    if (this.$refs.horizontalContainer) {
      (this.$refs.horizontalContainer.parentNode as HTMLElement).classList.add("active");
      this.$refs.horizontalContainer.querySelector(".page")?.classList.add("active")
    }
  }

  mounted() {
    this.initIntersectionObserver()

    const horizontalContainer = document.querySelector<HTMLElement>(".horizontal-container")

    this.$refs.pagesContainer.addEventListener("wheel", (e: any) => {
      if (e.currentTarget.scrollTop < e.currentTarget.offsetHeight && e.deltaY > 0) {
        this.scrollToHorizontalContainer();
      }
    })

    this.$refs.pagesContainer.querySelector(".page-home")?.addEventListener('swiped-up', (e) => {
      console.log(e)
      this.scrollToHorizontalContainer();
    })

    horizontalContainer?.querySelectorAll(".page").forEach((el) => {
      el.addEventListener("scroll", () => {
        this.navbarAddShadow = el.scrollTop > 0
      })
    })

    window.addEventListener("resize", () => {
      if (!horizontalContainer) {
        return
      }

      setTimeout(() => {
        const activeElement: HTMLElement = horizontalContainer.querySelector(".page.active") as HTMLElement;

        if (activeElement) {
          horizontalContainer.scrollLeft = activeElement.offsetLeft
        }

        if ((horizontalContainer.parentNode as HTMLElement).classList.contains("active")) {
          console.log(this.$refs.pagesContainer.offsetHeight)
          this.$refs.pagesContainer.scrollTop = this.$refs.pagesContainer.offsetHeight
        }
      }, 50)

    })


  }
}
</script>

<style lang="scss">
@import "./assets/scss/main";
</style>
