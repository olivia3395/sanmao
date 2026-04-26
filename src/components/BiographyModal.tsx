import { sanmaoData } from "../data";
import { motion } from "motion/react";

export default function BiographyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#FDF9F3]/90 z-50 flex items-center justify-center p-8 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 border border-[#E0D5C1] max-w-4xl w-full relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#5A5A40] hover:text-black font-sans uppercase tracking-widest text-xs"
        >
          Close
        </button>
        <h2 className="text-4xl font-serif text-[#5A5A40] mb-8">{sanmaoData.biography.title}</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 text-[#2C2C2C] leading-relaxed font-sans opacity-80">
            {sanmaoData.biography.content}
          </div>
          <div className="flex-1 space-y-4">
            {sanmaoData.biography.photos.map((photo, index) => (
              <img key={index} src={photo} alt="Sanmao" className="w-full h-auto object-cover rounded-md" />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
