import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Capoeira Lecco | Grupo Geração Capoeira - Corsi a Cesana Brianza',
  description: 'Scopri la Capoeira a Lecco e provincia con Grupo Geração Capoeira. Corsi per adulti e ragazzi a Cesana Brianza. Prima lezione di prova gratuita! Unico gruppo ufficiale in provincia di Lecco.',
  keywords: 'Capoeira Lecco, Capoeira Cesana Brianza, corsi capoeira, arte marziale brasiliana, Geração Capoeira, Mestrando Penteado',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Capoeira Lecco | Grupo Geração Capoeira',
    description: 'Scopri la Capoeira a Lecco e provincia. Prima lezione di prova gratuita!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
