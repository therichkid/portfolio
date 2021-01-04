<template>
  <a :href="to" @click.prevent="goTo">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { ComponentPublicInstance, defineComponent } from "vue";

interface CustomComponentPublicInstance extends ComponentPublicInstance {
  currentRoute: string;
}

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true
    }
  },

  methods: {
    goTo(): void {
      (this.$root as CustomComponentPublicInstance).currentRoute = this.to;
      window.history.pushState(null, "", this.to);
    }
  }
});
</script>
