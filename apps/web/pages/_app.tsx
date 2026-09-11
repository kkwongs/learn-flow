import '@mantine/core/styles.css'

import type { AppProps } from 'next/app'
import { Anchor, Container, createTheme, MantineProvider, rem } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import MainLayout from '@/components/layout/MainLayout'

const theme = createTheme({
  primaryShade: 9,
  primaryColor: 'gray',
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        underline: 'never',
      },
    }),
  },
})
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </QueryClientProvider>
    </MantineProvider>
  )
}
