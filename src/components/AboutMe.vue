<template>
  <div style="height: 52px" id="about-me"></div>
  <section class="hero is-primary has-background">
    <picture class="hero-background is-transparent is-darker">
      <source
        :srcset="`${bgImg.webp['1920']} 1920w, ${bgImg.webp['1280']} 1280w, ${bgImg.webp['480']} 720w`"
        type="image/webp"
      />
      <source
        :srcset="`${bgImg.jpg['1920']} 1920w, ${bgImg.jpg['1280']} 1280w, ${bgImg.jpg['480']} 720w`"
        type="image/jpeg"
      />
      <img class="hero-background-img" :src="bgImg.jpg['720']" alt="Lake Turgoyak" />
    </picture>

    <div class="hero-body">
      <div class="container has-text-centered">
        <figure class="image is-128x128 is-inline-block ">
          <img
            class="is-rounded has-background-primary"
            src="@/assets/img/avatar.png"
            alt="Avatar"
            width="128"
            height="128"
          />
        </figure>
        <h1 class="title is-size-1 pt-5 pb-2">
          {{ title.current || "&nbsp;" }}
          <span v-if="!subtitle.current.length && !animationFinished" class="blinking-cursor">|</span>
        </h1>
        <h2 class="subtitle is-size-3">
          {{ subtitle.current || "&nbsp;" }}
          <span v-if="subtitle.current.length && !animationFinished" class="blinking-cursor">|</span>
        </h2>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container is-max-desktop">
      <div class="content has-text-justified is-size-5">
        <p>
          I am a <b>Frontend</b> developer with knowledge in Design and Backend technologies living in Munich, Germany.
          I love to code in <b>TypeScript</b> and utilize <b>Angular</b> and <b>Vue</b> for my projects. I am naturally
          curious and always eager to learn new technologies.
        </p>
        <p>
          I have a Master's degree in Geoinformatics and work for <b>European Computer Telecoms</b>, a Software company
          specialized in telecommunications. In addition, I design, create and maintain Web projects for multiple
          satisfied clients with my own company, <b>Thrive Media</b>.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Title {
  current: string;
  full: string;
}

type ImageMap = {
  [key in "webp" | "jpg"]: {
    1920: NodeRequire;
    1280: NodeRequire;
    480: NodeRequire;
  };
};

export default defineComponent({
  data() {
    return {
      title: {
        current: "",
        full: "Hi, I'm Richard Zille."
      } as Title,
      subtitle: {
        current: "",
        full: "I am a Web Developer."
      } as Title,
      animationFinished: false,
      bgImg: {
        webp: {
          1920: require("@/assets/img/hero/lake-turgoyak-1920.webp"),
          1280: require("@/assets/img/hero/lake-turgoyak-1280.webp"),
          480: require("@/assets/img/hero/lake-turgoyak-480.webp")
        },
        jpg: {
          1920: require("@/assets/img/hero/lake-turgoyak-1920.jpg"),
          1280: require("@/assets/img/hero/lake-turgoyak-1280.jpg"),
          480: require("@/assets/img/hero/lake-turgoyak-480.jpg")
        }
      }
    };
  },

  methods: {
    async addTextAnimations(titles: Title[]): Promise<void> {
      for (const title of titles) {
        await new Promise<void>(resolve => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
        await this.addCharacters(title);
      }
      setTimeout(() => {
        this.animationFinished = true;
      }, 5000);
    },

    addCharacters(title: Title): Promise<void> {
      return new Promise(resolve => {
        const interval = setInterval(() => {
          const { current, full } = title;
          if (current.length < full.length) {
            let currentChar = full[current.length];
            if (currentChar === " ") {
              currentChar += full[current.length + 1];
            }
            title.current += currentChar;
          } else {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      });
    }
  },

  mounted() {
    this.addTextAnimations([this.title, this.subtitle]);
  }
});
</script>

<style lang="scss" scoped>
.hero.has-background {
  position: relative;
  overflow: hidden;

  .hero-background {
    position: absolute;
    height: 100%;
    width: 100%;

    &.is-transparent {
      opacity: 0.75;
    }

    &.is-darker {
      filter: brightness(50%);
    }

    .hero-background-img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
}

.blinking-cursor {
  font-weight: 100 !important;
  animation: 1.5s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: $text;
  }
}
</style>
