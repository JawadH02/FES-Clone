import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SidebarProvider } from '../hooks/useSidebar'
import { ModalContext } from '../components/Nav'
import { useState } from 'react'


function MyApp({ Component, pageProps }: AppProps) {

  const [componentState, setComponentState] = useState<React.ReactNode>()
  return (
    <ModalContext.Provider value={{ componentState, setComponentState }}>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </ModalContext.Provider>
  )
}

export default MyApp
