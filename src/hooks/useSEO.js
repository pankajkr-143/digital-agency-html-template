import { useEffect } from "react";

/**
 * useSEO — Dynamic SEO hook for every page
 * Updates: title, meta description, canonical, OG, Twitter, robots
 *
 * @param {Object} seo
 * @param {string} seo.title          - Page title (shown in browser tab + Google)
 * @param {string} seo.description    - Meta description (shown in Google snippet)
 * @param {string} seo.canonical      - Canonical URL for this page
 * @param {string} [seo.image]        - OG/Twitter image URL
 * @param {string} [seo.type]         - OG type: "website" | "article" (default: website)
 * @param {string} [seo.robots]       - Robots directive (default: "index, follow")
 * @param {Object} [seo.schema]       - JSON-LD schema object (optional, page-specific)
 */
const BASE_URL = "https://www.mackystech.in";
const DEFAULT_IMAGE = `${BASE_URL}/assets/logo.jpeg`;

export function useSEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = "website",
  robots = "index, follow",
  schema = null,
}) {
  useEffect(() => {
    // ── Title ──────────────────────────────────────────
    document.title = title;

    // ── Helper: set or create meta tag ─────────────────
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrVal] = selector
          .replace(/[\[\]]/g, "")
          .split("=")
          .map((s) => s.replace(/"/g, ""));
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // ── Helper: set or create link tag ─────────────────
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // ── Standard Meta Tags ─────────────────────────────
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", robots);
    setMeta('meta[name="title"]', "content", title);

    // ── Canonical URL ──────────────────────────────────
    setLink("canonical", canonical);

    // ── Open Graph ─────────────────────────────────────
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[property="og:type"]', "content", type);

    // ── Twitter Cards ──────────────────────────────────
    setMeta('meta[property="twitter:title"]', "content", title);
    setMeta('meta[property="twitter:description"]', "content", description);
    setMeta('meta[property="twitter:url"]', "content", canonical);
    setMeta('meta[property="twitter:image"]', "content", image);

    // ── Page-specific JSON-LD Schema ───────────────────
    const schemaId = "page-schema-ld";
    let schemaEl = document.getElementById(schemaId);

    if (schema) {
      if (!schemaEl) {
        schemaEl = document.createElement("script");
        schemaEl.id = schemaId;
        schemaEl.type = "application/ld+json";
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify(schema, null, 2);
    } else {
      // Remove page-specific schema if not needed
      if (schemaEl) schemaEl.remove();
    }

    // ── GA4: Update page title after meta update ───────
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_title: title,
        page_location: canonical,
        page_path: new URL(canonical).pathname,
      });
    }
  }, [title, description, canonical, image, type, robots, schema]);
}
