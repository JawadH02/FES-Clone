import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SidebarProvider } from '../hooks/useSidebar'
import { ModalContextProvider } from '../context/ModalContext/ModalContextProvider'
import { AuthProvider } from '../hooks/useAuth'
import { SubscriptionModalContextProvider } from '../context/SubscriptionModalContext/SubscriptionModalContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <SubscriptionModalContextProvider>
        <ModalContextProvider>
          <SidebarProvider>
            <Component {...pageProps} />
          </SidebarProvider>
        </ModalContextProvider>
      </SubscriptionModalContextProvider>
    </AuthProvider>
  )
}

export default MyApp
