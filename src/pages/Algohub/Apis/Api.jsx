import React from 'react'
import APIHero from './APIHero'
import HowToUse from './HowToUse'
import ApiPricing from './ApiPricing'
import WhyDeltaExchangeAPI from './WhyDeltaExchangeAPI'
import DeltaIntegrationsSection from './DeltaIntegrationsSection'
import ApiStackSection from './ApiStackSection'
import FaqSection from './FaqSection'

const Api = () => {
  return (
    <div>
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