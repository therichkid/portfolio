<script lang="ts">
import { Component, defineComponent, h } from "vue";

import Home from "@/views/Home.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";

export default defineComponent({
  components: {
    Home,
    PrivacyPolicy
  },

  data() {
    return {
      currentRoute: window.location.pathname
    };
  },

  computed: {
    viewComponent(): Component {
      const [route, hash] = this.currentRoute.split("#");
      if (hash) {
        this.scrollToHash(hash);
      } else {
        this.scrollToTop();
      }
      return this.getComponent(route);
    }
  },

  methods: {
    getComponent(route: string): Component {
      switch (route) {
        case "/":
          return Home;
        case "/privacy-policy":
          return PrivacyPolicy;
        default:
          window.history.replaceState(null, "", "/");
          return Home;
      }
    },
    scrollToHash(hash: string): void {
      setTimeout(() => {
        window.location.hash = hash;
      }, 50);
    },
    scrollToTop(): void {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
    }
  },

  render() {
    return h(this.viewComponent);
  },

  created() {
    window.addEventListener("popstate", () => {
      this.currentRoute = window.location.pathname;
    });
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
