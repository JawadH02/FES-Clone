import { getProducts, Product } from '@stripe/firestore-stripe-payments'
import { GetStaticProps } from 'next'
import { useContext, useState } from 'react'
import { AccountSectionWrapper } from '../components/AccountSectionWrapper'
import { Sidebar, Nav } from '../components/index'
import { Loader } from '../components/index'
import { FaCrown } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'
import { useSubscription } from '../hooks/useSubscription'
import payments, { goToBillingPortal } from '../lib/stripe'
import { SubscriptionModalContext } from '../context/SubscriptionModalContext/SubscriptionModalContext'
import { ModalWrapper } from '../components/ModalWrapper'

interface Props {
  products: Product[]
}

const Account = ({ products }: Props) => {
  const { user } = useAuth()
  const subscription = useSubscription(user)
  const [isBillingLoading, setBillingLoading] = useState(false)
  const { handleSubscriptionModal, subscriptionModal, SubscriptionModalState } =
    useContext(SubscriptionModalContext)

  const manageSubscription = () => {
    if (subscription) {
      setBillingLoading(true)
      goToBillingPortal()
    }
  }

  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className="mx-auto flex w-full max-w-7xl flex-col space-y-3 divide-y py-8 px-6">
          <h1 className="text-[40px] font-bold text-[#7545D9]">
            Account Details
          </h1>
          <AccountSectionWrapper title="Email">
            <p>{user?.email}</p>
          </AccountSectionWrapper>
          <AccountSectionWrapper title="Name">
            <div className="flex items-center justify-between">
              <p>{user?.email}</p>
              <button className="accountButtons !translate-y-0 cursor-not-allowed">Edit</button>
            </div>
          </AccountSectionWrapper>
          <AccountSectionWrapper title="Password">
            <div className="flex items-center justify-between">
              <p>Update your password here.</p>
              <button className="accountButtons !translate-y-0 cursor-not-allowed">
                Edit
              </button>
            </div>
          </AccountSectionWrapper>
          <AccountSectionWrapper title="Subscription Plan">
            <div className="flex items-center justify-between">
              {!subscription ? (
                'Frontend Simplified - Free'
              ) : (
                <p>
                  Frontend Simplified -{' '}
                  {
                    products.filter(
                      (product) => product.id === subscription?.product
                    )[0].name
                  }
                </p>
              )}
              <button
                className="accountButtons flex items-center space-x-3"
                onClick={handleSubscriptionModal}
              >
                <FaCrown className="ml-2 text-[#FEB63B]" />
                <h3>Become a Pro</h3>
              </button>
            </div>
            <ModalWrapper
              open={subscriptionModal}
              type="SubscriptionModal"
              img="/assets/subscription.png"
            >
              {SubscriptionModalState}
            </ModalWrapper>
          </AccountSectionWrapper>
          <AccountSectionWrapper title="Billing information">
            <div className="flex items-center justify-between">
              <p className="w-full max-w-[300px] md:max-w-full">
                Update your billing and subscription information here.
              </p>
              <button
                disabled={isBillingLoading}
                className={`accountButtons ${isBillingLoading && 'opacity-70'}`}
                onClick={manageSubscription}
              >
                {isBillingLoading ? (
                  <Loader color="dark:fill-black" />
                ) : (
                  'Update'
                )}
              </button>
            </div>
          </AccountSectionWrapper>
        </div>
      </div>
    </div>
  )
}

export default Account

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error))

  return {
    props: {
      products,
    },
  }
}
