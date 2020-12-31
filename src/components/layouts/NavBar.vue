<template>
  <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        @click="isMenuOpen = !isMenuOpen"
        class="navbar-burger"
        :class="{ 'is-active': isMenuOpen }"
        role="button"
        aria-label="main menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
      <div class="navbar-start" style="margin: 0 auto">
        <a
          v-for="item in navItems"
          :key="item.id"
          @click="isMenuOpen = false"
          :href="item.href || `#${item.id}`"
          class="navbar-item"
          :class="{ 'is-active': activeItem === item.id }"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import helpers from "@/mixins/helpers";

interface NavItem {
  id: string;
  href?: string;
  name: string;
}

export default defineComponent({
  mixins: [helpers],

  data() {
    return {
      isMenuOpen: false,
      navItems: [
        {
          id: "about-me",
          name: "About Me"
        },
        {
          id: "skills",
          name: "Skills"
        },
        {
          id: "projects",
          name: "Projects"
        },
        {
          id: "contact",
          name: "Contact"
        }
      ] as NavItem[],
      activeItem: "about-me" as string
    };
  },

  methods: {
    setActiveItem(): void {
      this.activeItem = this.navItems.map(item => item.id).find(this.isInView) || this.activeItem;
    }
  },

  mounted() {
    window.addEventListener("scroll", this.setActiveItem);
  },

  unmounted() {
    window.removeEventListener("scroll", this.setActiveItem);
  }
});
</script>

<style></style>
