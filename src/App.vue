<template>
  <NavBar />

  <AboutMe />
  <Skills />
  <ContactForm />

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/layouts/NavBar.vue";
import Footer from "./components/layouts/Footer.vue";
import AboutMe from "./components/AboutMe.vue";
import ContactForm from "./components/ContactForm.vue";
import Skills from "./components/Skills.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Footer,
    AboutMe,
    ContactForm,
    Skills
  }
});
</script>

<style lang="scss">
.anchor::before {
  content: "";
  display: block;
  height: 100px;
  margin-top: -100px;
}
</style>
