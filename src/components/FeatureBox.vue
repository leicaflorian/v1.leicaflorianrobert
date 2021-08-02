<template>
  <div class="card">
    <div class="card-icon mb-4">
      <i class="fas fa-3x text-white" :class="icon"></i>
    </div>

    <div class="card-body">
      <h4 class="card-title fw-bold">{{title}}</h4>
      <p class="card-text mb-0 text-muted" v-html="text"></p>
    </div>
  </div>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Component({
  components: {},
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

  i {
    position: relative;
  }

  &:before {
    content: "";
    position: absolute;
    width: 90px;
    height: 90px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $color-primary;
    border-radius: 50%;
    z-index: 0;
  }
}
</style>
