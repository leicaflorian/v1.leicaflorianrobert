<template>
  <h1 class="text">
  </h1>
</template>

<script lang="ts">
import {TextScrambler as TextScramblerClass} from "@/functions/TextScrampler";
import {defineComponent, PropType} from "vue";

export default defineComponent({
  name: "TextScrambler",
  props: {
    phrases: {
      type: Array as PropType<string[]>,
      required: true
    },
    duration: {
      type: Number,
      default: 1500
    },
    delay: {
      type: Number,
      default: 0
    },
    start: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      counter: 0,
      fx: {} as TextScramblerClass
    }
  },
  methods: {
    next() {
      this.fx?.setText(this.phrases[this.counter]).then(() => {
        setTimeout(this.next, this.duration)
      })

      this.counter = (this.counter + 1) % this.phrases.length
    }
  },
  watch: {
    "start": {
      handler: function (value: Boolean) {
        if (value) {
          this.next()
        }
      }
    }
  },
  mounted() {
    const el: HTMLElement = document.querySelector('.text') as HTMLElement
    this.fx = new TextScramblerClass(el)

    if (this.start) {
      setTimeout(this.next, this.delay)
    }
  }

})
</script>

<style scoped lang="scss">
.text::v-deep {
  font-family: 'Lucida Console', monospace;

  .dud {
    color: rgba(255, 255, 255, .4) !important;
  }
}

</style>
