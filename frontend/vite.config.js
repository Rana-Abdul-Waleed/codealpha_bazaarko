import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/backend": {
        target: "http://localhost:8000",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
