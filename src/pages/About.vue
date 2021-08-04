<template>
  <section class="page" id="about">

    <div class="container">
      <PageTitle identifier="about"></PageTitle>

      <div class="row align-items-lg-center">
        <div class="col-md-8">
          <h3 class="text-start mb-3" data-aos="fade-right" data-aos-delay="200">
            {{ $t("about.hi") }}
            <strong class="border-bottom border-5 text-primary">
              Florian Leica</strong>
          </h3>
          <p class="lead text-start" v-html="$t('about.content')" data-aos="fade-right" data-aos-delay="400"></p>
        </div>

        <div class="col mt-5 mt-md-0">
          <div class="exp_years_wrapper">
            <div class="exp_years">
              <LLines>
                <span>{{ anniEsperienza }}</span>
              </LLines>
            </div>
            <h3 v-html="$t('about.year_experience')" data-aos="fade-up" data-aos-delay="600"></h3>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {menuList} from "@/functions/MenuList";
import PageTitle from "@/components/PageTitle.vue";
import LLines from "@/components/LLines.vue";

@Component({
  name: "About",
  components: {LLines, PageTitle},
})
export default class About extends Vue {
  get color() {
    return menuList.find(el => el.id === "about")?.bg_color;
  }

  get anniEsperienza() {
    return new Date().getFullYear() - new Date("2009-01-01").getFullYear()
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";

.exp_years_wrapper {
  display: flex;
  flex-direction: column;
  position: relative;

  .exp_years {
    font-weight: 600;
    font-size: 144px;
    position: relative;
    color: $primary;
    height: 216px;
    line-height: 134px;

    span {
      position: relative;
      /*top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

     !* &:first-child{
        font-weight: 800;
      }*!*/
    }

    /*&:before {
      content: "";
      position: absolute;
      width: 140px;
      height: 140px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: solid 4px $secondary;
      border-radius: 50%;
      z-index: 0;
    }*/
  }
}
</style>
