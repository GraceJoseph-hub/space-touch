import React from "react";
import Carousel from "../components/carousel/Carousel";
import Card from "../components/card/Card";
import Title from "../components/title/Title";
import CountUpAnimation from "../components/countupAnimation/CountUpAnimation";
import Aside from "../components/aside/Aside";
import Benefit from "../components/benefit/Benefit";
import HappyClients from "../components/happyClients/HappyClients";
import useScreenSize from "../../src/components/useScreenSize";

const Home = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <>
      <div className={`${isMobile ? "pb-0" : "pb-10"} mt-20`}>
        <Carousel />
      </div>
      <div
        className={`w-full ${
          isTablet
            ? "px-5 pt-10 pb-20"
            : "px-8 semiBP:px-28 pt-20 pb-20 custom1:px-16"
        } bg-light dark:bg-""`}
      >
        <Title />
        <Card />
      </div>
      <CountUpAnimation />
      <Aside />
      <Benefit text="Traveling Makes A Man Wiser," textTwo="But Less Happy." />
      <HappyClients />
    </>
  );
};

export default Home;

