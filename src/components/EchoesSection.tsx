import { motion } from "motion/react";
import { sanmaoData } from "../data";

export default function EchoesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      {sanmaoData.echoes.map((echo, index) => (
        <a 
          key={index}
          href={echo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 shadow-sm border border-[#E0D5C1] transform hover:-rotate-1 transition-transform relative z-10 block"
        >
          <h5 className="text-lg font-bold text-[#5A5A40] mb-2">{echo.title}</h5>
          <p className="text-xs leading-relaxed font-sans text-gray-500 mb-4">
            {echo.description}
          </p>
          <span className="text-[10px] text-[#C46210] uppercase tracking-widest border-b border-[#C46210]">Explore More</span>
        </a>
      ))}
    </div>
  );
}
