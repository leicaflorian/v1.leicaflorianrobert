<template>
  <div class="timeline-item">
    <div class="row row-cols-1 row-cols-md-2 flex-column-reverse flex-md-row" :class="{'flex-md-row-reverse': !this.odd}">
      <div class="timeline-side col" :data-aos="this.odd ? 'fade-left' : 'fade-right'">
        <div class="px-md-3 text-start" :class="{'text-md-end': this.odd}">
          <h4 class="timeline-title">{{ title }}</h4>
          <p class="lead timeline-subtitle" v-html='subtitle'></p>
          <p v-html="content" class="timeline-content text-muted"></p>
        </div>
      </div>

      <div class="timeline-side col text-start" :data-aos="this.odd ? 'fade-left' : 'fade-right'"
           :class="{'text-md-end flex-row-reverse': !this.odd}">
        <div class="timeline-line"></div>

        <div class="timeline-line-text">
          {{ date }}
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Component({
  name: "WorkExperience",
  components: {},
})
export default class WorkExperience extends Vue {
  @Prop({type: Number})
  index!: number

  @Prop({type: String})
  date!: string

  @Prop({type: String, default: "Titolo"})
  title!: string

  @Prop({type: String, default: "Sottotitolo"})
  subtitle!: string

  @Prop({
    type: String,
    default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolorum ducimus ex exercitationem expedita facere, nisi quas quod tempore unde veniam veritatis vero! Excepturi illo, itaque molestias quia sed voluptatibus."
  })
  content!: string

  get odd() {
    return this.index % 2 === 0
  }
}
</script>
