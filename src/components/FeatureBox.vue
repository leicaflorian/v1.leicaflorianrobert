<template>
  <div class="card">
    <div class="card-icon mb-4">
      <LLines>
        <i class="fas fa-3x text-primary" :class="icon"></i>
      </LLines>
    </div>

    <div class="card-body">
      <h4 class="card-title fw-bold" data-aos="fade-up">{{ title }}</h4>
      <p class="card-text mb-0 text-muted" v-html="text" data-aos="fade-up" data-aos-delay="300"></p>
    </div>
  </div>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";
import LLines from "@/components/LLines.vue";

@Component({
  components: {LLines},
})
export default class FeatureBox extends Vue {
  @Prop({type: String})
  icon!: string

  @Prop({type: String})
  title!: string

  @Prop({type: String})
  text!: string
}
</script>

<style lang="scss">
@import "../assets/scss/partials/variables";

.card-icon {
  position: relative;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    position: relative;
  }

  /*&:before {
    content: "";
    position: absolute;
    width: 90px;
    height: 90px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $color-primary;
    background-color: var(--primary);
    border-radius: 50%;
    z-index: 0;
  }*/
}
</style>
