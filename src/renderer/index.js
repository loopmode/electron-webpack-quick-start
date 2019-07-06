import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";

Vue.use(BootstrapVue);

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App)
});
