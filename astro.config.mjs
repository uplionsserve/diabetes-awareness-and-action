import { defineConfig } from "astro/config"

import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
	integrations: [vue()],
	site: "https://uplionsserve.org",
	base: "/defense-against-diabetes",
	output: "static",
	outDir: "dist/defense-against-diabetes"
})
