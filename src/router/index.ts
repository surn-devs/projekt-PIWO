import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import SignView from "../views/SignView.vue";
import NotFound from "../views/NotFound.vue";
import CalendarView from "../views/CalendarView.vue";
import CreateEventView from "../views/CreateEventView.vue";
import FriendsView from "../views/FriendsView.vue";
import MapView from "../views/MapView.vue";
import RecomendedView from "../views/RecomendedView.vue";
import SpecialOfferView from "../views/SpecialOfferView.vue";

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
      component: CalendarView,
    },
    {
      path: "/CreateEvent",
      name: "CreateEvent",
      component: CreateEventView,
    },
    {
      path: "/Friends",
      name: "Friends",
      component: FriendsView,
    },
    {
      path: "/Map",
      name: "Map",
      component: MapView,
    },
    {
      path: "/Recomended",
      name: "Recomended",
      component: RecomendedView,
    },
    {
      path: "/SpecialOffer",
      name: "SpecialOffer",
      component: SpecialOfferView,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
