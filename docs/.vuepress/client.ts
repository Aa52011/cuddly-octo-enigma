import SocialLink from "./components/SocialLink.js";
import { defineClientConfig } from "vuepress/client";
import { injectSpeedInsights } from "@vercel/speed-insights";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("SocialLink", SocialLink);
    // Initialize Vercel Speed Insights
    injectSpeedInsights();
  },
});
