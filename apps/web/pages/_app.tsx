import '@mantine/core/styles.css'
import '@/styles/global.css'

import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { theme, resolver } from '@/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import MainLayout from '@/components/layout/MainLayout'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </QueryClientProvider>
    </MantineProvider>
  )
}
