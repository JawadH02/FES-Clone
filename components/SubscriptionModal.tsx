import { SubscriptionCarousel } from "./SubscriptionCarousel"


export const SubscriptionModal = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">Subscriptions</h1>
        <p className="text-sm leading-5 text-gray-500">
          Frontend Simplified is recommended by engineers with experience at
          <span className="font-semibold">
            {' '}
            Google, Apple, Atlassian, Canva
          </span>
          and more
        </p>
        <div>
          <SubscriptionCarousel />
        </div>
      </div>
    </div>
  )
}
