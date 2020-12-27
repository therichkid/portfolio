<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2 is-capitalized">Contact Me</h2>

      <form id="contact-form">
        <div class="columns">
          <div class="column is-mobile">
            <div class="field">
              <div class="control has-icons-left">
                <input type="text" name="name" id="name" class="input" placeholder="Name" required />
                <span class="icon is-left">
                  <i class="fa fa-user"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="column is-mobile">
            <div class="field">
              <div class="control has-icons-left">
                <input type="text" name="company" id="company" class="input" placeholder="Company" />
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
                <input type="email" name="email" id="email" class="input" placeholder="Email" required />
                <span class="icon is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="column is-mobile">
            <div class="field">
              <div class="control has-icons-left">
                <input type="tel" name="phone" id="phone" class="input" placeholder="Phone" />
                <span class="icon is-left">
                  <i class="fa fa-mobile"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <textarea name="message" id="message" rows="5" class="textarea" placeholder="Message"></textarea>
        </div>
        <button type="submit" class="button is-primary is-size-5">Submit</button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style></style>
