import { AppShell } from '@mantine/core'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 65 }} footer={{ height: 80 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  )
}
