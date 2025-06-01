import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  plugins: [react(), ghPages()],
  base: "/yikes-ui/",
  esbuild: {
    jsxFactory: "styled",
    jsxFragment: "styled.Fragment",
  },
});
