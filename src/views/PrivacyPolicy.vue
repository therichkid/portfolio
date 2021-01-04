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
          spam prevention. The technically required Google Firebase services collect additional
          <a href="#third-party-services">personal user data</a>. I do not use cookies or additional third party
          services that may collect information about visitors.
        </p>
        <h2 class="is-size-4">Where does the information go?</h2>
        <p>
          The information you enter into the contact form is sent as an email that only I am allowed to access. The
          information is also stored in a database for backup and later reference purposes. The server for the Firebase
          Realtime Database is located in Belgium, EU. The website is hosted on Firebase Hosting in the United States.
        </p>
        <h2 class="is-size-4">How long do I keep the information?</h2>
        <p>
          I don't set a particular time limit on storing information because I might need it for future reference. If
          you want your information to be removed from my database, please contact me. I will remove it anytime there
          are concerns about your privacy.
        </p>
        <h2 class="is-size-4">Do I share the information with other parties?</h2>
        <p>No.</p>
        <h2 class="is-size-4 anchor" id="third-party-services">Which third party services do I use?</h2>
        <p>
          I use services from Google Firebase that are technically required for running the website. These services
          store additional personal user data.
        </p>
        <h3 class="is-size-5">Firebase Functions</h3>
        <ul>
          <li>
            Purpose: Run backend code to send notification emails to me and invoke database requests to store the data
            when a contact form was submitted.
          </li>
          <li>Location: Belgium, EU.</li>
          <li>
            Personal user data: IP addresses to execute event-handling functions and HTTP functions based on end-user
            actions.
          </li>
          <li>Retention: Temporarily.</li>
        </ul>
        <h3 class="is-size-5">Firebase Hosting</h3>
        <ul>
          <li>Purpose: Host the website and provide the content via a content delivery network (CDN).</li>
          <li>Location: United States.</li>
          <li>
            Personal user data: IP addresses of incoming requests to detect abuse and provide analysis of usage data.
          </li>
          <li>Retention: A few months.</li>
        </ul>
        <h3 class="is-size-5">Firebase Realtime Database</h3>
        <ul>
          <li>Purpose: Store contact form data in a database.</li>
          <li>Location: Belgium, EU.</li>
          <li>
            Personal user data: IP addresses and user agents to enable the profiler tool to understand usage trends and
            platform breakdowns.
          </li>
          <li>Retention: A few days.</li>
        </ul>
        <p>
          Firebase is certified under the privacy and security standards ISO 27001, SOC 1, SOC 2 and SOC 3 and is
          committed to having a lawful basis for data transfers in compliance with the EU General Data Protection
          Regulation (GDPR). You can find more information about the privacy policy of Firebase, including more detailed
          information about data processing and the support for GDPR
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
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
