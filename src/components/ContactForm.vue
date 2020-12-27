<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2 is-capitalized">Contact Me</h2>

      <form @submit="submitForm">
        <div class="columns">
          <div class="column is-mobile">
            <div class="field">
              <div class="control has-icons-left">
                <input type="text" v-model="name" class="input" placeholder="Name" required />
                <span class="icon is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="column is-mobile">
            <div class="field">
              <div class="control has-icons-left">
                <input type="text" v-model="company" class="input" placeholder="Company" />
                <span class="icon is-left">
                  <i class="fa fa-industry"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-mobile">
            <div class="field">
              <div class="control has-icons-left">
                <input type="email" v-model="email" class="input" placeholder="Email" required />
                <span class="icon is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="column is-mobile">
            <div class="field">
              <div class="control has-icons-left">
                <input type="tel" v-model="phone" class="input" placeholder="Phone" />
                <span class="icon is-left">
                  <i class="fa fa-mobile"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <textarea v-model="message" rows="5" class="textarea" placeholder="Message"></textarea>
        </div>
        <button type="submit" class="button is-primary is-size-5">Submit</button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import firebase from "firebase/app";
import "firebase/database";

export default defineComponent({
  data() {
    return {
      name: "" as string,
      company: "" as string,
      email: "" as string,
      phone: "" as string,
      message: "" as string,
      firebaseConfig: {
        apiKey: "AIzaSyDshb7QcYmPQ3TCMKgrYIgGBb0aMO1lPj8",
        databaseURL: "https://portfolio-1e5a5-default-rtdb.firebaseio.com/"
      }
    };
  },

  methods: {
    initFirebase() {
      (firebase as any).initializeApp(this.firebaseConfig);
    },

    submitForm(event: Event): void {
      event.preventDefault();
      const data = {
        name: this.name,
        company: this.company,
        email: this.email,
        phone: this.phone,
        message: this.message
      };
      firebase
        .database()
        .ref("contact-form")
        .push(data);
    }
  },

  mounted() {
    this.initFirebase();
  }
});
</script>

<style></style>
