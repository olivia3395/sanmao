import { motion } from "motion/react";
import { sanmaoData } from "../data";

export default function Footprints() {
  return (
    <>
      <div className="mb-10">
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 font-sans">Biographic Timeline</span>
        <h2 className="text-3xl font-bold mt-2 text-[#5A5A40]">三毛的足迹</h2>
      </div>
      
      <div className="space-y-8 relative">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#E0D5C1] ml-2"></div>
        {sanmaoData.footprints.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative pl-8"
          >
            <div className="absolute left-0 top-2 w-4 h-4 bg-[#C46210] rounded-full -ml-2"></div>
            <h4 className="text-sm font-bold uppercase tracking-wider">{item.year} · {item.location}</h4>
            <p className="text-xs mt-1 leading-relaxed opacity-70 italic">{item.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-auto">
        <div className="bg-[#5A5A40] text-white p-6 rounded-3xl">
          <p className="text-[10px] tracking-widest uppercase mb-2">Currently Reading</p>
          <h3 className="text-lg font-medium">《撒哈拉的故事》</h3>
          <button className="mt-4 text-[11px] border-b border-white pb-1 font-sans">ENTER CHAPTER</button>
        </div>
      </div>
    </>
  );
}
