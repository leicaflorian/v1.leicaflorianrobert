<template>
  <div class="page">
    <MainLogo @animation:completed="onAnimationCompleted"/>
  </div>


  <div class="page">
    <div class="container">

      <p class="title">
        Ciao,
        <br>
        sono Leica Florian, un <strong>web developer</strong> e mi occupo di tutto quello che riguarda la creazione di
        <strong>siti
          internet</strong> ed in particolare <strong>Web Apps</strong>
      </p>
    </div>

    <NavBar></NavBar>
  </div>
</template>

<script lang="ts">
import {Options as Component, Vue} from 'vue-class-component';
import MainLogo from './components/MainLogo.vue';
import NavBar from "@/components/NavBar.vue";

@Component({
  components: {
    NavBar,
    MainLogo,
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700&display=swap');
@import "./assets/vonique64-font.css";

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
}

#app {
  width: 100%;
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(60, 99, 119);
  background: linear-gradient(132deg, rgba(60, 99, 119, 1) 0%, rgba(89, 103, 113, 1) 40%, rgba(69, 100, 117, 1) 80%, rgba(60, 99, 119, 1) 100%);

  .page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    overflow: auto;

    .container {
      max-width: 920px;
      width: 100%;
    }

    .title {
      font-size: 2.5rem;
    }
  }
}
</style>
