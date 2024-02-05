import './globals.css';

import { Header } from '@/components/shared';
import { Providers } from './providers/themes';

export const metadata = {
  title: 'Vitor - Portfolio',
  description: 'My portfolio',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
