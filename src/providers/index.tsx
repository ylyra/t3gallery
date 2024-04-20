import { ClerkProvider } from '@clerk/nextjs'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { PropsWithChildren } from 'react'
import { extractRouterConfig } from 'uploadthing/server'
import { ourFileRouter } from '~/app/api/uploadthing/core'
import { Toaster } from '~/components/ui/sonner'
import { CSPostHogProvider } from './posthog'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />

        {children}
        <Toaster position="top-right" />
      </CSPostHogProvider>
    </ClerkProvider>
  )
}
