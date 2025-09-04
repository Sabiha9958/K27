import React from "react";
import { Link } from "react-router-dom";

const HomeBottomTxt = () => {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex items-center justify-center gap-4 font-[font2] z-50 text-white">
      <p className="absolute lg:w-[17vw] w-64 lg:right-3 right-0 bottom-28 lg:bottom-42 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight text-white">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        K72 est une agence qui pense chaque action pour nourrir la marque.
        Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
        l’étincelle pour générer de l’émotion. Pour assurer une relation
        honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui
        doit être fait.
      </p>

      {/* Projects Button */}
      <Link
        to="/projects"
        className="h-[94px] px-[30px] flex items-center justify-center border-[3px] border-white rounded-full uppercase text-white text-[5vw] hover:text-[#D3FD50] hover:border-[#D3FD50] transition-colors duration-300 cursor-pointer"
        aria-label="Go to Projects"
      >
        Projects
      </Link>

      {/* Agence Button */}
      <Link
        to="/agence"
        className="h-[94px] px-[30px] flex items-center justify-center border-[3px] border-white rounded-full uppercase text-white text-[5vw] hover:text-[#D3FD50] hover:border-[#D3FD50] transition-colors duration-300 cursor-pointer"
        aria-label="Go to Agence"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomTxt;
