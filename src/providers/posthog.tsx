// app/providers.js
'use client'
import { useUser } from '@clerk/nextjs'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { PropsWithChildren, useEffect } from 'react'
import { env } from '~/env'

if (typeof window !== 'undefined') {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: '/ingest',
    ui_host: env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}

export function CSPostHogProvider({ children }: PropsWithChildren) {
  return (
    <PostHogProvider client={posthog}>
      <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
    </PostHogProvider>
  )
}

function PostHogAuthWrapper({ children }: PropsWithChildren) {
  const userInfo = useUser()

  useEffect(() => {
    if (userInfo.user) {
      posthog.identify(userInfo.user.id, {
        email: userInfo.user.primaryEmailAddress?.emailAddress,
        name: userInfo.user.fullName,
      })
    } else if (!userInfo.isSignedIn) {
      posthog.reset()
    }
  }, [userInfo])

  return <>{children}</>
}
