<template>
  <div class="timeline-item">
    <div class="row row-cols-1 row-cols-sm-2">
      <div class="timeline-side col">
        <h4 class="timeline-title">{{ title }}</h4>
        <p class="lead timeline-subtitle">{{ subtitle }}</p>
        <p v-html="content" class="timeline-content text-muted"></p>
      </div>
      <div class="timeline-side col ">
        <div class="timeline-line"></div>

        <div class="timeline-line-text">
          {{date}}
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Component({
  components: {},
})
export default class WorkExperience extends Vue {
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

}
</script>
