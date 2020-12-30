<template>
  <section class="section">
    <h2 class="title has-text-centered is-size-2 anchor" id="skills">Skills</h2>
    <div class="container is-max-desktop">
      <div v-for="(key, i) in ['languages', 'frontend', 'backend', 'design', 'tooling', 'cms']" :key="i">
        <h3
          class="subtitle is-size-4"
          :class="{
            'is-capitalized': key !== 'cms',
            'is-uppercase': key === 'cms',
            'mt-6': i > 0
          }"
        >
          {{ key }}
        </h3>
        <div class="columns is-multiline">
          <div
            v-for="skill in skillsets[key]"
            :key="skill.id"
            :id="skill.id"
            class="column is-mobile is-6 is-flex is-align-items-center"
          >
            <div
              class="is-flex is-justify-content-center is-align-items-center is-flex-shrink-0"
              style="flex-basis: 48px"
            >
              <span v-if="skill.icon" class="icon is-large" :style="{ color: skill.color }">
                <i :class="`${skill.icon} fa-2x`"></i>
              </span>
              <img v-else-if="skill.img" :src="skill.img" :alt="skill.name" />
            </div>
            <span class="pl-2 is-flex-shrink-0" style="flex-basis: 110px">
              {{ skill.name }}
            </span>
            <progress :value="skill.level.current" max="100" class="progress is-primary">
              {{ skill.level.current }}%
            </progress>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import helpers from "@/mixins/helpers";

interface Skillsets {
  languages: Skill[];
  frontend: Skill[];
  backend: Skill[];
  design: Skill[];
  tooling: Skill[];
  cms: Skill[];
}

interface Skill {
  id: string;
  name: string;
  level: {
    current: number;
    full: number;
  };
  icon?: string;
  color?: string;
  img?: NodeRequire;
  _animated?: boolean;
}

export default defineComponent({
  mixins: [helpers],

  data() {
    return {
      skillsets: {
        languages: [
          {
            id: "js",
            name: "JavaScript",
            level: { current: 0, full: 95 },
            icon: "fab fa-js",
            color: "#f0db4f"
          },
          {
            id: "ts",
            name: "TypeScript",
            level: { current: 0, full: 95 },
            img: require("@/assets/img/logos/ts.png")
          },
          {
            id: "html",
            name: "HTML5",
            level: { current: 0, full: 90 },
            icon: "fab fa-html5",
            color: "#e34c26"
          },
          {
            id: "css",
            name: "CSS3",
            level: { current: 0, full: 80 },
            icon: "fab fa-css3",
            color: "#264de4"
          },
          {
            id: "sass",
            name: "SASS",
            level: { current: 0, full: 65 },
            icon: "fab fa-sass",
            color: "#cd6799"
          },
          {
            id: "python",
            name: "Python",
            level: { current: 0, full: 40 },
            img: require("@/assets/img/logos/python.png")
          },
          {
            id: "java",
            name: "Java",
            level: { current: 0, full: 50 },
            img: require("@/assets/img/logos/java.png")
          },
          {
            id: "php",
            name: "PHP",
            level: { current: 0, full: 40 },
            icon: "fab fa-php",
            color: "#8993be"
          },
          {
            id: "sql",
            name: "SQL",
            level: { current: 0, full: 75 },
            img: require("@/assets/img/logos/sql.png")
          }
        ],
        frontend: [
          {
            id: "angular",
            name: "Angular",
            level: { current: 0, full: 90 },
            icon: "fab fa-angular",
            color: "#dd1b16"
          },
          {
            id: "vue",
            name: "Vue",
            level: { current: 0, full: 95 },
            img: require("@/assets/img/logos/vue.png")
          },
          {
            id: "am",
            name: "Angular Material",
            level: { current: 0, full: 70 },
            img: require("@/assets/img/logos/angular-material.png")
          },
          {
            id: "vuetify",
            name: "Vuetify",
            level: { current: 0, full: 95 },
            img: require("@/assets/img/logos/vuetify.png")
          },
          {
            id: "bulma",
            name: "Bulma",
            level: { current: 0, full: 65 },
            img: require("@/assets/img/logos/bulma.png")
          },
          {
            id: "bs",
            name: "Bootstrap",
            level: { current: 0, full: 70 },
            icon: "fab fa-bootstrap",
            color: "#563d7c"
          },
          {
            id: "leaflet",
            name: "Leaflet",
            level: { current: 0, full: 85 },
            img: require("@/assets/img/logos/leaflet.png")
          }
        ],
        backend: [
          {
            id: "node",
            name: "Node.js",
            level: { current: 0, full: 50 },
            icon: "fab fa-node",
            color: "#68a063"
          }
        ],
        design: [
          {
            id: "figma",
            name: "Figma",
            level: { current: 0, full: 75 },
            img: require("@/assets/img/logos/figma.png")
          }
        ],
        tooling: [
          {
            id: "git",
            name: "Git",
            level: { current: 0, full: 75 },
            icon: "fab fa-git-alt",
            color: "#f34f29"
          },
          {
            id: "svn",
            name: "SVN",
            level: { current: 0, full: 60 },
            img: require("@/assets/img/logos/svn.png")
          },
          {
            id: "fb",
            name: "Google Firebase",
            level: { current: 0, full: 40 },
            img: require("@/assets/img/logos/firebase.png")
          }
        ],
        cms: [
          {
            id: "wp",
            name: "WordPress",
            level: { current: 0, full: 85 },
            icon: "fab fa-wordpress",
            color: "#00749c"
          },
          {
            id: "ps",
            name: "PrestaShop",
            level: { current: 0, full: 75 },
            img: require("@/assets/img/logos/prestashop.png")
          }
        ]
      } as Skillsets
    };
  },

  methods: {
    setProgressAnimations(): void {
      let allAnimated = true;
      Object.values(this.skillsets).forEach(skillset => {
        for (const skill of skillset) {
          if (skill._animated) {
            continue;
          } else {
            if (this.isInView(skill.id)) {
              this.addProgressAnimation(skill);
              skill._animated = true;
            }
            allAnimated = false;
          }
        }
      });
      if (allAnimated) {
        window.removeEventListener("scroll", this.setProgressAnimations);
      }
    },

    addProgressAnimation(skill: Skill): void {
      const interval = setInterval(() => {
        if (skill.level.current < skill.level.full) {
          skill.level.current += 5;
        } else {
          clearInterval(interval);
        }
      }, 50);
    }
  },

  mounted() {
    window.addEventListener("scroll", this.setProgressAnimations);
  },

  unmounted() {
    window.removeEventListener("scroll", this.setProgressAnimations);
  }
});
</script>

<style lang="scss" scoped>
img {
  max-height: 28px;
  width: auto;
}

.progress::-webkit-progress-value {
  transition: width 0.1s ease;
}
</style>
