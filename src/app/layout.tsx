import './globals.css';

import { Header } from '@/components/shared';
import { Providers } from './providers/themes';
import { Poppins } from "next/font/google"

export const metadata = {
  title: 'Vitor Bretas Prata',
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
    <html lang="en" className={`${poppins.className} scroll-smooth`}>
      <body className='bg-gray-900 leading-relaxed text-slate-400 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
