import React from "react";
import Carousel from "../components/carousel/Carousel";
import Card from "../components/card/Card";
import cardData from "../components/card/CardData";
import Title from "../components/title/Title";
import CountUpAnimation from "../components/countupAnimation/CountUpAnimation";
import Aside from "../components/aside/Aside";


const Home = () => {

  return (
    <div className="mt-20">
      <div className="pb-10">
        <Carousel />
      </div>
      <div className="w-full px-20 pt-20 pb-20">
        <Title />
        <div className="grid gap-8 grid-cols-2 grid-rows-3">
          {cardData.map((cardProps, index) => (
            <Card
              key={index}
              title={cardProps.title}
              dayNight={cardProps.dayNight}
              startTitle={cardProps.startFrom.startTitle}
              startAmount={cardProps.startFrom.amount}
              condition={cardProps.condition}
            />
          ))}
        </div>
      </div>
      <CountUpAnimation />
      <Aside />
    </div>
  );
};

export default Home;
