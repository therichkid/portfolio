<template>
  <article :class="`message is-${alert.type === 'error' ? 'danger' : alert.type}`">
    <div class="message-header">
      <p class="is-capitalized">{{ alert.type }}</p>
      <button @click="$emit('close')" class="delete" aria-label="close"></button>
    </div>
    <div class="message-body">
      {{ alert.message }}
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Alert {
  type: "success" | "error";
  message: string;
}

export default defineComponent({
  emits: ["close"],

  props: {
    alert: {
      type: Object as PropType<Alert>,
      required: true
    }
  },

  data() {
    return {
      timeout: null as ReturnType<typeof setTimeout> | null
    };
  },

  watch: {
    alert: {
      immediate: true,
      handler() {
        if (this.alert.type === "success") {
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          this.timeout = setTimeout(() => {
            this.$emit("close");
          }, 5000);
        }
      }
    }
  }
});
</script>

<style></style>
