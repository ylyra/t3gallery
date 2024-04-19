import '~/styles/globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { Inter } from 'next/font/google'
import { extractRouterConfig } from 'uploadthing/server'
import { Toaster } from '~/components/ui/sonner'
import { TopNav } from './_components/top-nav'
import { ourFileRouter } from './api/uploadthing/core'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'T3 Gallery',
  description: 'A simple gallery app built with T3',
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable}`}>
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <ClerkProvider>
          <div className="grid h-screen grid-rows-[auto,1fr] gap-4">
            <TopNav />

            <main className="overflow-y-scroll pb-8">{children}</main>
          </div>

          {modal}

          <div id="modal-root" />

          <Toaster position="top-right" />
        </ClerkProvider>
      </body>
    </html>
  )
}
