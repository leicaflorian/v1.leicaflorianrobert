<template>
  <section class="page" id="services">
    <div class="container">
      <PageTitle identifier="services"></PageTitle>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-4">
        <div class="col">
          <FeatureBox icon="fa-pencil-ruler" :title="$t('services.web_dev.title')"
                      :text="$t('services.web_dev.text')"></FeatureBox>
        </div>
        <div class="col">
          <FeatureBox icon="fa-palette" :title="$t('services.web_design.title')"
                      :text="$t('services.web_design.text')"></FeatureBox>
        </div>
        <div class="col">
          <FeatureBox icon="fa-mobile-alt" :title="$t('services.mobile_app.title')"
                      :text="$t('services.mobile_app.text')"></FeatureBox>
        </div>
        <div class="col">
          <FeatureBox icon="fa-cogs" :title="$t('services.cms.title')"
                      :text="$t('services.cms.text')"></FeatureBox>
        </div>
        <div class="col">
          <FeatureBox icon="fa-copyright" :title="$t('services.brand_creation.title')"
                      :text="$t('services.brand_creation.text')"></FeatureBox>
        </div>
        <div class="col">
          <FeatureBox icon="fa-search-dollar" :title="$t('services.seo_opt.title')"
                      :text="$t('services.seo_opt.text')"></FeatureBox>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {menuList} from "@/functions/MenuList";
import PageTitle from "@/components/PageTitle.vue";
import FeatureBox from "@/components/FeatureBox.vue";

@Component({
  name: "Services",
  components: {FeatureBox, PageTitle},
})
export default class Services extends Vue {
  get color() {
    return menuList.find(el => el.id === "services")?.bg_color;
  }
}
</script>
