import { AppShell } from '@mantine/core'

import Header from './Header'
import Footer from './Footer'

import headerStyles from '@/components/layout/Header/Header.module.css'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 65 }} footer={{ height: 80 }}>
      <AppShell.Header className={headerStyles.header}>
        <Header />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  )
}
