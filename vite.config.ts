import { PrimeVueResolver } from "@primevue/auto-import-resolver";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
	server: {
		port: 3000,
		//https: true,
		cors: true,
	},
	plugins: [
		vue(),
		tailwindcss(),
		Components({
			resolvers: [PrimeVueResolver()],
		}),
	],
	build: {
		commonjsOptions: { transformMixedEsModules: true }, // Change
		sourcemap: mode === "development",
	},
}));
