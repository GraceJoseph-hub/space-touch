import React from 'react'
import Destinations from '../components/destinations/Destinations';
import HeroBanner from "../components/heroBanner/HeroBanner";

const Destination = () => {
  return (
    <div className="mt-20">
      <HeroBanner text1="Destinations" text="Destinations" />
      <Destinations />
    </div>
  );
}

export default Destination