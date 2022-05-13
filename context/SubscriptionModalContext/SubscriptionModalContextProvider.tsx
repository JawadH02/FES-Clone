import { useState } from 'react'
import { SubscriptionModalContext } from './SubscriptionModalContext'
import { SubscriptionModal } from '../../components/index'

interface SubscriptionModalContextProviderProps {
  children: React.ReactNode
}

export const SubscriptionModalContextProvider = ({
  children,
}: SubscriptionModalContextProviderProps) => {
  const [SubscriptionModalState, setSubscriptionModalState] =
    useState<React.ReactNode>()
  const [subscriptionModal, setSubscriptionModal] = useState(false)

  const handleSubscriptionModal = () => {
    setSubscriptionModal((prevState) => !prevState)
    setSubscriptionModalState(<SubscriptionModal />)
  }

  return (
    <SubscriptionModalContext.Provider
      value={{
        SubscriptionModalState,
        setSubscriptionModalState,
        subscriptionModal,
        setSubscriptionModal,
        handleSubscriptionModal,
      }}
    >
      {children}
    </SubscriptionModalContext.Provider>
  )
}
