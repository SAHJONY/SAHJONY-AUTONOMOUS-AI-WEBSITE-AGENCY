import './globals.css';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Sahjony AI – Premium AI Agency',
  description: 'Cinematic AI‑driven solutions for elite brands. Strategy, custom models, integration, and design.',
  openGraph: {
    title: 'Sahjony AI – Premium AI Agency',
    description: 'Cinematic AI‑driven solutions for elite brands.',
    url: 'https://sahjonyaiwebsiteagencysite.vercel.app',
    siteName: 'Sahjony AI',
    images: [{ url: '/opengraph-image.png' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="bg-gray-900 text-gray-100 antialiased">{children}</body>
    </html>
  );
}
