import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SidebarProvider } from '../hooks/useSidebar'
import ModalProvider from '../context/ModalContext/useModal'
import { AuthProvider } from '../hooks/useAuth'
import { SubscriptionModalContextProvider } from '../context/SubscriptionModalContext/SubscriptionModalContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <SubscriptionModalContextProvider>
        <ModalProvider>
          <SidebarProvider>
            <Component {...pageProps} />
          </SidebarProvider>
        </ModalProvider>
      </SubscriptionModalContextProvider>
    </AuthProvider>
  )
}

export default MyApp
