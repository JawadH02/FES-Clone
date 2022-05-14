import { getProducts, Product } from '@stripe/firestore-stripe-payments'
import { useEffect, useState } from 'react'
import payments from '../lib/stripe'
import { SubscriptionCarousel } from './SubscriptionCarousel'
import { ProductsMetadata } from './index'

export const SubscriptionModal = () => {
  const [products, setProducts] = useState<Product[] | void>([])
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products![0])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts(payments, {
        includePrices: true,
        activeOnly: true,
      })
        .then((res) => res)
        .catch((error) => console.log(error))
      setProducts(products)
    }
    fetchProducts()
  }, [])
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
        <div className="space-y-16">
          <div>
            <SubscriptionCarousel
              products={products}
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
          </div>
          <div>
            <ProductsMetadata selectedPlan={selectedPlan} />
          </div>
        </div>
      </div>
    </div>
  )
}
