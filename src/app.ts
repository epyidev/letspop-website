import {
  createApp as createClientApp,
  createSSRApp,
} from "vue";
import router from "./router";
import App from "./App.vue";
import { createHead } from "@vueuse/head";

export function createVueApp() {
  const appCreator = import.meta.env.SSR ? createSSRApp : createClientApp;
  const app = appCreator(App);

  // seo
  const head = createHead();
  head.push({
    titleTemplate: (title?: string) =>
      title ? `${title} | Let's PoP!` : "Let's PoP! - Digital Project Development Company | Propel Our Projects",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Let's PoP! is a digital project development company creating innovative solutions. Discover our projects: Game Workers Area, Lyre Scripts, Metropia, VASTE & C.A.L.E.I.",
      },
      { key: "keywords", name: "keywords", content: "Let's PoP, digital projects, FiveM, Minecraft, game development, French company, innovation, technology, VASTE, CALEI, Game Workers Area, Lyre Scripts, Metropia" },
      { key: "author", name: "author", content: "Let's PoP!" },
      { key: "robots", name: "robots", content: "index, follow" },
      { key: "language", name: "language", content: "en" },
      { key: "og:type", property: "og:type", content: "website" },
      { key: "og:site_name", property: "og:site_name", content: "Let's PoP!" },
      {
        key: "og:title",
        property: "og:title",
        content: "Let's PoP! - Digital Project Development Company",
      },
      {
        key: "og:description",
        property: "og:description",
        content:
          "Let's PoP! is a digital project development company creating innovative solutions. Discover our projects: Game Workers Area, Lyre Scripts, Metropia, VASTE & C.A.L.E.I.",
      },
      { key: "og:image", property: "og:image", content: "/og-letspop.jpg" },
      { key: "og:image:width", property: "og:image:width", content: "1200" },
      { key: "og:image:height", property: "og:image:height", content: "630" },
      { key: "og:image:alt", property: "og:image:alt", content: "Let's PoP! - Digital Project Development Company" },
      { key: "og:url", property: "og:url", content: "https://lets-pop.fr" },
      { key: "twitter:card", name: "twitter:card", content: "summary_large_image" },
      { key: "twitter:title", name: "twitter:title", content: "Let's PoP! - Digital Project Development Company" },
      { key: "twitter:description", name: "twitter:description", content: "Digital project development company creating innovative solutions. Game Workers Area, Lyre Scripts, Metropia, VASTE & C.A.L.E.I." },
      { key: "twitter:image", name: "twitter:image", content: "/og-letspop.jpg" },
      { name: "apple-mobile-web-app-title", content: "Let's PoP!" },
      { name: "application-name", content: "Let's PoP!" },
      { name: "msapplication-TileColor", content: "#328eee" },
      { name: "theme-color", content: "#328eee" },
    ],
    link: [
      { rel: "canonical", href: "https://lets-pop.fr/" },
      { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  });

  app.use(router);
  app.use(head);

  return { app, router, head };
} 