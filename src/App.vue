<template>
  <img alt="Leica Florian Robert logo" src="./assets/logo_white.svg" class="main-logo">

  <h1>Coming soon . . .</h1>
</template>

<script>

export default {
  name: 'App',
  components: {}
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

.main-logo {
  width: 80%;
  height: 80%;
  max-width: 400px;
  max-height: 400px;
}
</style>
