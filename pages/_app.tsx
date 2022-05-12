import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SidebarProvider } from '../hooks/useSidebar'
import { ModalContextProvider } from '../context/ModalContext/ModalContextProvider'
import { AuthProvider } from '../hooks/useAuth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ModalContextProvider>
        <SidebarProvider>
          <Component {...pageProps} />
        </SidebarProvider>
      </ModalContextProvider>
    </AuthProvider>
  )
}

export default MyApp
