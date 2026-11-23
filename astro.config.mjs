import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ["bastion-vnic.tail592753.ts.net"],
    },
  },
});
