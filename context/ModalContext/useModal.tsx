import React, { useState, ReactNode, createContext, useContext } from 'react'
import { SignUpForm, LoginForm } from '../../components/index'

interface Provider {
  children: ReactNode
}

interface Values {
  getComponentState: () => ReactNode
  getModal: () => boolean
  toggleModal: () => void
  toggleSignUp: () => void
  toggleSignIn: () => void
  toggleSignInComponentState: () => void
  toggleSignUpComponentState: () => void
}

export const ModalContext = createContext<undefined | Values>(undefined)

export default function ModalProvider({ children }: Provider) {
  const [componentState, setComponentState] = useState<ReactNode>()
  const [modal, setModal] = useState(false)

  const values: Values = {
    getComponentState: () => {
      return componentState
    },
    getModal: () => {
      return modal
    },
    toggleModal: () => {
      setModal((prevState) => !prevState)
    },
    toggleSignInComponentState: () => {
      setComponentState(<LoginForm />)
    },
    toggleSignUpComponentState: () => {
      setComponentState(<SignUpForm />)
    },
    toggleSignUp: () => {
      setModal((prevState) => !prevState)
      setComponentState(<SignUpForm />)
    },
    toggleSignIn: () => {
      setModal((prevState) => !prevState)
      setComponentState(<LoginForm />)
    },
  }

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  )
}

export const useModal = () => {
  const context: Values | undefined = useContext(ModalContext)

  if (context === undefined)
    throw new Error('useCounter must be used within a CounterProvider')

  return context
}
