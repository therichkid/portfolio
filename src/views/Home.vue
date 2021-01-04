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
import NavBar from "@/components/layouts/NavBar.vue";
import Footer from "@/components/layouts/Footer.vue";
import AboutMe from "@/components/AboutMe.vue";
import ContactForm from "@/components/ContactForm.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";

export default defineComponent({
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

<style></style>
