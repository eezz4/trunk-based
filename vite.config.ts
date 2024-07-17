import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const scriptArgObj = (() => {
  const scriptArgObj: Record<string, string> = {};

  console.log("process.argv::: ", process.argv);
  const index = process.argv.indexOf("--");
  if (index === -1) return scriptArgObj;

  const scriptArgs = process.argv.slice(process.argv.indexOf("--") + 1);

  scriptArgs.forEach((scriptArg) => {
    const [key, value] = scriptArg.split(":");
    scriptArgObj[key] = value.trim();
  });
  return scriptArgObj;
})();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": scriptArgObj,
  },
});
