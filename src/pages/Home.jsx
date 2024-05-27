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
    <div className="">
      <div className={`${isMobile ? "pb-0" : "pb-10"} mt-20`}>
        <Carousel />
      </div>
      <div
        className={`w-full px-5 ${
          isMobile ? "pt-10" : "px-16 semiBP:px-32 pt-20"
        } pb-20 custom1:px-20 bg-light dark:bg-[#111]`}
      >
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

// import React from "react";
// import Carousel from "../components/carousel/Carousel";
// import Card from "../components/card/Card";
// import Title from "../components/title/Title";
// import CountUpAnimation from "../components/countupAnimation/CountUpAnimation";
// import Aside from "../components/aside/Aside";
// import Benefit from "../components/benefit/Benefit";
// import HappyClients from "../components/happyClients/HappyClients";

// const Home = () => {
//   return (
//     <div className="">
//       <div className="pb-10 mt-20">
//         <Carousel />
//       </div>
//       <div className="w-full px-16 semiBP:px-32 pt-20 pb-20 custom1:px-20 bg-light dark:bg-[#111]">
//         <Title />
//         <Card />
//       </div>
//       <CountUpAnimation />
//       <Aside />
//       <Benefit text="Traveling Makes A Man Wiser," textTwo="But Less Happy." />
//       <HappyClients />
//     </div>
//   );
// };

// export default Home;
