import { defineConfig } from "astro/config"

import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
	integrations: [vue()],
	site: "https://uplionsserve.org",
	base: "/diabetes-awareness-and-action",
	output: "static",
	outDir: "dist/diabetes-awareness-and-action"
})
