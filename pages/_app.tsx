import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SidebarProvider } from '../hooks/useSidebar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  )
}

export default MyApp
