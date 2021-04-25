<template>
  <main-logo/>

  <h1 class="text">Coming soon . . .</h1>
</template>

<script lang="ts">
import MainLogo from "./components/MainLogo.vue";
import {TextScrambler} from "./functions/TextScrampler"

export default {
  name: 'App',
  components: {MainLogo},
  mounted() {

    const phrases = [
      'Hey,',
      'put here all the sentences',
      'that you want to cycle',
      'they will all be automatically displayed.',
      'Just',
      'Like',
      'This.',
      'Have fun :)'
    ]

    const el = document.querySelector('.text')
    const fx = new TextScrambler(el)

    let counter = 0
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800)
      })
      counter = (counter + 1) % phrases.length
    }

    next()
  }
}
</script>

<style lang="scss">
@import "./assets/vonique64-font.css";

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  font-family: Vonique64, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgb(60, 99, 119);
  background: linear-gradient(132deg, rgba(60, 99, 119, 1) 0%, rgba(89, 103, 113, 1) 40%, rgba(69, 100, 117, 1) 80%, rgba(60, 99, 119, 1) 100%);
}


</style>
