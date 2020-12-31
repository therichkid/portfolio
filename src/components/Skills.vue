<template>
  <section class="section">
    <h2 class="title has-text-centered is-size-2 anchor" id="skills">Skills</h2>
    <div class="container is-max-desktop">
      <div v-for="(key, i) in ['languages', 'frontend', 'backend', 'design', 'tooling', 'cms']" :key="i">
        <h3
          class="subtitle is-size-4 pt-4"
          :class="{
            'is-capitalized': key !== 'cms',
            'is-uppercase': key === 'cms',
            'mt-6': i > 0
          }"
        >
          {{ key }}
        </h3>
        <div class="columns is-multiline skills">
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
              <span v-if="$iconMap[skill.id].icon" class="icon is-large" :style="{ color: $iconMap[skill.id].color }">
                <i :class="`${$iconMap[skill.id].icon} fa-2x`"></i>
              </span>
              <img v-else-if="$iconMap[skill.id].img" :src="$iconMap[skill.id].img" :alt="$iconMap[skill.id].name" />
            </div>
            <span class="pl-2 is-flex-shrink-0" style="flex-basis: 110px">
              {{ $iconMap[skill.id].name }}
            </span>
            <progress :value="skill.level.current" max="100" class="progress is-primary">
              {{ skill.level.current }}%
            </progress>
          </div>
        </div>
      </div>

      <h3 class="subtitle is-size-4 mt-6 pt-4">Certificates</h3>
      <div class="columns is-multiline is-mobile certificates">
        <div v-for="certificate in certificates" :key="certificate.name" class="column is-3-desktop is-6-mobile">
          <div class="card is-interactive" style="height: 100%" @click="openModal(certificate)">
            <div class="card-image">
              <figure class="image is-4by3">
                <picture>
                  <source :srcset="certificate.img.webp['480']" type="image/webp" />
                  <source :srcset="certificate.img.jpg['480']" type="image/jpeg" />
                  <img :src="certificate.img.jpg['480']" :alt="certificate.name" />
                </picture>
              </figure>
            </div>
            <span class="icon overlay-icon has-background-dark">
              <i class="fas fa-expand-arrows-alt"></i>
            </span>
            <div class="card-content">
              {{ certificate.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="modal" :class="{ 'is-active': modal.isOpen }" v-if="modal.isOpen">
        <div @click="closeModal()" class="modal-background"></div>
        <div class="modal-content">
          <figure :class="`image is-${modal.certificate.format}`">
            <picture>
              <source
                :srcset="`${modal.certificate.img.webp['1280']} 1280w, ${modal.certificate.img.webp['480']} 720w`"
                type="image/webp"
              />
              <source
                :srcset="`${modal.certificate.img.jpg['1280']} 1280w, ${modal.certificate.img.jpg['480']} 720w`"
                type="image/jpeg"
              />
              <img :src="modal.certificate.img.jpg['1280']" :alt="modal.certificate.name" />
            </picture>
          </figure>
        </div>
        <button @click="closeModal()" class="modal-close is-large" aria-label="close"></button>
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
  level: {
    current: number;
    full: number;
  };
  _animated?: boolean;
}

interface Certificate {
  name: string;
  img: ImageMap;
  format: "4by3" | "3by4";
}

type ImageMap = {
  [key in "webp" | "jpg"]: {
    1280: NodeRequire;
    480: NodeRequire;
  };
};

export default defineComponent({
  mixins: [helpers],

  data() {
    return {
      skillsets: {
        languages: [
          { id: "js", level: { current: 0, full: 95 } },
          { id: "ts", level: { current: 0, full: 95 } },
          { id: "html", level: { current: 0, full: 90 } },
          { id: "css", level: { current: 0, full: 80 } },
          { id: "sass", level: { current: 0, full: 65 } },
          { id: "python", level: { current: 0, full: 40 } },
          { id: "java", level: { current: 0, full: 50 } },
          { id: "php", level: { current: 0, full: 40 } },
          { id: "sql", level: { current: 0, full: 75 } }
        ],
        frontend: [
          { id: "angular", level: { current: 0, full: 90 } },
          { id: "vue", level: { current: 0, full: 95 } },
          { id: "am", level: { current: 0, full: 70 } },
          { id: "vuetify", level: { current: 0, full: 95 } },
          { id: "bulma", level: { current: 0, full: 65 } },
          { id: "bootstrap", level: { current: 0, full: 70 } },
          { id: "leaflet", level: { current: 0, full: 85 } }
        ],
        backend: [{ id: "node", level: { current: 0, full: 50 } }],
        design: [{ id: "figma", level: { current: 0, full: 75 } }],
        tooling: [
          { id: "git", level: { current: 0, full: 75 } },
          { id: "svn", level: { current: 0, full: 60 } },
          { id: "firebase", level: { current: 0, full: 40 } }
        ],
        cms: [
          { id: "wp", level: { current: 0, full: 85 } },
          { id: "ps", level: { current: 0, full: 75 } }
        ]
      } as Skillsets,
      certificates: [
        {
          name: "Angular & TypeScript Intensiv-Schulung",
          img: {
            webp: {
              1280: require("@/assets/img/certificates/angular-typescript-1280.webp"),
              480: require("@/assets/img/certificates/angular-typescript-480.webp")
            },
            jpg: {
              1280: require("@/assets/img/certificates/angular-typescript-1280.jpg"),
              480: require("@/assets/img/certificates/angular-typescript-480.jpg")
            }
          },
          format: "3by4"
        },
        {
          name: "Accelerated ES6 JavaScript Training",
          img: {
            webp: {
              1280: require("@/assets/img/certificates/accelerated-es6-1280.webp"),
              480: require("@/assets/img/certificates/accelerated-es6-480.webp")
            },
            jpg: {
              1280: require("@/assets/img/certificates/accelerated-es6-1280.jpg"),
              480: require("@/assets/img/certificates/accelerated-es6-480.jpg")
            }
          },
          format: "4by3"
        },
        {
          name: "Mastering Clean Code in JavaScript",
          img: {
            webp: {
              1280: require("@/assets/img/certificates/clean-code-1280.webp"),
              480: require("@/assets/img/certificates/clean-code-480.webp")
            },
            jpg: {
              1280: require("@/assets/img/certificates/clean-code-1280.jpg"),
              480: require("@/assets/img/certificates/clean-code-480.jpg")
            }
          },
          format: "4by3"
        },
        {
          name: "UNIcert English Level II",
          img: {
            webp: {
              1280: require("@/assets/img/certificates/unicert-1280.webp"),
              480: require("@/assets/img/certificates/unicert-480.webp")
            },
            jpg: {
              1280: require("@/assets/img/certificates/unicert-1280.jpg"),
              480: require("@/assets/img/certificates/unicert-480.jpg")
            }
          },
          format: "3by4"
        }
      ] as Certificate[],
      modal: {
        isOpen: false,
        certificate: {} as Certificate
      }
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
    },
    openModal(certificate: Certificate) {
      this.modal = {
        isOpen: true,
        certificate
      };
    },
    closeModal() {
      this.modal = {
        isOpen: false,
        certificate: {} as Certificate
      };
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
.skills img {
  max-height: 28px;
  width: auto;
}
.certificates img {
  object-fit: cover;
  object-position: top center;
}
.progress::-webkit-progress-value {
  transition: width 0.1s ease;
}
</style>
