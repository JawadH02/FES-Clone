import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SidebarProvider } from '../hooks/useSidebar'
import { ModalContext } from '../context/ModalContext'
import { useState } from 'react'
import { AuthProvider } from '../hooks/useAuth'
import { SignUpForm, LoginForm } from '../components/index'

function MyApp({ Component, pageProps }: AppProps) {
  const [componentState, setComponentState] = useState<React.ReactNode>()
  const [modal, setModal] = useState(false)

  const toggleSignUp = () => {
    setModal((prevState) => !prevState)
    setComponentState(<SignUpForm />)
  }

  const toggleSignIn = () => {
    setModal((prevState) => !prevState)
    setComponentState(<LoginForm />)
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
          toggleSignIn,
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
