import React from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Plan from '../components/Plan';
import Accordion from '../components/Accordion';


const Landing = () => {
  return (
    <main className="bg-gray-50">
      <Hero />
      <SocialProof />
      <Plan />
      <Accordion />
    </main>
  )
}

export default Landing
