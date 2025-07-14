import About from '@/components/About'
import CaseStudies from '@/components/CaseStudies'
import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import Intro from '@/components/Intro'
import ProcessSection from '@/components/ProcessSection'
import Services from '@/components/Services'
import React from 'react'

export default function page() {
  return (
    <main>
       <HeroSection />
       <Intro />
       <About />
       <Services />
       <CaseStudies />
       <ProcessSection />
      <ContactSection />
    </main>
  )
}
