<template>
  <NavBar />

  <AboutMe />
  <Skills />
  <Projects />
  <ContactForm />

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/layouts/NavBar.vue";
import Footer from "./components/layouts/Footer.vue";
import AboutMe from "./components/AboutMe.vue";
import ContactForm from "./components/ContactForm.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Footer,
    AboutMe,
    ContactForm,
    Projects,
    Skills
  }
});
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.anchor::before {
  content: "";
  display: block;
  height: 100px;
  margin-top: -100px;
}
.overlay-icon {
  position: absolute;
  right: 5px;
  top: 5px;
  border-radius: 50%;
  opacity: 0.5;
}
</style>
