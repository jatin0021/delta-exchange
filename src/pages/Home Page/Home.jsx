import React, { useContext } from 'react'
import Mycontext from '../../Context/Mycontext'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import ProTradingFeatures from './ProTradingFeatures'
import SupportFaqSection from './SupportFaqSection'
import DownloadAppSection from './DownloadAppSection'

const Home = () => {
  const { mode } = useContext(Mycontext);

  return (
    <div>
        <HeroSection mode={mode} />
        <FeaturesSection mode={mode} />
        <ProTradingFeatures mode={mode} />
        <SupportFaqSection mode={mode} />
        <DownloadAppSection mode={mode} />
    </div>
  )
}

export default Home