import React, { useEffect } from "react";
import Video from "../components/home/video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = "hidden";

    // Re-enable scroll on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="h-screen w-screen">
      <div className="h-screen w-screen fixed z-0">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col z-10 justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
