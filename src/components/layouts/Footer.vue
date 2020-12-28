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

      <p class="pt-5">
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
