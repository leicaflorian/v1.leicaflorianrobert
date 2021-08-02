<template>
  <div class="pages-container">
    <Home></Home>

    <div class="horizontal-container-wrapper">
      <NavBar></NavBar>

      <div class="horizontal-container ">
        <About data-anchor="about"></About>
        <Services data-anchor="services"></Services>
        <Curriculum data-anchor="curriculum"></Curriculum>
        <Contact data-anchor="contact"></Contact>
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
// @ts-ignore
//import Pageable from "pageable/dist/pageable.min";

@Component({
  components: {NavBar, Services, Home, About, Curriculum, Contact},
})
export default class App extends Vue {
  mounted() {
  /*  const mainScrollInstance = new Pageable('.horizontal-container', {
      navigation: true,
      pips: false,
      orientation: "horizontal",
      sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
    });

    console.log(mainScrollInstance)*/
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main";
</style>
