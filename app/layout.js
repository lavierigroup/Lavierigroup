import './globals.css';
const url = 'https://www.lavierigroup.com';
export const metadata = {
  metadataBase: new URL(url),
  title: 'Lavieri Group | Car Brokerage & Motorsport Memorabilia',
  description: 'Miami-based car brokerage, international vehicle sourcing and import-export coordination, motorsport memorabilia, and private chauffeur services.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Lavieri Group | Driven by passion. Connected worldwide.', description: 'Car brokerage, international sourcing and motorsport memorabilia. A personal connection to the extraordinary.', url, siteName: 'Lavieri Group', locale: 'en_US', type: 'website' },
  twitter: { card: 'summary', title: 'Lavieri Group', description: 'Car brokerage, international sourcing and motorsport memorabilia.' },
  robots: { index: true, follow: true }
};
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
