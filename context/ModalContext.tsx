import { createContext } from 'react'

interface ModalContextProps {
  componentState: React.ReactNode
  setComponentState: React.Dispatch<React.SetStateAction<React.ReactNode>>
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  toggleSignUp: () => void
}

export const ModalContext = createContext<ModalContextProps>({
  componentState: null,
  setComponentState: () => {},
  modal: false,
  setModal: () => {},
  toggleSignUp: () => {},
})
