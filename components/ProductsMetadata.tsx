import { Product } from '@stripe/firestore-stripe-payments'
import React, { useEffect, useState } from 'react'
import { ProductsMetadataLayout } from './index'

interface Props {
  selectedPlan: Product | null
}

export interface PlanMetadata {
  name?: string
  advancedEport: boolean
  realWorldProjects: boolean
  topTechIndustry: boolean
  landHighPayingJobs: boolean
  privateVipDiscord: boolean
  exclusiveEport: boolean
}

export const ProductsMetadata = ({ selectedPlan }: Props) => {
  const [currentPlanMetadata, setCurrentPlanMetadata] = useState<PlanMetadata>({
    name: 'VIP',
    advancedEport: false,
    realWorldProjects: false,
    topTechIndustry: false,
    landHighPayingJobs: false,
    privateVipDiscord: false,
    exclusiveEport: false,
  })
  useEffect(() => {
    const isPlanPerksIncluded = () => {
      const planName = selectedPlan?.name
      let advancedEport
      let realWorldProjects
      let topTechIndustry
      let privateVipDiscord
      let landHighPayingJobs
      let exclusiveEport
      if (
        selectedPlan?.metadata.TopTechIndustryBestPractises &&
        selectedPlan?.metadata.PrivateVIPDiscordChannels &&
        selectedPlan?.metadata.LandHighPayingJobsTutorial &&
        selectedPlan?.metadata.HighlyExclusivePortfolio &&
        selectedPlan?.metadata.AdvancedPortfolioTutorial &&
        selectedPlan?.metadata.RealWorldProjectTutorials
      ) {
        advancedEport = JSON.parse(
          selectedPlan?.metadata.AdvancedPortfolioTutorial.toString()
        )
        realWorldProjects = JSON.parse(
          selectedPlan?.metadata.RealWorldProjectTutorials.toString()
        )
        topTechIndustry = JSON.parse(
          selectedPlan?.metadata.TopTechIndustryBestPractises.toString()
        )
        privateVipDiscord = JSON.parse(
          selectedPlan?.metadata.PrivateVIPDiscordChannels.toString()
        )
        landHighPayingJobs = JSON.parse(
          selectedPlan?.metadata.LandHighPayingJobsTutorial.toString()
        )
        exclusiveEport = JSON.parse(
          selectedPlan?.metadata.HighlyExclusivePortfolio.toString()
        )
      }
      setCurrentPlanMetadata({
        name: planName,
        advancedEport,
        realWorldProjects,
        topTechIndustry,
        landHighPayingJobs,
        privateVipDiscord: privateVipDiscord,
        exclusiveEport,
      })
    }
    isPlanPerksIncluded()
  }, [selectedPlan])

  return (
    <div>
      <ul className="mx-auto flex w-full max-w-[250px] flex-col items-center space-y-2">
        <ProductsMetadataLayout currentPlanMetadata={currentPlanMetadata} />
      </ul>
      <div className="mt-5 space-y-5">
        <button className="h-[60px] w-full max-w-[70%] rounded-[35px] bg-[#8A6EE8] bg-gradient-to-t from-[#a08afb] to-[#7353d6] px-6 text-[20px] font-semibold tracking-wider text-white shadow-md transition duration-300 ease-in-out hover:opacity-70">
          CONTINUE
        </button>
        <p className='text-sm text-gray-500'>Your subscription can be cancelled at any time.</p>
      </div>
    </div>
  )
}
