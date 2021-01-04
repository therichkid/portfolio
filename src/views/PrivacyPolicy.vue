<template>
  <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand" style="margin: 0 auto">
      <router-link to="/" class="navbar-item" style="margin: 0 auto">
        <span class="icon is-small mr-2">
          <i class="fas fa-chevron-left"></i>
        </span>
        Back to Home
      </router-link>
    </div>
  </nav>

  <div style="height: 52px"></div>

  <section class="section">
    <h1 class="title has-text-centered is-size-2 anchor" id="contact">Privacy Policy</h1>

    <div class="container is-max-desktop">
      <div class="content has-text-justified is-size-5">
        <p>
          This page explains how the personal information I collect through
          <router-link to="/">Richard Zille</router-link> will be treated.
        </p>
        <h2 class="is-size-4">Who am I?</h2>
        <p>
          I am Richard Zille, a Web Developer living in Munich, Germany. You can find out more about me on the website
          you are currently <router-link to="/">visiting</router-link> as well as my
          <a href="https://www.linkedin.com/in/richard-zille" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          profile.
        </p>
        <h2 class="is-size-4">Why do I store information?</h2>
        <p>
          I store information to get in touch with visitors of my website through the contact form.
        </p>
        <h2 class="is-size-4">What information do I store?</h2>
        <p>
          I store user input data sent through the contact form on this website, along with meta information about the
          submissions. These are the time stamp and a timer on how long the visitor has been staying on this website for
          spam prevention. I do not use cookies or third party services that may collect additional information about
          visitors.
        </p>
        <h2 class="is-size-4">Where does the information go?</h2>
        <p>
          The information you enter into the contact form is sent as an email that only I am allowed to access. The
          information is also stored in a database on my hosting server for backup and later reference purposes. I use
          the
          <a href="https://firebase.google.com/docs/database" target="_blank" rel="noopener noreferrer"
            >Firebase Realtime Database</a
          >
          to store the information. The website is hosted on
          <a href="https://firebase.google.com/docs/hosting" target="_blank" rel="noopener noreferrer"
            >Firebase Hosting</a
          >.
        </p>
        <h2 class="is-size-4">How long do I keep the information?</h2>
        <p>
          I don't set a particular time limit on storing information because I might need it for future reference. If
          you want your information to be removed from my database, please contact me. I will remove it anytime there
          are concerns about your privacy.
        </p>
        <h2 class="is-size-4">Do I share the information with other parties?</h2>
        <p>No. All information is only handled by myself and not shared with anyone else.</p>
        <h2 class="is-size-4">How can you contact me?</h2>
        <p>You can contact me through the <router-link to="/#contact">contact form</router-link> on this website.</p>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/layouts/Footer.vue";

export default defineComponent({
  components: {
    Footer
  }
});
</script>

<style></style>
