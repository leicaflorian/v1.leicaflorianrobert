<template>
  <section class="page" id="contact">
    <div class="container">
      <PageTitle identifier="contact"></PageTitle>

      <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-lg-6 d-flex">
          <p class="fs-lg-5 text-md-start mb-5 mb-md-0" data-aos="fade-right" v-html="$t('contact.info')"></p>
        </div>
        <div class="col-12 col-md-8 col-lg-6">
          <template v-if="!emailSent && !emailError">
            <form class="text-start" @submit.prevent="sendEmail">
              <FormInput :label="$t('forms.name.label')" name="name" :input-group="false"
                         :placeholder="$t('forms.name.placeholder')"
                         :error="errors.name"
                         v-model="formData.name"></FormInput>

              <FormInput :label="$t('forms.email.label')" name="email" :input-group="false"
                         :placeholder="$t('forms.email.placeholder')"
                         :error="errors.email"
                         v-model="formData.email"></FormInput>

              <FormInput :label="$t('forms.message.label')" name="message" :input-group="false"
                         :placeholder="$t('forms.message.placeholder')"
                         :error="errors.message"
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
                <Button size="btn-lg px-5" type="btn-outline-success" :text="$t('forms.submit')" icon="fa-arrow-right"
                        @click="sendEmail" :loading="loading"/>
              </div>
            </form>
          </template>

          <template v-else>
            <div class="card">
              <template v-if="!emailError">
                <i class="fas fa-check fa-5x text-success mb-5"></i>
                <p class="fs-3" v-html="$t('contact.success')"></p>
              </template>

              <template v-else>
                <i class="fas fa-exclamation-triangle fa-5x text-danger mb-5"></i>
                <p class="fs-3" v-html="$t('contact.error')"></p>
              </template>
            </div>

          </template>
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
import EmailJs from "emailjs-com";
import {validate} from "validate.js"
import {Watch} from "vue-property-decorator";

@Component({
  name: "Contact",
  components: {Button, FormInput, PageTitle},
})
export default class Contact extends Vue {
  emailJsSettings = {
    serviceID: "default_service",
    templateID: "template_vcmic8r",
    userID: "user_JrieOJb0UAy9jlczFhnHa"
  }
  loading: boolean = false;
  emailSent: boolean = false;
  emailError: boolean = false;

  formErrors: any = {}

  validations = {
    name: {
      presence: true,
      length: {
        minimum: 4,
        message: "must be at least 6 characters"
      }
    },
    email: {
      presence: true,
      email: true
    },
    message: {
      presence: true,
      length: {
        minimum: 10,
      }
    }
  }

  formData = {
    name: "",
    email: "",
    message: ""
  }

  get color() {
    return menuList.find(el => el.id === "contact")?.bg_color;
  }

  get errors() {
    return this.formErrors ?? {}
  }

  validate() {
    this.formErrors = validate(this.formData, this.validations);
  }

  async sendEmail() {
    this.validate();

    if (this.formErrors && Object.keys(this.formErrors).length > 0) {
      return;
    }

    this.loading = true

    try {
      const emailData = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        from_date: new Date().toLocaleString(),
        message: this.formData.message
      }

      await EmailJs.send(
          this.emailJsSettings.serviceID,
          this.emailJsSettings.templateID,
          emailData,
          this.emailJsSettings.userID)

      this.emailSent = true
    } catch (er) {
      console.error(er)
      this.emailError = true
    } finally {
      this.loading = false
    }
  }

  @Watch("formData", {deep: true})
  onFormDataChange() {
    this.validate();
  }
}
</script>
