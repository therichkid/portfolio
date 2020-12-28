<template>
  <section class="hero is-primary has-background">
    <picture class="hero-background is-transparent is-darker">
      <source
        :srcset="`${bgImg.webp['1080']} 1920w, ${bgImg.webp['720']} 1280w, ${bgImg.webp['480']} 720w`"
        type="image/webp"
      />
      <source
        :srcset="`${bgImg.jpg['1080']} 1920w, ${bgImg.jpg['720']} 1280w, ${bgImg.jpg['480']} 720w`"
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
        <h1 class="title is-1 pt-5 pb-2">
          {{ title.current || "&nbsp;" }}
          <span v-if="!subtitle.current.length" class="blinking-cursor">|</span>
        </h1>
        <h2 class="subtitle is-3">
          {{ subtitle.current || "&nbsp;" }}
          <span v-if="subtitle.current.length" class="blinking-cursor">|</span>
        </h2>
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
      bgImg: {
        webp: {
          1080: require("@/assets/img/lake-turgoyak-1080.webp"),
          720: require("@/assets/img/lake-turgoyak-720.webp"),
          480: require("@/assets/img/lake-turgoyak-480.webp")
        },
        jpg: {
          1080: require("@/assets/img/lake-turgoyak-1080.jpg"),
          720: require("@/assets/img/lake-turgoyak-720.jpg"),
          480: require("@/assets/img/lake-turgoyak-480.jpg")
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
