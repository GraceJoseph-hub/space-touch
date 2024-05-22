import React from 'react'
import DestinationBanner from '../components/destinationBanner/DestinationBanner';
import Destinations from '../components/destinations/Destinations';

const Destination = () => {
  return <div className="mt-20">
    <DestinationBanner />
    <Destinations />
  </div>;
}

export default Destination