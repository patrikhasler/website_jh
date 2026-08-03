import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App, { getSeoForPath, SEO_BY_PATH, SITE_ORIGIN } from "./App";
import "./index.css";

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (typeof window !== "undefined") {
  const root = document.getElementById("root")!;
  if (root.hasChildNodes()) {
    hydrateRoot(root, app);
  } else {
    createRoot(root).render(app);
  }
}

export async function prerender({ url }: { url: string }) {
  const { renderToString } = await import("react-dom/server");
  const path = new URL(url, SITE_ORIGIN).pathname;
  const seo = getSeoForPath(path);
  const html = renderToString(
    <React.StrictMode>
      <App initialPath={path} />
    </React.StrictMode>
  );

  return {
    html,
    links: new Set(Object.keys(SEO_BY_PATH)),
    head: {
      lang: "en",
      title: seo.title,
      elements: new Set([
        { type: "meta", props: { name: "description", content: seo.description } },
        { type: "link", props: { rel: "canonical", href: `${SITE_ORIGIN}${seo.canonicalPath}` } },
        { type: "meta", props: { property: "og:title", content: seo.title } },
        { type: "meta", props: { property: "og:description", content: seo.description } },
        { type: "meta", props: { property: "og:url", content: `${SITE_ORIGIN}${seo.canonicalPath}` } },
        { type: "meta", props: { name: "twitter:title", content: seo.title } },
        { type: "meta", props: { name: "twitter:description", content: seo.description } }
      ])
    }
  };
}
