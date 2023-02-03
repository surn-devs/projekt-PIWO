import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import SignView from "../views/SignView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/About",
      name: "About",
      component: AboutView,
    },
    {
      path: "/Sign",
      name: "Sign",
      component: SignView,
    },
    {
      path: "/Calendar",
      name: "Calendar",
      component: SignView,
    },
    {
      path: "/CreateEvent",
      name: "CreateEvent",
      component: SignView,
    },
    {
      path: "/Friends",
      name: "Friends",
      component: SignView,
    },
    {
      path: "/Map",
      name: "Map",
      component: SignView,
    },
    {
      path: "/Recomended",
      name: "Recomended",
      component: SignView,
    },
    {
      path: "/SpecialOffer",
      name: "SpecialOffer",
      component: SignView,
    },
  ],
});

export default router;
