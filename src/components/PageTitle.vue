<template>
  <h2 class="page-subtitle" data-aos="fade-left">{{ $t("menu." + identifier) }}</h2>
  <h1 class="page-title fw-bold" data-aos="fade-right">{{ $t("menu." + identifier + "-title") }}</h1>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator"


@Component({name: "PageTitle"})
export default class PageTitle extends Vue {
  @Prop({type: String})
  identifier!: string
}
</script>
