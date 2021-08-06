<template>
  <button :type="submit ? 'submit' : 'button'" class="btn" :class="[type, size]" @click="$emit('click', $event)"
          :disabled="loading">

    {{ text }}
    <i class="fas ms-2" :class="icon" v-if="icon && !loading"></i>

    <div class="spinner-border spinner-border-sm ms-2" role="status" v-if="loading">
      <span class="visually-hidden">Loading...</span>
    </div>

  </button>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Component({
  components: {},
})
export default class Button extends Vue {
  @Prop({type: String, default: "btn-primary"})
  type!: string

  @Prop({type: String})
  size!: string

  @Prop({type: String})
  text!: string

  @Prop({type: String})
  icon!: string

  @Prop({type: Boolean})
  submit!: boolean

  @Prop({type: Boolean})
  loading!: boolean
}
</script>
