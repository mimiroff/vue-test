import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import router from "./router";
import store from "./store";

Vue.use(VueResource);
Vue.http.options.root = "https://test65-6739e.firebaseio.com/";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
