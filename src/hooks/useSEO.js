import { useEffect } from "react";

/**
 * ══════════════════════════════════════════════════════════════════
 *  useSEO — Phase 2 Production SEO Hook
 *  MackysTech | mackystech.in
 * ══════════════════════════════════════════════════════════════════
 *
 * Per-route dynamic injection of:
 *  ✅ <title>
 *  ✅ meta description, robots, author
 *  ✅ Canonical URL
 *  ✅ Open Graph (og:*) — Facebook, LinkedIn, WhatsApp
 *  ✅ Twitter Cards (name="twitter:*") — correct attribute!
 *  ✅ BreadcrumbList JSON-LD (auto-generated from canonical)
 *  ✅ Page-specific JSON-LD schema (optional override)
 *  ✅ GA4 page_view event (SPA route tracking)
 *
 * @param {Object}  options
 * @param {string}  options.title        - Page title for <title> + OG + Twitter
 * @param {string}  options.description  - Meta description (max 155 chars)
 * @param {string}  options.canonical    - Full canonical URL for this page
 * @param {string}  [options.image]      - OG/Twitter image (1200×630 px ideal)
 * @param {string}  [options.type]       - OG type: "website" | "article" (default: website)
 * @param {string}  [options.robots]     - Robots directive (default: index/follow + max-snippet)
 * @param {Object}  [options.schema]     - Page-specific JSON-LD (overrides auto breadcrumb)
 * @param {Array}   [options.breadcrumbs]- Custom breadcrumb trail [{name, url}]
 */

const SITE_NAME    = "Macky's Tech";
const BASE_URL     = "https://www.mackystech.in";
const DEFAULT_IMG  = `${BASE_URL}/assets/logo.jpeg`;
const DEFAULT_ROBOTS = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

/* ── Label map for auto-breadcrumb generation ──────────────── */
const ROUTE_LABELS = {
  "":              "Home",
  services:        "Services",
  products:        "Products",
  projects:        "Projects",
  about:           "About Us",
  team:            "Our Team",
  contact:         "Contact",
  career:          "Career",
  jobs:            "Job Openings",
  internship:      "Internship",
  blog:            "Blog",
  tutorials:       "Tutorials",
  documentation:   "Documentation",
  community:       "Community",
  privacy:         "Privacy Policy",
  terms:           "Terms of Service",
  faq:             "FAQ",
  "internship-form": "Apply for Internship",
  verify:          "Verify Certificate",
};

/**
 * Auto-generate BreadcrumbList JSON-LD from a canonical URL.
 * e.g. "https://www.mackystech.in/about" →
 *   Home > About Us
 */
function buildBreadcrumb(canonical, customTrail) {
  const path      = new URL(canonical).pathname;         // "/about"
  const segments  = path.split("/").filter(Boolean);     // ["about"]

  // Build trail array: always starts with Home
  const trail = [{ name: "Home", url: BASE_URL + "/" }];

  if (customTrail && customTrail.length) {
    customTrail.forEach((item) => trail.push(item));
  } else {
    let accumulated = BASE_URL;
    segments.forEach((seg) => {
      accumulated += `/${seg}`;
      trail.push({
        name: ROUTE_LABELS[seg] || seg.charAt(0).toUpperCase() + seg.slice(1),
        url:  accumulated,
      });
    });
  }

  return {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type":    "ListItem",
      position:   i + 1,
      name:       item.name,
      item:       item.url,
    })),
  };
}

export function useSEO({
  title,
  description,
  canonical,
  image       = DEFAULT_IMG,
  type        = "website",
  robots      = DEFAULT_ROBOTS,
  schema      = null,
  breadcrumbs = null,   // optional custom trail [{name, url}]
}) {
  useEffect(() => {

    /* ── 1. <title> ──────────────────────────────────────── */
    document.title = title;

    /* ── 2. Helper: set / create <meta> ──────────────────── */
    const setMeta = (keyAttr, keyVal, content) => {
      let el = document.querySelector(`meta[${keyAttr}="${keyVal}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(keyAttr, keyVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    /* ── 3. Helper: set / create <link> ──────────────────── */
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    /* ── 4. Standard Meta Tags ───────────────────────────── */
    setMeta("name", "title",       title);
    setMeta("name", "description", description);
    setMeta("name", "robots",      robots);
    setMeta("name", "author",      SITE_NAME);

    /* ── 5. Canonical ────────────────────────────────────── */
    setLink("canonical", canonical);

    /* ── 6. Open Graph ───────────────────────────────────── */
    setMeta("property", "og:type",         type);
    setMeta("property", "og:site_name",    SITE_NAME);
    setMeta("property", "og:title",        title);
    setMeta("property", "og:description",  description);
    setMeta("property", "og:url",          canonical);
    setMeta("property", "og:image",        image);
    setMeta("property", "og:image:width",  "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:locale",       "en_IN");

    /* ── 7. Twitter Cards (name=, NOT property=) ─────────── */
    setMeta("name", "twitter:card",        "summary_large_image");
    setMeta("name", "twitter:site",        "@mackystech");
    setMeta("name", "twitter:creator",     "@mackystech");
    setMeta("name", "twitter:title",       title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:url",         canonical);
    setMeta("name", "twitter:image",       image);

    /* ── 8. JSON-LD: Breadcrumb + optional page schema ───── */
    const setSchema = (id, data) => {
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("script");
        el.id   = id;
        el.type = "application/ld+json";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data, null, 2);
    };

    const removeSchema = (id) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };

    // Breadcrumb (always inject on sub-pages, skip on homepage)
    const isHome = new URL(canonical).pathname === "/";
    if (!isHome) {
      setSchema("breadcrumb-schema-ld", buildBreadcrumb(canonical, breadcrumbs));
    } else {
      removeSchema("breadcrumb-schema-ld");
    }

    // Page-specific schema (optional — e.g. FAQPage, ContactPage, Person)
    if (schema) {
      setSchema("page-schema-ld", schema);
    } else {
      removeSchema("page-schema-ld");
    }

    /* ── 9. GA4 page_view (SPA route change tracking) ────── */
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_title:    title,
        page_location: canonical,
        page_path:     new URL(canonical).pathname,
      });
    }

  }, [title, description, canonical, image, type, robots, schema, breadcrumbs]);
}
