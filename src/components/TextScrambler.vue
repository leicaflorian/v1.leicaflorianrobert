<template>
  <h1 class="text" id="text-container">
    testo statico
  </h1>
</template>

<script lang="ts">
import {TextScrambler as TextScramblerClass} from "@/functions/TextScrampler";
import {defineComponent, PropType} from "vue";

import * as anime from 'animejs/lib/anime';


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
      fx: {} as TextScramblerClass,
      expanded: false
    }
  },
  methods: {
    async next(delay?: number) {
      if(!this.expanded){
        anime({
          targets: '#text-container',
          opacity: [0, 1],
          height: [0, (el: HTMLElement) => {
            return el.scrollHeight
          }],
          delay: this.delay,
          complete: () => {
            this.expanded = true
          },
          duration: 1000
        });
      }

      this.fx?.setText(this.phrases[this.counter]).then(() => {
        setTimeout(this.next, delay ?? this.duration)
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
    const el: HTMLElement = document.querySelector('#text-container') as HTMLElement
    this.fx = new TextScramblerClass(el)

    if (this.start) {
      this.next(this.delay)
    }
  }

})
</script>

<style scoped lang="scss">
.text::v-deep {
  font-family: 'Lucida Console', monospace;
  height: 0;
  overflow: hidden;

  .dud {
    color: rgba(255, 255, 255, .4) !important;
  }
}

</style>
