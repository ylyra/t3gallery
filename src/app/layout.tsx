import '~/styles/globals.css'

import { Inter } from 'next/font/google'
import { Providers } from '~/providers'
import { TopNav } from './_components/top-nav'

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
        <Providers>
          <div className="grid h-screen grid-rows-[auto,1fr] gap-4">
            <TopNav />

            <main className="overflow-y-scroll pb-8">{children}</main>
          </div>

          {modal}

          <div id="modal-root" />
        </Providers>
      </body>
    </html>
  )
}
