import React from "react";
import Video from "./video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center text-white">
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">
        L'étincelle
      </div>
      <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[8vw] gap-4">
        <span>qui</span>
        <div className="w-[17vw] h-[7vw] rounded-full -mt-5 overflow-hidden">
          <Video />
        </div>
        <span>génère</span>
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
