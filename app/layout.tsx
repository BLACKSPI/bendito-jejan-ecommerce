//import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import { ModalProvider } from '@/providers/modal-provider'
import { ToasterProvider } from '@/providers/toast-provider'
//import prismadb from '@/lib/prismadb'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bendito Jejan Platform',
  description: 'Bendito E-commerce Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider/>
          <ModalProvider/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
