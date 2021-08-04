<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark" id="main_navbar"
         :style="style">
      <div class="container">
        <a class="navbar-brand d-none" href="#" @click.prevent="onHomeClick">
          <img src="logo_navbar.svg" alt="Logo Leica Florian Robert" height="50" class="d-inline-block">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                ref="navbarToggler">
          <!--          <span class="navbar-toggler-icon"></span>
                    <span class="fas fa-times text-primary navbar-toggler-close-icon" style="display: none"> </span>-->

          <div class="navTrigger">
            <i></i><i></i><i></i>
          </div>

          <span class="l-line-left"></span>
          <span class="l-line-right"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" ref="navbarCollapse">
          <ul class="navbar-nav ml-auto mb-2 mb-md-0 w-100">
            <li class="nav-item nav-item-logo d-md-none py-2">
              <a class="nav-item" href="#" @click.prevent="onHomeClick">
                <img src="logo_navbar.svg" alt="Logo Leica Florian Robert" height="50" class="d-inline-block">
              </a>
            </li>

            <template v-for="(menu, i) in menuList" :key="i">
              <li class="nav-item nav-item-logo d-none d-md-flex" v-if="i === 2" :class="{active: i === 0}">
                <a class="nav-item" :class="{active: i === 0}" href="#" @click.prevent="onHomeClick">
                  <img src="logo_navbar.svg" alt="Logo Leica Florian Robert" height="50" class="d-inline-block">
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" :href="menu.link" @click.prevent="onLinkClick(menu.link)">{{
                    $t("menu." + menu.id)
                  }}</a>
              </li>
            </template>
          </ul>
          <div class="nav-item-mobile-borders d-md-none">
            <span class="l-line-left"></span>
            <span class="l-line-right"></span>
          </div>
          <div class="nav-line d-none d-md-block"></div>
        </div>

      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {menuList} from "@/functions/MenuList";
import anime from "animejs/lib/anime";
import {Prop} from "vue-property-decorator";

@Component({
  components: {},
})
export default class NavBar extends Vue {
  @Prop({type: Boolean})
  addShadow!: boolean

  public menuList = menuList;
  horizontalContainer: HTMLElement | null = null;
  pagesContainer: HTMLElement | null = null;
  mainNavbar: HTMLElement | null = null;
  mainNavbarLinks: NodeList | null = null;
  mainNavbarLine: HTMLElement | null = null;
  mainNavbarItemMobileBorders: HTMLElement | null = null;

  $refs!: {
    navbarToggler: HTMLElement
    navbarCollapse: HTMLElement
  }

  get style() {
    return {
      "box-shadow": this.addShadow ? '0 0 11px rgb(0 0 0 / 50%)' : '0 0 0 rgb(0 0 0 / 50%)'
    }
  }

  onLinkClick(link: string) {
    const container: HTMLElement | any = this.horizontalContainer?.querySelector<HTMLElement>("[data-anchor='" + link + "']");

    if (container && this.horizontalContainer) {
      const currentActive: HTMLElement = this.horizontalContainer.querySelector(".page.active") as HTMLElement

      if (currentActive) {
        if (currentActive.dataset.anchor === link) {
          return
        }

        currentActive.classList.remove("active")
      }

      setTimeout(() => {
        this.horizontalContainer?.scrollTo({left: container.offsetLeft, behavior: "smooth"})
        this.setActiveItem(link)

        setTimeout(() => {
          container.classList.add("active")
        }, 200)
      }, 200)
    }
  }

  onHomeClick() {
    if (this.horizontalContainer) {
      this.horizontalContainer.scrollTo({left: 0, behavior: "smooth"});
      (this.horizontalContainer.parentNode as HTMLElement).classList.remove("active");
    }

    if (this.pagesContainer) {
      this.pagesContainer.scrollTo({top: 0, behavior: "smooth"});
      this.pagesContainer.querySelector('.page-home')?.classList.add("active")
    }

    this.setActiveItem("about")

  }

  onMenuOpen() {
    const tl = anime.timeline({
      easing: "easeOutQuart",
      duration: 400
    })

    this.$refs.navbarToggler.querySelector(".navTrigger")?.classList.add("active")

    tl.add({
      targets: this.$refs.navbarToggler.querySelector(".l-line-left"),
      left: "-50%"
    }, 400)

    tl.add({
      targets: this.$refs.navbarToggler.querySelector(".l-line-right"),
      right: "-50%",
    }, 400)

    tl.add({
      targets: this.$refs.navbarToggler.querySelector(".navTrigger"),
      opacity: [1, 0, 1],
      duration: 800,
      direction: "alternate"
    }, 0)

  }

  onMenuOpened() {
    this.refreshLinesPosition()

    setTimeout(() => {
      if (this.mainNavbarItemMobileBorders) {
        this.mainNavbarItemMobileBorders.style.opacity = "1";
      }
    }, 400)

  }

  onMenuClose() {
    const tl = anime.timeline({
      easing: "easeOutQuart",
      duration: 400
    })

    this.$refs.navbarToggler.querySelector(".navTrigger")?.classList.remove("active")

    tl.add({
      targets: this.$refs.navbarToggler.querySelector(".l-line-left"),
      left: "50%"
    }, 400)

    tl.add({
      targets: this.$refs.navbarToggler.querySelector(".l-line-right"),
      right: "50%"
    }, 400)

    tl.add({
      targets: this.$refs.navbarToggler.querySelector(".navTrigger"),
      opacity: [1, 0, 1],
      duration: 800,
      direction: "alternate"
    }, 0)

    if (this.mainNavbarItemMobileBorders) {
      this.mainNavbarItemMobileBorders.style.opacity = "0";
    }
  }

  onMenuClosed() {

  }

  setActiveItem(link: string) {
    let target: HTMLLinkElement | null = null

    if (!this.mainNavbarLine || !this.mainNavbarItemMobileBorders) {
      return
    }

    this.mainNavbarLinks?.forEach((el: Node) => {
      const navLink: HTMLLinkElement = el as HTMLLinkElement
      const href = navLink.getAttributeNode("href")?.nodeValue;

      if (href && href === link) {
        target = navLink as HTMLLinkElement;

        (navLink.parentNode as HTMLElement).classList.add("active")
        navLink.classList.add("active")
      } else {
        (navLink.parentNode as HTMLElement).classList.remove("active")
        navLink.classList.remove("active")
      }
    })

    if (!target) {
      return;
    }

    const position = this.calcPosition(target, true);

    this.mainNavbarLine.style.left = position.left.toString() + "px";
    this.mainNavbarLine.style.width = position.width.toString() + "px";

    const tl = anime.timeline({
      duration: 800,
      easing: "easeInOutExpo"
    })


    tl.add({
      targets: this.mainNavbarItemMobileBorders.querySelector(".l-line-left"),
      width: ["40%", "0", "3px", "40%"],
      direction: 'alternate',
      easing: 'easeInOutSine',
      update: (anim: any) => {
        const percent = Math.round(anim.progress);

        if (percent === 50) {

          if (!this.mainNavbarItemMobileBorders) {
            return;
          }

          this.mainNavbarItemMobileBorders.style.top = position.top + "px";
          this.mainNavbarItemMobileBorders.style.height = position.height + "px";
        }
      },
      complete: () => {
        if (this.$refs.navbarToggler.getAttribute("aria-expanded") === "true") {
          this.$refs.navbarToggler.click()
        }
      }
    }, 0)
    tl.add({
      targets: this.mainNavbarItemMobileBorders.querySelector(".l-line-right"),
      width: ["40%", "0", "3px", "40%"],
      direction: "alternate",
    }, 0)

  }

  calcPosition(target: HTMLElement, useParent = false) {
    const parent: HTMLElement = target.parentNode as HTMLElement;

    const linkLeft = (useParent ? parent : target).offsetLeft;
    const linkTop = (useParent ? parent : target).offsetTop;
    const linkWidth = target.clientWidth;
    const linkHeight = target.clientHeight;

    return {
      left: linkLeft,
      top: linkTop,
      width: linkWidth,
      height: linkHeight,
    }
  }

  refreshLinesPosition() {
    const activePage = this.mainNavbar?.querySelector(".nav-item.active");

    if (!this.mainNavbarLine || !this.mainNavbarItemMobileBorders || !activePage) {
      return
    }

    const position = this.calcPosition(activePage as HTMLElement);

    this.mainNavbarLine.style.left = position.left.toString() + "px";
    this.mainNavbarLine.style.width = position.width.toString() + "px";
    this.mainNavbarItemMobileBorders.style.top = position.top + "px";
    this.mainNavbarItemMobileBorders.style.height = position.height + "px";

  }

  mounted() {
    this.horizontalContainer = document.querySelector<HTMLElement>(".horizontal-container")
    this.pagesContainer = document.querySelector<HTMLElement>(".pages-container")
    this.mainNavbar = document.getElementById("main_navbar") as HTMLElement;
    this.mainNavbarLinks = this.mainNavbar.querySelectorAll(".nav-link") as NodeList;
    this.mainNavbarLine = this.mainNavbar.querySelector(".nav-line") as HTMLElement;
    this.mainNavbarItemMobileBorders = this.mainNavbar.querySelector(".nav-item-mobile-borders") as HTMLElement;

    this.$refs.navbarCollapse.addEventListener("show.bs.collapse", () => this.onMenuOpen())
    this.$refs.navbarCollapse.addEventListener("shown.bs.collapse", () => this.onMenuOpened())
    this.$refs.navbarCollapse.addEventListener("hide.bs.collapse", () => this.onMenuClose())
    this.$refs.navbarCollapse.addEventListener("hidden.bs.collapse", () => this.onMenuClosed())

    window.addEventListener("resize", () => {
      this.refreshLinesPosition();
    })
  }
}
</script>
