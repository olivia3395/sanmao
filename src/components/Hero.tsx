import { motion } from "motion/react";
import { sanmaoData } from "../data";

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-[#5A5A40]"
    >
      <h1 
        className="text-[60px] md:text-[100px] leading-[0.9] font-black mb-8 tracking-tighter cursor-pointer hover:text-[#C46210] transition-colors"
        onClick={onOpenModal}
      >
        你好三毛<br/>HELLO SANMAO
      </h1>
      <p className="text-xl italic text-[#C46210] leading-relaxed pr-12">
        “如果有来生，要做一棵树，站成永恒，没有悲欢的姿势。”
      </p>
      <div className="mt-12 flex space-x-4">
        <div className="px-8 py-3 bg-[#2C2C2C] text-white rounded-full text-xs tracking-widest uppercase cursor-pointer">Explore Everything</div>
        <a href="https://www.bilibili.com/video/BV17V411y7mD/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-[#2C2C2C] rounded-full text-xs tracking-widest uppercase cursor-pointer">Listen to Voice</a>
      </div>
    </motion.div>
  );
}
