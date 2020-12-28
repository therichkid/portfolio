<template>
  <NavBar />

  <Hero />
  <Skills />
  <ContactForm />

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/layouts/NavBar.vue";
import Footer from "./components/layouts/Footer.vue";
import Hero from "./components/Hero.vue";
import ContactForm from "./components/ContactForm.vue";
import Skills from "./components/Skills.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Footer,
    Hero,
    ContactForm,
    Skills
  }
});
</script>

<style lang="scss">
.anchor::before {
  content: "";
  display: block;
  height: 52px;
  margin-top: -52px;
}
</style>
