// import React from 'react'

import AboutSection from "./AboutSection"
import { CTASection } from "./CTASection"
import HeroSection from "./HeroSection"
import { ScriptureSection } from "./ScriptureSection"
import TopicsSection from "./TopicSection"
import { TrainingDetailsSection } from "./TrainingDetailsSection"

const YmeHomeComp = () => {
  return (
    <div>
        <HeroSection />
        <ScriptureSection />
        <AboutSection />
        <TopicsSection />
        <TrainingDetailsSection />
        <CTASection />
    </div>
  )
}

export default YmeHomeComp