<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="button is-large is-text"
        >
          <span class="icon is-large" :title="link.name">
            <i :class="`${link.icon} fa-2x`"></i>
          </span>
        </a>
      </p>

      <p class="pt-5 has-text-grey-lighter is-size-7">
        Hero Background Image by
        <a href="https://unsplash.com/@betagamma" target="_blank" rel="noopener noreferrer">Daniil Silantev</a> on
        <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>. Avatar created with
        <a href="https://avatarmaker.com/" target="_blank" rel="noopener noreferrer">Avatar Maker</a>.
      </p>

      <p>
        &copy; {{ new Date().getFullYear() }} &minus;
        <strong>Richard Zille</strong>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Link {
  name: string;
  href: string;
  icon: string;
}

export default defineComponent({
  data() {
    return {
      links: [
        {
          name: "GitHub",
          href: "https://github.com/therichkid",
          icon: "fab fa-github"
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/richard-zille/",
          icon: "fab fa-linkedin"
        }
      ] as Link[]
    };
  }
});
</script>

<style></style>
