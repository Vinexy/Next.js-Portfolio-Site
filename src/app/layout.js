import './globals.css'
import Head from 'next/head'
import Script from 'next/script'
export const metadata = {
  title: 'Vinex',
  description: 'Published by Vinex',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
