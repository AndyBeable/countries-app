import Vue from "vue";
import App from "./App.vue";
import "./styles/App.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch);
library.add(faMoon);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
