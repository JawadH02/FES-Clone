import { SubscriptionCardWrapper } from './SubscriptionCard/SubscriptionCardWrapper'
import { SubscriptionCardTextWrapper } from './SubscriptionCard/SubscriptionCardTextWrapper'
import { Product } from '@stripe/firestore-stripe-payments'

interface Props {
  products: Product[] | void
  selectedPlan: Product | null
  setSelectedPlan: React.Dispatch<React.SetStateAction<Product | null>>
}

export const SubscriptionCarousel = ({
  products,
  selectedPlan,
  setSelectedPlan,
}: Props) => {
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
        {products!
          .filter((product) => product.name === 'PRO')
          .map((product) => (
            <div
              className="flex flex-col items-center justify-center space-y-2"
              key={product.id}
              onClick={() => setSelectedPlan(product)}
            >
              <SubscriptionCardWrapper
                title=""
                billed="monthly"
                img="/assets/star.png"
                selected={selectedPlan?.name === product.name ? true : false}
              >
                <SubscriptionCardTextWrapper type={product.name}>
                  <div>
                    ${product.prices[0].unit_amount! / 100}{' '}
                    <span className="text-sm font-light">/mo</span>
                  </div>
                </SubscriptionCardTextWrapper>
              </SubscriptionCardWrapper>
            </div>
          ))}
      </label>
      <label htmlFor="s2" id="slide2" className="subscriptionCard">
        {products!
          .filter((product) => product.name === 'VIP')
          .map((product) => (
            <div
              className="flex flex-col items-center justify-center space-y-2"
              key={product.id}
              onClick={() => setSelectedPlan(product)}
            >
              <SubscriptionCardWrapper
                title="MOST POPULAR"
                billed="monthly"
                img="/assets/crown.png"
                selected={selectedPlan?.name === product.name ? true : false}
              >
                <SubscriptionCardTextWrapper type={product.name}>
                  <div>
                    ${product.prices[0].unit_amount! / 100}{' '}
                    <span className="text-sm font-light">/mo</span>
                  </div>
                </SubscriptionCardTextWrapper>
              </SubscriptionCardWrapper>
            </div>
          ))}
      </label>
      <label htmlFor="s3" id="slide3" className="subscriptionCard">
        {products!
          .filter((product) => product.name === 'VIP+')
          .map((product) => (
            <div
              className="flex flex-col items-center justify-center space-y-2"
              key={product.id}
              onClick={() => setSelectedPlan(product)}
            >
              <SubscriptionCardWrapper
                title="BEST VALUE"
                billed="annually"
                img="/assets/crown.png"
                selected={selectedPlan?.name === product.name ? true : false}
              >
                <SubscriptionCardTextWrapper type={product.name}>
                  <div>
                    ${product.prices[0].unit_amount! / 100}{' '}
                    <span className="text-sm font-light">/mo</span>
                  </div>
                </SubscriptionCardTextWrapper>
              </SubscriptionCardWrapper>
            </div>
          ))}
      </label>
    </section>
  )
}
