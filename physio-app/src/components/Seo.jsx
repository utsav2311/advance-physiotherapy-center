import { SITE } from '../data/site';

/**
 * Per-page SEO tags.
 *
 * React 19 hoists <title>, <meta>, and <link> rendered anywhere in the tree
 * up into the document <head> automatically — no react-helmet/context
 * provider needed. See https://react.dev/reference/react-dom/components/meta
 *
 * Note: this app is a client-rendered SPA (no SSR/prerendering), so these
 * tags are written to the DOM after the initial HTML loads. Modern crawlers
 * (Googlebot) execute JS and will see them, but simpler bots/link-preview
 * scrapers that only read raw HTML will still see the static tags from
 * index.html. For guaranteed per-route tags in raw HTML, a prerender or SSR
 * step (e.g. vite-plugin-ssr, react-snap) would be needed later.
 */
export default function Seo({
  title,
  description,
  path = '',
  image = '/images/clinic-signboard.webp',
  noindex = false,
}) {
  const fullTitle = title
    ? title.includes(SITE.name)
      ? title
      : `${title} | ${SITE.name}`
    : SITE.name;
  const canonical = `${SITE.url}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE.url}${image}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
}
