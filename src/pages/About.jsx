import React from 'react'
import AboutBanner from '../components/aboutBanner/AboutBanner'
import AboutCompany from '../components/aboutCompany/AboutCompany'
import WhyChooseUs from '../components/whyChooseUs/WhyChooseUs'
import AboutCard from '../components/aboutCard/AboutCard'
import AboutSubBanner from '../components/aboutSubBanner/AboutSubBanner'

const About = () => {
  return (
    <div className='mt-20'>
      <AboutBanner />
      <AboutCompany />
      <WhyChooseUs />
      <AboutCard />
      <AboutSubBanner />
    </div>
  )
}

export default About