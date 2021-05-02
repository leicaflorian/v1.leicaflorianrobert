<template>
  <nav class="navbar">
    <div class="container">
      <a href="" class="navbar-link">
        Su di me
      </a>
      <a href="" class="navbar-link">
        Skills e lavori
      </a>
      <a href="" class="navbar-link">
        Contatti
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;

  .container {
    display: flex;
    justify-content: space-between;
  }

  .navbar-link {
    color: white;
    font-size: 2rem;
    text-decoration: none;
    padding: 16px;
    position: relative;
    color: rgba(255, 255, 255, .7);
    transition: color .3s;

    &:before, &:after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      opacity: 1;
      transform: rotateZ(0);
      background-color: white;
      transition: top .3s, transform .3s, opacity .3s
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }

    &:hover {
      color: rgba(255, 255, 255, 1);

      &:before {
        opacity: 0;
        top: calc(100% - 4px);
        transform: rotateZ(180deg);
      }
    }

  }
}

</style>
