import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'
import React from 'react'
import { PrimeReactProvider } from 'primereact/api'

const roboto = Roboto({ subsets: ['latin', 'cyrillic'], weight: ['400', '700', '900'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <PrimeReactProvider value={{ unstyled: false }}>
      <body className={ roboto.className }>
      { children }
      </body>
    </PrimeReactProvider>
    </html>
  )
}
