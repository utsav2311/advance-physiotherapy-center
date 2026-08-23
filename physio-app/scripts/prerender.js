import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const serverDir = path.resolve(rootDir, 'dist-server');

const routes = [
  '/',
  '/about',
  '/services',
  '/services/spine-back-pain',
  '/services/cervical-neck-care',
  '/services/knee-joint-arthritis',
  '/services/frozen-shoulder',
  '/services/electrotherapy',
  '/services/sports-rehabilitation',
  '/services/neurological-rehabilitation',
  '/services/posture-ergonomics',
  '/services/womens-health',
  '/services/pediatric-icu-care',
  '/process',
  '/gallery',
  '/reviews',
  '/faq',
  '/contact',
  '/404',
];

async function prerender() {
  console.log('🚀 Building SSR bundle for pre-rendering...');

  // 1. Build server entry
  await build({
    root: rootDir,
    build: {
      ssr: path.resolve(rootDir, 'src/entry-server.jsx'),
      outDir: serverDir,
      emptyOutDir: true,
      minify: false,
    },
    logLevel: 'warn',
  });

  // 2. Import the compiled server render function
  const serverEntryPath = path.resolve(serverDir, 'entry-server.js');
  const { render } = await import(pathToFileURL(serverEntryPath).href);

  // 3. Read client template HTML
  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client build template not found at ${templatePath}`);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  console.log(`⚡ Pre-rendering ${routes.length} static routes...`);

  for (const url of routes) {
    try {
      const { html: appHtml } = render(url);

      // Extract hoisted/rendered <title>, <meta>, <link canonical>, <script type="application/ld+json"> tags
      let titleMatch = appHtml.match(/<title>([^<]*)<\/title>/i);
      let pageTitle = titleMatch ? titleMatch[1] : '';

      // Extract all meta tags
      const metaTags = [];
      const metaRegex = /<meta\s+[^>]*>/gi;
      let metaMatch;
      while ((metaMatch = metaRegex.exec(appHtml)) !== null) {
        metaTags.push(metaMatch[0]);
      }

      // Extract canonical link
      const canonicalRegex = /<link\s+rel=["']canonical["']\s+[^>]*>/gi;
      let canonicalMatch = canonicalRegex.exec(appHtml);
      let canonicalTag = canonicalMatch ? canonicalMatch[0] : '';

      // Extract Schema.org JSON-LD scripts
      const jsonLdScripts = [];
      const jsonLdRegex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
      let jsonLdMatch;
      while ((jsonLdMatch = jsonLdRegex.exec(appHtml)) !== null) {
        jsonLdScripts.push(jsonLdMatch[0]);
      }

      // Clean the rendered HTML to avoid duplication of hoisted elements inside body
      let cleanedAppHtml = appHtml
        .replace(/<title>[^<]*<\/title>/gi, '')
        .replace(/<meta\s+[^>]*>/gi, '')
        .replace(/<link\s+rel=["']canonical["']\s+[^>]*>/gi, '')
        .replace(/<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, '');

      let finalHtml = template;

      // Replace Title if custom title was rendered
      if (pageTitle) {
        finalHtml = finalHtml.replace(/<title>.*?<\/title>/i, `<title>${pageTitle}</title>`);
      }

      // Inject custom meta tags and Schema.org scripts into <head>
      const headAdditions = [
        ...metaTags,
        canonicalTag,
        ...jsonLdScripts,
      ].filter(Boolean).join('\n    ');

      if (headAdditions) {
        finalHtml = finalHtml.replace('</head>', `  ${headAdditions}\n  </head>`);
      }

      // Inject rendered app HTML into #root
      finalHtml = finalHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${cleanedAppHtml}</div>`
      );

      // Determine output filepath
      let outPath;
      if (url === '/') {
        outPath = path.resolve(distDir, 'index.html');
      } else if (url === '/404') {
        outPath = path.resolve(distDir, '404.html');
      } else {
        const routeFolder = path.resolve(distDir, url.replace(/^\//, ''));
        fs.mkdirSync(routeFolder, { recursive: true });
        outPath = path.resolve(routeFolder, 'index.html');
      }

      fs.writeFileSync(outPath, finalHtml, 'utf-8');
      console.log(`  ✓ Rendered ${url} -> ${path.relative(distDir, outPath)}`);
    } catch (err) {
      console.error(`  ✗ Error rendering ${url}:`, err);
    }
  }

  // 4. Generate sitemap.xml
  const today = new Date().toISOString().split('T')[0];
  const sitemapUrls = routes
    .filter((r) => r !== '/404')
    .map((r) => {
      const loc = `https://www.advancephysiotherapycentre.in${r === '/' ? '' : r}`;
      const priority = r === '/' ? '1.0' : r.startsWith('/services/') ? '0.9' : '0.8';
      const changefreq = r.startsWith('/services/') ? 'weekly' : 'monthly';
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;

  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log('  ✓ Generated sitemap.xml');

  // 5. Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://www.advancephysiotherapycentre.in/sitemap.xml
`;
  fs.writeFileSync(path.resolve(distDir, 'robots.txt'), robotsTxt, 'utf-8');
  console.log('  ✓ Generated robots.txt');

  // 6. Clean up temporary SSR bundle folder
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
  }

  console.log('🎉 Static Site Generation (SSG / Prerendering) completed successfully!\n');
}

prerender().catch((err) => {
  console.error('Prerender build error:', err);
  process.exit(1);
});
