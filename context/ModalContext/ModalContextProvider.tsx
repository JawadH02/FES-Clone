import { useState } from 'react'
import { SignUpForm, LoginForm } from '../../components/index'
import { ModalContext } from './ModalContext'

interface AuthContextProviderProps {
  children: React.ReactNode
}

export const ModalContextProvider = ({
  children,
}: AuthContextProviderProps) => {
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
      {children}
    </ModalContext.Provider>
  )
}
