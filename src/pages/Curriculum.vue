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
        <ul class="nav nav-pills nav-fill" id="myTabs">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="projects-tab"
                    data-bs-toggle="tab" data-bs-target="#projects" type="button"
                    role="tab" aria-controls="projects" aria-selected="true">
              Alcuni progetti
            </button>
          </li>
          <li class="nav-item">
            <button class="nav-link" id="cv-tab"
                    data-bs-toggle="tab" data-bs-target="#cv" type="button"
                    role="tab" aria-controls="cv" aria-selected="false">
              Curriculum
            </button>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane py-4 active" id="projects" role="tabpanel" aria-labelledby="projects-tab">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <div class="col" v-for="project in projects" :key="project.title">
                <Project :project="project"></Project>
              </div>
            </div>
          </div>
          <div class="tab-pane pt-4" id="cv" role="tabpanel" aria-labelledby="cv-tab">
            <div class="timeline-wrapper" ref="timelineWrapper">
              <div class="timeline-line-before" data-aos="fade-left" data-aos-delay="300"></div>
              <WorkExperience v-for="(experience, i) in workExperiences" :key="experience.title" v-bind="experience"
                              :index="i"
              ></WorkExperience>
              <div class="timeline-line-after" data-aos="fade-right"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Options as Component, Vue } from 'vue-class-component'
import { menuList } from '@/functions/MenuList'
import PageTitle from '@/components/PageTitle.vue'
import SkillLevel from '@/components/SkillLevel.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import VanillaTilt from 'vanilla-tilt'
import Project, { ProjectProps } from '@/components/Project.vue'

@Component({
  name: 'Curriculum',
  components: {
    Project,
    WorkExperience,
    SkillLevel,
    PageTitle
  }
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
      title: 'TypeScript',
      percent: 90,
      type: 'programming'
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
      title: 'PHP',
      percent: 80,
      type: 'programming'
    },
    {
      title: 'Laravel',
      percent: 80,
      type: 'framework'
    },
    {
      title: 'NativeScript',
      percent: 60,
      type: 'framework'
    },
    {
      title: 'Ionic',
      percent: 70,
      type: 'framework'
    },
    {
      title: 'Webpack / Parcel / Rollup',
      percent: 80,
      type: 'framework'
    },
    {
      title: 'MongoDB / MySQL',
      percent: 80,
      type: 'db'
    }
    /*{
      title: "MySQL",
      percent: 80,
      type: "db"
    },*/
  ]

  projects: ProjectProps[] = [
    {
      title: 'Slides.com downloader',
      description: 'Chrome/Edge extension that allows you to download slides.com presentations',
      image: 'https://lh3.googleusercontent.com/L9a8S1WWEnY_mAuOurVqI81zIH_N0hAzPGADDKtwEY_OBFr0hiRrEY7Rbu6icKy4Pw1QKAYKCjQSvbwD_atVPUA4ng=w640-h400-e365-rj-sc0x00ffffff',
      link: 'https://chrome.google.com/webstore/detail/slidescom-downloader/bciknjamldhnbbckmgbchmkdcalngnco?hl=it',
      github: 'https://github.com/leicaflorian/leicaflorianrobert'
    },
    {
      title: 'My website',
      description: 'The site you are currently on. Nothing too fancy, just a simple portfolio site.',
      image: '/banner.jpg',
      github: 'https://github.com/leicaflorian/slides.com_downloader'
    },
    {
      title: 'Fold my paper',
      description: 'Simple app that allows you to mock the folding of a single sheet of paper more that 7 times... Try it and see how far you can go!',
      link: 'https://leicaflorian.github.io/fold_my_paper',
      github: 'https://github.com/leicaflorian/fold_my_paper'
    },
    {
      title: 'Enigma',
      description: 'A simple app that encrypts and decrypts messages using the Enigma machine',
      link: 'https://leicaflorian.github.io/enigma_machine',
      github: 'https://github.com/leicaflorian/enigma_machine'
    },
    {
      title: 'Home Tv',
      description: 'App that allows you to view italian iptv channels',
      link: 'https://hometv.herokuapp.com/',
      github: 'https://github.com/leicaflorian/hometv'
    }, {
      title: 'Fibonacci Counter',
      description: 'App that show how to generate the Fibonacci sequence using different methods',
      link: 'https://leicaflorian.github.io/fibonacci_counter/',
      github: 'https://github.com/leicaflorian/fibonacci_counter'
    }
  ]

  get programmingSkills () {
    return this.skills.filter((el: any) => el.type === 'programming')
  }

  get frameworkSkills () {
    return this.skills.filter((el: any) => el.type === 'framework' || el.type === 'db')
  }

  get dbSkills () {
    return this.skills.filter((el: any) => el.type === 'db')
  }

  get workExperiences () {
    return [
      {
        date: '2021 - Oggi',
        title: this.$t('workExperiences.7.title'),
        subtitle: this.$t('workExperiences.7.subtitle'),
        content: this.$t('workExperiences.7.content')
      },
      {
        date: '2017 - Oggi',
        title: this.$t('workExperiences.6.title'),
        subtitle: this.$t('workExperiences.6.subtitle'),
        content: this.$t('workExperiences.6.content')
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
