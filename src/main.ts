import { createApp } from "vue";
import App from "./App.vue";
import IconLibrary from "./plugins/icon-library";

const app = createApp(App);
app.use(IconLibrary);
app.mount("#app");
