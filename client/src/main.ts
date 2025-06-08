import { createPinia } from "pinia";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import "vuetify/styles";

import App from "./App.vue";
import "./assets/main.css";
import router from "./router";

const vuetify = createVuetify();
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
