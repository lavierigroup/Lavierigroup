# Lavieri Group — first version

A responsive Next.js App Router website, prepared for Vercel. Includes a homepage, service sections, email and phone inquiry links, canonical URL, social metadata, Organization JSON-LD, robots.txt, and sitemap.xml. No environment variables required.

## Deploy on Vercel

1. Import `lavierigroup/Lavierigroup` as a new Vercel project.
2. Select **Next.js** and leave the root directory at the repository root.
3. Use the default build command `npm run build` and output settings.
4. Deploy. Add `www.lavierigroup.com` and `lavierigroup.com` in Vercel Domains when ready to switch the live site. Follow Vercel's DNS instructions; preserve email DNS records.

Vercel previews should remain protected or non-indexable. Canonicals deliberately point to the final production domain. Domain migration is not performed by this code.

## Local development

Node.js 20.9+ (Node.js 22 LTS recommended).

```sh
npm install
npm run dev
```

## First version scope

Contact buttons open the visitor's email app; there is no server-side lead form or payment system. The displayed contact information comes from the existing public website and should be confirmed before launch. This first version does not migrate Wix booking, shop, policies, or old URLs. Full migration should include service pages, verified portfolio images, relevant URL redirects, policy review, and Search Console setup before replacing the Wix site. SEO foundations support crawling and understanding; rankings and AI citations are not guaranteed.
