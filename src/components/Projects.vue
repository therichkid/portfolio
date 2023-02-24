<template>
  <section class="section">
    <h2 class="title has-text-centered is-size-2 anchor" id="projects">Projects</h2>
    <div class="container is-max-desktop">
      <div class="content has-text-justified is-size-5">
        Here are some of my projects where I released the source code on GitHub. Please take a look and feel free to
        check them out.
      </div>

      <div class="columns is-multiline">
        <div v-for="project in projects" :key="project.name" class="column is-6">
          <div class="card is-flex is-flex-direction-column" style="height: 100%">
            <div class="card-image">
              <figure class="image is-16by9">
                <picture>
                  <source
                    :srcset="`${project.img.webp['960']} 1280w, ${project.img.webp['480']} 720w`"
                    type="image/webp"
                  />
                  <source
                    :srcset="`${project.img.jpg['960']} 1280w, ${project.img.jpg['480']} 720w`"
                    type="image/jpeg"
                  />
                  <img :src="project.img.jpg['960']" :alt="project.name" />
                </picture>
              </figure>
            </div>
            <div class="card-content is-flex-grow-1">
              <h3 class="is-size-4 mb-4">
                {{ project.name }}
              </h3>
              <div class="technologies mb-2">
                <span
                  v-for="technology in project.technologies"
                  :key="technology"
                  class="mr-3"
                  :title="$iconMap[technology].name"
                >
                  <span v-if="$iconMap[technology].icon" class="icon" :style="{ color: $iconMap[technology].color }">
                    <i :class="`${$iconMap[technology].icon} fa-2x`"></i>
                  </span>
                  <img
                    v-else-if="$iconMap[technology].img"
                    :src="$iconMap[technology].img"
                    :alt="$iconMap[technology].name"
                  />
                </span>
              </div>
              <p>
                {{ project.description }}
              </p>
            </div>
            <footer class="card-footer">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="card-footer-item"
              >
                <span class="has-text-weight-bold">Visit</span>
                <span class="icon is-small ml-2">
                  <i class="fas fa-globe"></i>
                </span>
              </a>
              <a :href="project.github" target="_blank" rel="noopener noreferrer" class="card-footer-item">
                <span class="has-text-weight-bold">Code</span>
                <span class="icon is-small ml-2">
                  <i class="fas fa-code"></i>
                </span>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Project {
  name: string;
  img: ImageMap;
  description: string;
  technologies: string[];
  link?: string;
  github: string;
}

type ImageMap = {
  [key in "webp" | "jpg"]: {
    480: HTMLImageElement;
    960: HTMLImageElement;
  };
};

export default defineComponent({
  data() {
    return {
      projects: [
        {
          name: "ETHIQUABLE",
          img: {
            webp: {
              960: require("@/assets/img/projects/ethiquable-960.webp"),
              480: require("@/assets/img/projects/ethiquable-480.webp")
            },
            jpg: {
              960: require("@/assets/img/projects/ethiquable-960.jpg"),
              480: require("@/assets/img/projects/ethiquable-480.jpg")
            }
          },
          description:
            "ETHIQUABLE Deutschland e.G. maintains alliances with Fair Trade farmers all around the world and sells organic products in Germany, Austria and Switzerland.",
          technologies: ["vue", "vuetify", "leaflet", "wordpress", "prestashop"],
          link: "https://www.ethiquable.de",
          github: "https://github.com/therichkid/ethiquable"
        },
        {
          name: "BayCIV",
          img: {
            webp: {
              960: require("@/assets/img/projects/bayciv-960.webp"),
              480: require("@/assets/img/projects/bayciv-480.webp")
            },
            jpg: {
              960: require("@/assets/img/projects/bayciv-960.jpg"),
              480: require("@/assets/img/projects/bayciv-480.jpg")
            }
          },
          description:
            "BayCIV e.V. is an association of 29 support groups in Bavaria. Their aim is to inform about cochlear implants, a hearing aid and support hearing impaired people.",
          technologies: ["vue", "vuetify", "leaflet", "wordpress"],
          link: "https://www.bayciv.de",
          github: "https://github.com/therichkid/bayciv"
        },
        {
          name: "NH Bayern",
          img: {
            webp: {
              960: require("@/assets/img/projects/nh-bayern-960.webp"),
              480: require("@/assets/img/projects/nh-bayern-480.webp")
            },
            jpg: {
              960: require("@/assets/img/projects/nh-bayern-960.jpg"),
              480: require("@/assets/img/projects/nh-bayern-480.jpg")
            }
          },
          description:
            "Netzwerk Hörbehinderung Bayern is an union of support groups that represents the interest of hearing impaired people in Bavaria.",
          technologies: ["vue", "vuetify", "wordpress"],
          link: "https://www.nh-bayern.de",
          github: "https://github.com/therichkid/nh-bayern"
        },
        {
          name: "Portfolio",
          img: {
            webp: {
              960: require("@/assets/img/projects/portfolio-960.webp"),
              480: require("@/assets/img/projects/portfolio-480.webp")
            },
            jpg: {
              960: require("@/assets/img/projects/portfolio-960.jpg"),
              480: require("@/assets/img/projects/portfolio-480.jpg")
            }
          },
          description:
            "The website you are currently visiting was created with Vue 3. The project includes Firebase functions for saving contact requests to a realtime database and sending Emails with basic spam protection. It also utilizes Progressive Web App features like offline caching.",
          technologies: ["ts", "vue", "bulma", "firebase", "pwa"],
          github: "https://github.com/therichkid/portfolio"
        },
        {
          name: "Contao-to-WordPress Converter",
          img: {
            webp: {
              960: require("@/assets/img/projects/code-960.webp"),
              480: require("@/assets/img/projects/code-480.webp")
            },
            jpg: {
              960: require("@/assets/img/projects/code-960.jpg"),
              480: require("@/assets/img/projects/code-480.jpg")
            }
          },
          description: "Node script to transform content exported as .csv from Contao 3.x to WordPress.",
          technologies: ["node", "wordpress"],
          github: "https://github.com/therichkid/content-transformer-contao-to-wordpress"
        }
      ] as Project[]
    };
  }
});
</script>

<style lang="scss" scoped>
.technologies img {
  max-height: 24px;
  width: auto;
}
.technologies .icon > svg {
  height: 24px;
}
</style>
