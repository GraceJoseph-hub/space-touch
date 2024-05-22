import React from 'react'
import AboutBanner from '../components/aboutBanner/AboutBanner'
import AboutCompany from '../components/aboutCompany/AboutCompany'
import WhyChooseUs from '../components/whyChooseUs/WhyChooseUs'
import AboutCard from '../components/aboutCard/AboutCard'
import AboutSubBanner from '../components/aboutSubBanner/AboutSubBanner'
import Team from '../components/team/Team'

const About = () => {
  return (
    <div className='mt-20'>
      <AboutBanner />
      <AboutCompany />
      <WhyChooseUs />
      <AboutCard />
      <AboutSubBanner />
      <Team />
    </div>
  )
}

export default About