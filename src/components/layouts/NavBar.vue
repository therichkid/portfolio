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
          :href="`#${item.id}`"
          class="navbar-item"
          :class="{ 'is-active': activeItem === item.id }"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>

  <div style="height: 52px"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface NavItem {
  id: string;
  name: string;
}

export default defineComponent({
  data() {
    return {
      isMenuOpen: false,
      navItems: [
        {
          id: "skills",
          name: "Skills"
        },
        {
          id: "contact-me",
          name: "Contact Me"
        }
      ] as NavItem[],
      activeItem: "skills" as string
    };
  },

  methods: {
    setActiveItem(): void {
      this.activeItem = this.navItems.map(item => item.id).find(this.isInView) || this.activeItem;
    },
    isInView(id: string): boolean {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      return false;
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
