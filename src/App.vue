<template>
  <MainLogo @animation:completed="onAnimationCompleted"/>

  <TextScrambler
      :phrases="['Hi, nice to see you here!', 'This site is currently in development,', 'so please come back soon!']"
      :duration="3000" :start="showText"/>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import MainLogo from './components/MainLogo.vue';
import TextScrambler from './components/TextScrambler.vue';

@Options({
  title: "asda",
  components: {
    MainLogo,
    TextScrambler
  },
})
export default class App extends Vue {
  public showText = false

  onAnimationCompleted() {
    this.showText = true
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
