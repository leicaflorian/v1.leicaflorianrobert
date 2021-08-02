<template>
  <section class="page" id="contact">
    <div class="container">
      <PageTitle identifier="contact"></PageTitle>

      <div class="row justify-content-center">
        <div class="col align-items-center d-flex">
          <p class="lead">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab alias, architecto at, autem culpa dignissimos dolorem earum fugit libero magni quas rem repudiandae sit totam ut veritatis voluptate voluptates.
          </p>
        </div>
        <div class="col col-md-6">

          <form action="" class="text-start">
            <div class="mb-4">
              <label for="nameInput" class="form-label" v-html="$t('forms.name.label')"></label>
              <div class="input-group mb-3">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
                <input type="text" class="form-control" id="nameInput" :placeholder="$t('forms.name.placeholder')">
              </div>
            </div>

            <div class="mb-4">
              <label for="emailInput" class="form-label" v-html="$t('forms.email.label')"></label>
              <div class="input-group mb-3">
                <span class="input-group-text">
                  <i class="fas fa-at"></i>
                </span>
                <input type="email" class="form-control" id="emailInput" :placeholder="$t('forms.email.placeholder')">
              </div>
            </div>

            <div class="mb-4">
              <label for="messageInput" class="form-label" v-html="$t('forms.message.label')"></label>
              <div class="input-group mb-3">
                <span class="input-group-text">
                  <i class="fas fa-comment-dots"></i>
                </span>
                <textarea class="form-control" id="messageInput" rows="3"></textarea>

              </div>
            </div>

            <button type="submit" class="btn btn-outline-primary ms-5 btn-lg px-5">
              {{ $t('forms.submit') }}
              <i class="fas fa-arrow-right ms-2"></i>
            </button>
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

@Component({
  name: "Contact",
  components: {PageTitle},
})
export default class Contact extends Vue {
  get color() {
    return menuList.find(el => el.id === "contact")?.bg_color;
  }
}
</script>
