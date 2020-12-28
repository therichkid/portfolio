<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2 anchor" id="contact-me">Contact Me</h2>

      <Alert v-if="showAlert" :alert="alert" @close="showAlert = false" />

      <form @submit="submitForm">
        <div class="columns">
          <div class="column is-mobile">
            <div class="field">
              <div class="control has-icons-left">
                <input type="text" v-model="data.name" class="input" placeholder="Name" required />
                <span class="icon is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="column is-mobile">
            <div class="field">
              <div class="control has-icons-left">
                <input type="text" v-model="data.company" class="input" placeholder="Company" />
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
                <input type="email" v-model="data.email" class="input" placeholder="Email" required />
                <span class="icon is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="column is-mobile">
            <div class="field">
              <div class="control has-icons-left">
                <input type="tel" v-model="data.phone" class="input" placeholder="Phone" />
                <span class="icon is-left">
                  <i class="fa fa-mobile"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="field" id="hp">
          <div class="control">
            <input type="text" v-model="data.hp" class="input" placeholder="HP" />
          </div>
        </div>
        <div class="field">
          <textarea v-model="data.message" rows="5" class="textarea" placeholder="Message"></textarea>
        </div>
        <button type="submit" class="button is-primary is-medium mt-3">Submit</button>
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

interface Alert {
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
      alert: {} as Alert,
      showAlert: false,
      initTime: 0
    };
  },

  methods: {
    submitForm(event: Event): void {
      event.preventDefault();
      this.data.date = new Date().toISOString();
      this.data.timer = Date.now() - this.initTime;

      fetch("http://localhost:5001/portfolio-1e5a5/us-central1/submit", {
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
        .finally(() => (this.showAlert = true));
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
