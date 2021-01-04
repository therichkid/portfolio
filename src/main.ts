import { createApp } from "vue";
import App from "./App.vue";
import RouterLink from "./components/partials/RouterLink.vue";
import IconLibrary from "./plugins/icon-library";

const app = createApp(App);
app.component("router-link", RouterLink);
app.use(IconLibrary);
app.mount("#app");
