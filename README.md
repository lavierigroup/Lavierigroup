# Lavieri Group — Next.js website

Rebuild of the existing Wix navigation and content structure for Vercel.

## Pages

Home, Book Online, Shop (with working category and price controls), four service detail pages, three service listings, Portfolio with two photo collections and keyboard-accessible photo viewer, Insights with two adapted articles, Notifications, and five information pages. Existing public URLs are retained. The memorabilia gallery includes Luca’s SEGA F355 Challenge 2 photograph.

## Run and deploy

Node.js 20.9 or later. Run `npm ci`, `npm run dev`, and `npm run build`. Import this repository into Vercel with the Next.js preset. No environment variables required.

## Contact and transaction behavior

Appointment and service forms validate required fields, then prepare a draft in the visitor’s email app. The visitor must send it. There is no backend email delivery, calendar integration, online checkout, customer login, or member notifications system. Service prices are carried over from the public Wix listings; scope, availability, and final price are confirmed directly. Footer updates link prepares an email request, not an automatic newsletter subscription. WhatsApp points to the business number published on the old site. No fake success messages, inventory claims, reviews, or checkout are included.

## SEO and content

Pages render at build time with route-specific titles, descriptions, canonical links, social metadata, breadcrumbs, Organization / Service / Article structured data and visible service FAQs. Sitemap and robots files are generated. Public llms.txt gives a concise source map; it does not guarantee AI citations. Utility and policy pages are noindexed except the accessibility statement.

60 optimized images were migrated from the existing Wix site. `lib/assets.json` records their source URLs and dimensions. Assets are served locally, so they do not depend on Wix hosting. Existing long-form Insights posts are adapted to concise summaries with the same article URLs. Original Wix social links pointed to Wix’s accounts and were omitted. Wix policy pages contained unfilled templates, so they were replaced with concise information matching the actual inquiry-only site behavior. The owner should confirm contact information, prices, and business policies before the domain switch.

## Domain migration

The code does not change DNS. Keep Wix active until this deployment is checked. Add both www.lavierigroup.com and lavierigroup.com in Vercel, follow its current DNS values, and preserve all mail MX/TXT records. Canonicals target https://www.lavierigroup.com. Existing principal navigation, services, products, posts, portfolio collection, and policy URLs are retained. Shop, services, and the old cart path have explicit redirects. Old Wix checkout, accounts, private booking data, and customer notifications are not migrated.
