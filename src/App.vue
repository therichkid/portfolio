<template>
  <NavBar />

  <Skills />
  <ContactForm />

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/layouts/NavBar.vue";
import Footer from "./components/layouts/Footer.vue";
import ContactForm from "./components/ContactForm.vue";
import Skills from "./components/Skills.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Footer,
    ContactForm,
    Skills
  }
});
</script>

<style lang="scss">
@import "./assets/styles/bulma.scss";

.anchor::before {
  content: "";
  display: block;
  height: 52px;
  margin-top: -52px;
}
</style>
