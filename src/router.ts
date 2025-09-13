import { createRouter, createWebHistory } from "vue-router";
import Dummy from "./modules/dummy.vue";

const routes = [{ path: "/", component: Dummy }];

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});
