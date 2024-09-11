// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";
import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), clerk()],
  output: "server",
  adapter: vercel(),
});
