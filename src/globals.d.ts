import type { Router } from "vue-router";

// Global Vue composition API functions
declare global {
	const ref: typeof import("vue")["ref"];
	const onMounted: typeof import("vue")["onMounted"];
	const computed: typeof import("vue")["computed"];
	const watch: typeof import("vue")["watch"];
	const reactive: typeof import("vue")["reactive"];
	const toRefs: typeof import("vue")["toRefs"];
	const nextTick: typeof import("vue")["nextTick"];
	const router: Router;
	const DateTime: typeof import("luxon")["DateTime"];
}
