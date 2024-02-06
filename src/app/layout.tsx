import './globals.css';

import { Header } from '@/components/shared';
import { Providers } from './providers/themes';
import { Poppins } from "next/font/google"

export const metadata = {
  title: 'Vitor - Portfolio',
  description: 'My portfolio',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
