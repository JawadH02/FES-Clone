import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SidebarProvider } from '../hooks/useSidebar'
import { ModalContext } from '../context/ModalContext'
import { useState } from 'react'
import { AuthProvider } from '../hooks/useAuth'
import { SignUpForm } from '../components/index'

function MyApp({ Component, pageProps }: AppProps) {
  const [componentState, setComponentState] = useState<React.ReactNode>()
  const [modal, setModal] = useState(false)

  const toggleSignUp = () => {
    setModal((prevState) => !prevState)
    setComponentState(<SignUpForm />)
  }

  return (
    <AuthProvider>
      <ModalContext.Provider
        value={{
          componentState,
          setComponentState,
          modal,
          setModal,
          toggleSignUp,
        }}
      >
        <SidebarProvider>
          <Component {...pageProps} />
        </SidebarProvider>
      </ModalContext.Provider>
    </AuthProvider>
  )
}

export default MyApp
