import { useState } from 'react'
import { SubscriptionCardWrapper } from './SubscriptionCard/SubscriptionCardWrapper'
import { SubscriptionCardTextWrapper } from './SubscriptionCard/SubscriptionCardTextWrapper'

export const SubscriptionCarousel = () => {
  const [activeSubscription, setActiveSubscription] = useState(false)
  return (
    <section id="slider" className="relative mx-auto h-[234px] w-[225px]">
      <input type="radio" name="slider" id="s1" className="hidden" />
      <input
        type="radio"
        name="slider"
        id="s2"
        defaultChecked
        className="hidden"
      />
      <input type="radio" name="slider" id="s3" className="hidden" />
      <label htmlFor="s1" id="slide1" className="subscriptionCard">
        <SubscriptionCardWrapper
          title=""
          billed="monthly"
          img="/assets/star.png"
        >
          <SubscriptionCardTextWrapper type="PRO">
            $79 <span className="text-sm font-light">/mo</span>
          </SubscriptionCardTextWrapper>
        </SubscriptionCardWrapper>
      </label>
      <label htmlFor="s2" id="slide2" className="subscriptionCard">
        <SubscriptionCardWrapper
          title="MOST POPULAR"
          billed="monthly"
          img="/assets/crown.png"
        >
          <SubscriptionCardTextWrapper type="VIP">
            $99 <span className="text-sm font-light">/mo</span>
          </SubscriptionCardTextWrapper>
        </SubscriptionCardWrapper>
      </label>
      <label htmlFor="s3" id="slide3" className="subscriptionCard">
        <SubscriptionCardWrapper
          title="BEST VALUE"
          billed="annualy"
          img="/assets/crown.png"
        >
          <SubscriptionCardTextWrapper type="VIP+">
            $69 <span className="text-sm font-light">/mo</span>
          </SubscriptionCardTextWrapper>
        </SubscriptionCardWrapper>
      </label>
    </section>
  )
}
