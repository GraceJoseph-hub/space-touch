import React from 'react'
import Btn from '../btn/Btn';
import banner3 from '../../../public/images/banner3.jpg'

const AboutCompany = () => {
  return (
    <section className="flex flex-col items-center gap-8 text-center bg-light py-24">
      <div>
        <h5 className="text-red text-sm font-semibold">ABOUT US</h5>
        <h2 className="text-4xl font-semibold">
          Travel To Make Memories All Around The <br /> World.
        </h2>
      </div>
      <p className="text-center">
        Spacetouch Travels strives to provide her customers with the very best
        service in the travel and <br /> tours industry. Spacetouch Travels
        gives you the best curated tour,vacation or even schooling <br />{" "}
        experience in countries of your choice.
      </p>
      <Btn path="/destination" text="Destination" />
      <img src={banner3} alt="banner 3" className="w-[50.4rem] rounded-md" />
    </section>
  );
}

export default AboutCompany