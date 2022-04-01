<template>
  <div class="card h-100 card-project">
    <img :src="project.image ?? '/coming-soon.jpeg'" class="card-img-top" alt="project cover">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ project.description }}</p>

      <div class="text-right mt-auto">
        <a v-if="project.github" :href="project.github" target="_blank" class="card-link me-3">
          <i class="fab fa-github"></i>
        </a>

        <a v-if="project.link" :href="project.link" target="_blank" class="card-link">Vai al progetto
          <i class="fas fa-caret-right ms-2"></i></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface ProjectProps {
  title: string
  link?: string
  description: string
  image?: string,
  github?: string,
}

export default defineComponent({
  name: 'Project',
  props: {
    project: {
      type: Object as PropType<ProjectProps>,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.card-project {
  border: solid 1px lightgray;
  border-radius: 8px;
  background: white;
  display: flex;
  flex-direction: column;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  .card-body {
    flex-grow: 1;
    padding: 16px 8px;

    .card-title {
      font-weight: bold;
    }
  }
}
</style>
