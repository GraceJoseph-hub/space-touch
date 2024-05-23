import React from "react";
import Carousel from "../components/carousel/Carousel";
import Card from "../components/card/Card";
import cardData from "../components/card/CardData";
import Title from "../components/title/Title";
import CountUpAnimation from "../components/countupAnimation/CountUpAnimation";
import Aside from "../components/aside/Aside";
import Benefit from "../components/benefit/Benefit";
import HappyClients from "../components/happyClients/HappyClients";

const Home = () => {
  return (
    <div className="mt-20">
      <div className="pb-10">
        <Carousel />
      </div>
      <div className="w-full px-16 semiBP:px-32 pt-20 pb-20 custom1:px-20">
        <Title />
        <Card />
      </div>
      <CountUpAnimation />
      <Aside />
      <Benefit text="Traveling Makes A Man Wiser," textTwo="But Less Happy." />
      <HappyClients />
    </div>
  );
};

export default Home;
