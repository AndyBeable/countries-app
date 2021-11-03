import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./styles/App.scss";

import Home from "./pages/Home.vue";
import Details from "./pages/Details.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faMoon,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch);
library.add(faMoon);
library.add(faLongArrowAltLeft);

Vue.use(VueRouter);
Vue.component("font-awesome-icon", FontAwesomeIcon);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    { name: "details", path: "/:code", component: Details },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
