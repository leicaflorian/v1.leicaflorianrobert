<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">

      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="logo_navbar.svg" alt="Logo Leica Florian Robert"  height="50" class="d-inline-block">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="menu in menuList" :key="menu.id">
              <a class="nav-link active" aria-current="page" :href="'#' + menu.link">{{ $t("menu." + menu.id) }}</a>
            </li>
          </ul>
        </div>

        <a class="navbar-brand">
          <img src="logo_navbar.svg" alt="Logo Leica Florian Robert"  height="50" class="d-inline-block">
        </a>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {menuList} from "@/functions/MenuList";

@Component({
  components: {},
})
export default class NavBar extends Vue {
  public menuList = menuList
}
</script>
