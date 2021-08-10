<template>
  <section class="page" id="curriculum">
    <div class="container">
      <PageTitle identifier="curriculum"></PageTitle>

      <div class="row row-cols-1 row-cols-sm-2 g-md-5">
        <div class="col">
          <SkillLevel v-for="skill in programmingSkills" :key="skill.title" v-bind="skill"></SkillLevel>
        </div>
        <div class="col">
          <SkillLevel v-for="skill in frameworkSkills" :key="skill.title" v-bind="skill"></SkillLevel>
        </div>
      </div>
    </div>

    <div class="w-100" style="background-color: rgba(248, 249, 250, .2)">
      <div class="container">
        <div class="timeline-wrapper" ref="timelineWrapper">
          <div class="timeline-line-before" data-aos="fade-left" data-aos-delay="300"></div>
          <WorkExperience v-for="(experience, i) in workExperiences" :key="experience.title" v-bind="experience"
                          :index="i"
          ></WorkExperience>
          <div class="timeline-line-after" data-aos="fade-right"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Options as Component, Vue} from "vue-class-component";
import {menuList} from "@/functions/MenuList";
import PageTitle from "@/components/PageTitle.vue";
import SkillLevel from "@/components/SkillLevel.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import VanillaTilt from "vanilla-tilt";

@Component({
  name: "Curriculum",
  components: {
    WorkExperience,
    SkillLevel,
    PageTitle
  },
})
export default class Curriculum extends Vue {
  $refs!: {
    timelineWrapper: HTMLElement
  }

  get color() {
    return menuList.find(el => el.id === "curriculum")?.bg_color;
  }

  skills = [
    {
      title: "JavaScript",
      percent: 90,
      type: "programming"
    },
    {
      title: "TypeScript",
      percent: 80,
      type: "programming"
    },
    {
      title: "Node.js",
      percent: 85,
      type: "programming"
    },
    {
      title: "jQuery",
      percent: 90,
      type: "programming"
    },
    {
      title: "HTML5",
      percent: 95,
      type: "programming"
    },
    {
      title: "CSS3 / SASS",
      percent: 85,
      type: "programming"
    },
    {
      title: "Vue.js / Nuxt.js",
      percent: 90,
      type: "framework"
    },
    {
      title: "Nest.js",
      percent: 75,
      type: "framework"
    },

    {
      title: "PHP",
      percent: 70,
      type: "programming"
    },
    {
      title: "Laravel",
      percent: 70,
      type: "framework"
    },
    {
      title: "NativeScript",
      percent: 60,
      type: "framework"
    },
    {
      title: "Webpack / Parcel / Rollup",
      percent: 80,
      type: "framework"
    },
    {
      title: "MongoDB",
      percent: 70,
      type: "db"
    },
    {
      title: "MySQL",
      percent: 70,
      type: "db"
    },
  ]

  get programmingSkills() {
    return this.skills.filter((el: any) => el.type === "programming")
  }

  get frameworkSkills() {
    return this.skills.filter((el: any) => el.type === "framework" || el.type === "db")
  }

  get dbSkills() {
    return this.skills.filter((el: any) => el.type === "db")
  }


  get workExperiences() {
    return [
      {
        date: "2021 - Oggi",
        title: this.$t("workExperiences.7.title"),
        subtitle: this.$t("workExperiences.7.subtitle"),
        content: this.$t("workExperiences.7.content")
      },
      {
        date: "2017 - Oggi",
        title: this.$t("workExperiences.6.title"),
        subtitle: this.$t("workExperiences.6.subtitle"),
        content: this.$t("workExperiences.6.content")
      },
      {
        date: "2020 - 2021",
        title: this.$t("workExperiences.5.title"),
        subtitle: this.$t("workExperiences.5.subtitle"),
        content: this.$t("workExperiences.5.content")
      },
      {
        date: "2018 - 2020",
        title: this.$t("workExperiences.4.title"),
        subtitle: this.$t("workExperiences.4.subtitle"),
        content: this.$t("workExperiences.4.content")
      },
      {
        date: "2009 - 2017",
        title: this.$t("workExperiences.3.title"),
        subtitle: this.$t("workExperiences.3.subtitle"),
        content: this.$t("workExperiences.3.content")
      },
      {
        date: "2009",
        title: this.$t("workExperiences.2.title"),
        subtitle: this.$t("workExperiences.2.subtitle"),
        content: this.$t("workExperiences.2.content")
      },
      {
        date: "2009",
        title: this.$t("workExperiences.1.title"),
        subtitle: this.$t("workExperiences.1.subtitle"),
        content: this.$t("workExperiences.1.content")
      }
    ]
  }

  mounted() {
    VanillaTilt.init(this.$refs.timelineWrapper.querySelectorAll(".timeline-item") as any, {
      axis: "x",
      max: 10,
      speed: 100
    })
  }

}
</script>
