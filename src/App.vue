<template>
  <ContactForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactForm from "./components/ContactForm.vue";

export default defineComponent({
  name: "App",
  components: {
    ContactForm
  }
});
</script>

<style lang="scss">
@import "./styles/bulma.scss";
</style>
