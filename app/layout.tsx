import './globals.css'

import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { Footer, Header } from './components'

const notoSans = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Fun with flags',
  description: 'Flags of the world',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} flex h-screen flex-col gap-8 p-8 antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
