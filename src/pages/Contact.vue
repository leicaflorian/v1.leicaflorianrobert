<template>
  <section class="page" id="contact">
    <div class="container">
      <PageTitle identifier="contact"></PageTitle>

      <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-lg-6 align-items-xl-center d-flex">
          <p class="fs-lg-5 text-md-start mb-5 mb-md-0" data-aos="fade-right">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab alias, architecto at, autem culpa dignissimos
            dolorem earum fugit libero magni quas rem repudiandae sit totam ut veritatis voluptate voluptates.
          </p>
        </div>
        <div class="col-12 col-md-8 col-lg-6">

          <form action="" class="text-start">
            <FormInput :label="$t('forms.name.label')" name="name" :input-group="false"
                       :placeholder="$t('forms.name.placeholder')"
                       v-model="formData.name"></FormInput>

            <FormInput :label="$t('forms.email.label')" name="email" :input-group="false"
                       :placeholder="$t('forms.email.placeholder')"
                       v-model="formData.email"></FormInput>

            <FormInput :label="$t('forms.message.label')" name="message" :input-group="false"
                       :placeholder="$t('forms.message.placeholder')"
                       type="textarea" v-model="formData.message"></FormInput>


            <!--            <div class="mb-4">
                          <label for="messageInput" class="form-label" v-html="$t('forms.message.label')"></label>
                          <div class="input-group mb-3">
                            <span class="input-group-text">
                              <i class="fas fa-comment-dots"></i>
                            </span>
                            <textarea class="form-control" id="messageInput" rows="3"></textarea>

                          </div>
                        </div>-->

            <div data-aos-delay="1000" data-aos="fade-up" class="text-center text-md-start">
              <Button size="btn-lg px-5" type="btn-outline-success" :text="$t('forms.submit')" icon="fa-arrow-right"/>
            </div>
          </form>

        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {menuList} from "@/functions/MenuList";
import PageTitle from "@/components/PageTitle.vue";
import FormInput from "@/components/FormInput.vue";
import Button from "@/components/Button.vue";

@Component({
  name: "Contact",
  components: {Button, FormInput, PageTitle},
})
export default class Contact extends Vue {
  formData = {
    name: "",
    email: "",
    message: ""
  }

  get color() {
    return menuList.find(el => el.id === "contact")?.bg_color;
  }
}
</script>
