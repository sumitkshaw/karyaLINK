import type { Metadata } from 'next';
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'KaryaLINK',
  description: 'KaryaLINK connects verified local professionals with right-fit customers in Delhi. Get trusted plumbers, electricians, tutors with verified backgrounds and community ratings.',
  keywords: 'KaryaLINK, Delhi plumbers, electricians Delhi, local services Delhi, verified professionals, trusted service providers',
  authors: [{ name: 'KaryaLINK' }],
  openGraph: {
    title: 'KaryaLINK - Verified Local Services in Delhi',
    description: 'Connecting verified local professionals with right-fit customers in Delhi',
    type: 'website',
    locale: 'en_IN',
    siteName: 'KaryaLINK',
    images: [
      {
        url: '/public/logo-mobile.png',
        width: 400,
        height: 400,
        alt: 'KaryaLINK Logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo-mobile.png',
    shortcut: '/logo-mobile.png',
    apple: '/logo-mobile.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo-mobile.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KaryaLINK - Verified Local Services in Delhi',
    description: 'Connecting verified local professionals with right-fit customers',
    images: ['/logo-mobile.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-mobile.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-mobile.png" />
        <link rel="canonical" href="https://karyalink.com" />
        <meta name="theme-color" content="#2563EB" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KaryaLINK",
              "description": "Trust-based local services platform connecting verified service providers with customers in Delhi",
              "url": "https://karyalink.com",
              "logo": "https://karyalink.com/logo-pc.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi NCR",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@karyalink.com",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://instagram.com/karyalink"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}