import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import SignView from "../views/SignView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/sign",
      name: "sign",
      component: SignView,
    },
  ],
});

export default router;
