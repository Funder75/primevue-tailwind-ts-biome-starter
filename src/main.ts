import "./styles/main.css";
import "./styles/style.scss";
/* add fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Aura from "@primeuix/themes/aura";
import { DateTime } from "luxon";
import PrimeVue from "primevue/config";
import {
	computed,
	createApp,
	inject,
	nextTick,
	onMounted,
	provide,
	reactive,
	ref,
	toRefs,
	watch,
} from "vue";
import App from "./App.vue";
import router from "./router";
import ConfirmationService from "primevue/confirmationservice";

async function init() {
	const app = createApp(App);

	// Assign to global scope for script setup
	Object.assign(globalThis, {
		ref,
		onMounted,
		computed,
		watch,
		reactive,
		toRefs,
		nextTick,
		provide,
		inject,
		router,
		DateTime,
	});

	app.use(PrimeVue, {
		theme: {
			preset: Aura,
			options: {
				darkModeSelector: ".darkmode",
				cssLayer: {
					name: "primevue",
					order: "theme, base, primevue",
				},
			},
		},
		ripple: true,
	});
	app.use(router);
	app.use(ConfirmationService);
	app.component("FontAwesomeIcon", FontAwesomeIcon);

	library.add(fas, far);

	app.mount("#app");
}

init();
