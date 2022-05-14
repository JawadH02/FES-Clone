import { PlanMetadata } from './ProductsMetadata'
import { ProductsMetadataWrapper } from './ProductsMetadataWrapper'

interface ProductsMetadataLayoutProps {
  currentPlanMetadata: PlanMetadata
}

export const ProductsMetadataLayout = ({
  currentPlanMetadata,
}: ProductsMetadataLayoutProps) => {
  return (
    <>
      <ProductsMetadataWrapper>
        <span className="font-bold">Advanced</span> Portfolio Tutorial
      </ProductsMetadataWrapper>

      <ProductsMetadataWrapper>
        <span className="font-bold">10</span> Real-World Project Tutorials
      </ProductsMetadataWrapper>

      <ProductsMetadataWrapper>
        <span className="font-bold">Top Tech</span> Industry Best Practises
      </ProductsMetadataWrapper>

      <ProductsMetadataWrapper>
        Land <span className="font-bold">High Paying</span> Jobs Tutorial
      </ProductsMetadataWrapper>

      <span
        className={`w-full ${
          !currentPlanMetadata.privateVipDiscord &&
          currentPlanMetadata.name === 'PRO'
            ? 'opacity-30'
            : ''
        }`}
      >
        <ProductsMetadataWrapper>
          <span className="font-bold">12</span> Private VIP Discord Channels
        </ProductsMetadataWrapper>
      </span>

      <span
        className={`w-full ${
          !currentPlanMetadata.exclusiveEport &&
          (currentPlanMetadata.name === 'PRO' ||
            currentPlanMetadata.name === 'VIP')
            ? 'opacity-30'
            : ''
        }`}
      >
        <ProductsMetadataWrapper>
          <span className="font-bold">Highly Exclusive</span> Portfolio
        </ProductsMetadataWrapper>
      </span>
    </>
  )
}
