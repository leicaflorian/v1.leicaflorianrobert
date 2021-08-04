<template>
  <div class="mb-4" ref="formInput" data-aos="fade-in">
    <label :for="name + 'Input'" class="form-label" v-html="label" data-aos="fade-left" data-aos-delay="1000"></label>

    <div class="mb-4 position-relative" ref="input_group" :class="{'input-group': inputGroup}" >
      <span class="input-group-text" data-aos="fade-right" data-aos-delay="1200" v-if="inputGroup">
        <i class="fas" :class="icon" v-if="icon"></i>
      </span>

      <div :class="{'input-group-content': inputGroup}" data-aos="fade-in" data-aos-delay="1400">
        <textarea v-if="type === 'textarea'"
                  class="form-control"
                  :id="name + 'Input'"
                  :placeholder="placeholder"
                  :name="name"
                  @focusin="onFocusIn"
                  @focusout="onFocusOut"
                  v-model="inputValue"
                  rows="3"></textarea>

        <input v-else
               class="form-control"
               :type="type"
               :id="name + 'Input'"
               :placeholder="placeholder"
               :name="name"
               @focusin="onFocusIn"
               @focusout="onFocusOut"
               v-model="inputValue"
        >
      </div>


      <div class="l-line-left"></div>
      <div class="l-line-right"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {Prop, Watch} from "vue-property-decorator";

import anime from "animejs/lib/anime";

@Component({
  name: "FormInput",
  components: {},
})
export default class FormInput extends Vue {
  @Prop({type: String, default: "text"})
  type!: string

  @Prop({type: String})
  name!: string

  @Prop({type: String})
  label!: string

  @Prop({type: String})
  placeholder!: string

  @Prop({type: String})
  icon!: string

  @Prop({type: String})
  modelValue!: string

  @Prop({type: Boolean})
  inputGroup!: boolean

  inputValue: string = this.modelValue ?? ""

  $refs!: {
    input_group: HTMLElement
    formInput: HTMLElement & { startAnimation: () => void }
  }

  onFocusIn() {
    this.$refs.input_group.classList.add("focus")
  }

  onFocusOut() {
    if (!this.inputValue) {
      this.$refs.input_group.classList.remove("focus")
    }
  }

  @Watch("inputValue")
  onValueChange(value: string) {
    this.$emit("update:modelValue", value)
  }

  startAnimation() {
    const tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 1000
    })

    tl.add({
      targets: this.$refs.formInput.querySelector(".l-line-left"),
      right: 0,
      width: 60
    }, 500)

    tl.add({
      targets: this.$refs.formInput.querySelector(".l-line-right"),
      width: 60
    }, 500)
  }

  mounted() {
    this.$refs.formInput.startAnimation = this.startAnimation
  }
}
</script>
