import './globals.css'
import Head from 'next/head'
import Script from 'next/script'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
            strategy="lazyOnload"
            crossOrigin="anonymous"
          />
        </head>

      <body>{children}</body>
    </html>
  )
}
