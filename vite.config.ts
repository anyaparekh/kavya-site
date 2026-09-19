import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to a sub-path (e.g. GitHub Pages at /my-repo/), set base: "/my-repo/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
