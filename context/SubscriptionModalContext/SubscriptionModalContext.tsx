import { createContext } from 'react'

interface SubscriptionModalContext {
  SubscriptionModalState: React.ReactNode
  setSubscriptionModalState: React.Dispatch<
    React.SetStateAction<React.ReactNode>
  >
  subscriptionModal: boolean
  setSubscriptionModal: React.Dispatch<React.SetStateAction<boolean>>
  handleSubscriptionModal: () => void
}

export const SubscriptionModalContext = createContext<SubscriptionModalContext>(
  {
    SubscriptionModalState: null,
    setSubscriptionModalState: () => {},
    subscriptionModal: false,
    setSubscriptionModal: () => {},
    handleSubscriptionModal: () => {},
  }
)
