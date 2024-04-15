import '~/styles/globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { Inter } from 'next/font/google'
import { extractRouterConfig } from 'uploadthing/server'
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
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
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
          <TopNav />

          {children}

          {modal}

          <div id="modal-root" />
        </ClerkProvider>
      </body>
    </html>
  )
}
