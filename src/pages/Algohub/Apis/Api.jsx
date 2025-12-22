import React from 'react'
import APIHero from './APIHero'
import HowToUse from './HowToUse'
import ApiPricing from './ApiPricing'
import WhyDeltaExchangeAPI from './WhyDeltaExchangeAPI'
import DeltaIntegrationsSection from './DeltaIntegrationsSection'
import ApiStackSection from './ApiStackSection'
import FaqSection from './FaqSection'
import MobileHeader from './MobileHeader'

const Api = () => {
  return (
    <div className="min-h-screen">
        <MobileHeader />
        <APIHero />
        <HowToUse />
        <ApiPricing />
        <WhyDeltaExchangeAPI />
        <DeltaIntegrationsSection />
        <ApiStackSection />
        <FaqSection />
    </div>
  )
}

export default Api