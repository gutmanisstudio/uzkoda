import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yerevan Pandok — Armēņu virtuve Jūrmalā',
  description: 'Autentiska armēņu ēdienkarte. Mājīga atmosfēra pie jūras.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lv">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
