<template>
  <section class="section">
    <h2 class="title has-text-centered is-size-2 anchor" id="contact">Contact Me</h2>

    <div class="container is-max-desktop">
      <div class="content has-text-justified is-size-5">
        Please use this form if you like to say hi! Don't hesitate to get in touch with me if you are looking for a new,
        professional website created with modern Web technologies.
      </div>

      <Alert v-if="showAlert" :alert="alert" @close="showAlert = false" />

      <form @submit="submitForm">
        <div class="columns">
          <div class="column is-mobile">
            <div class="field">
              <div class="control has-icons-left">
                <input type="text" v-model="data.name" class="input" placeholder="Name *" required aria-label="Name" />
                <span class="icon is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="column is-mobile">
            <div class="field">
              <div class="control has-icons-left">
                <input type="text" v-model="data.company" class="input" placeholder="Company" aria-label="Company" />
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
                <input
                  type="email"
                  v-model="data.email"
                  class="input"
                  placeholder="Email *"
                  required
                  aria-label="Email"
                />
                <span class="icon is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="column is-mobile">
            <div class="field">
              <div class="control has-icons-left">
                <input type="tel" v-model="data.phone" class="input" placeholder="Phone" aria-label="Phone" />
                <span class="icon is-left">
                  <i class="fa fa-mobile"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="field" id="hp">
          <div class="control">
            <input type="text" v-model="data.hp" class="input" placeholder="HP" aria-label="HP" />
          </div>
        </div>
        <div class="field">
          <textarea
            v-model="data.message"
            rows="5"
            class="textarea"
            placeholder="Message *"
            required
            aria-label="Message"
          ></textarea>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" required />
              <span class="pl-1">
                I agree that my personal data will be stored and processed for purposes stated in the
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>. *
              </span>
            </label>
          </div>
        </div>
        <p class="has-text-right has-text-grey is-size-7">* Required</p>
        <button type="submit" class="button is-primary is-medium mt-2" :class="{ 'is-loading': isLoading }">
          Submit
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Alert from "./partials/Alert.vue";

interface ContactData {
  name: string;
  company: string;
  email: string;
  phone: string;
  hp: string;
  message: string;
  date: string;
  timer: number;
}

interface AlertData {
  type: "success" | "error";
  message: string;
}

export default defineComponent({
  components: {
    Alert
  },

  data() {
    return {
      data: {} as ContactData,
      alert: {} as AlertData,
      showAlert: false,
      initTime: 0,
      isLoading: false
    };
  },

  methods: {
    submitForm(event: Event): void {
      event.preventDefault();

      this.showAlert = false;
      this.isLoading = true;
      this.data.date = new Date().toISOString();
      this.data.timer = Date.now() - this.initTime;

      const url = "https://europe-west1-portfolio-1e5a5.cloudfunctions.net/submit";
      // const debugUrl = "http://localhost:5001/portfolio-1e5a5/europe-west1/submit";

      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify(this.data)
      })
        .then(response => response.json())
        .then(response => {
          if (response.success) {
            this.alert = { type: "success", message: response.message };
            this.data = {} as ContactData;
          } else {
            this.alert = { type: "error", message: response.message };
          }
        })
        .catch(error => {
          console.error(error);
          this.alert = { type: "error", message: error };
        })
        .finally(() => {
          this.showAlert = true;
          this.isLoading = false;
        });
    }
  },

  mounted() {
    this.initTime = Date.now();
    const el = document.getElementById("hp");
    if (el) {
      el.style.display = "none";
    }
  }
});
</script>

<style></style>
