import Vue from "vue";
import Router from "vue-router";

import Tasks from "./components/Tasks";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "",
      name: "tasks",
      components: {
        default: Tasks
      }
    },
    {
      path: "/edit/:id",
      name: "edit",
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./components/Edit.vue")
    },
    {
      path: "/new",
      name: "new",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./components/New.vue")
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
