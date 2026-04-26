import { useState } from "react";
import { sanmaoData } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function LettersPage() {
  const [selectedLetter, setSelectedLetter] = useState<any | null>(null);

  return (
    <div className="p-12">
      <h2 className="text-4xl font-serif text-[#5A5A40] mb-12">书信集</h2>
      <div className="space-y-12">
        {sanmaoData.letters.map((letter, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-[#E0D5C1] pb-8 cursor-pointer"
            onClick={() => setSelectedLetter(letter)}
          >
            <div className="flex items-baseline gap-4 mb-2">
              <h3 className="text-2xl font-serif text-[#5A5A40] hover:text-[#C46210] transition-colors">{letter.title}</h3>
              <span className="text-sm font-sans text-[#C46210]">{letter.date}</span>
            </div>
            <p className="text-sm leading-relaxed font-sans text-gray-600">
              {letter.description}
            </p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedLetter && (
          <div className="fixed inset-0 bg-[#FDF9F3]/95 z-50 flex items-center justify-center p-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white p-12 border border-[#E0D5C1] max-w-2xl w-full relative"
            >
              <button 
                onClick={() => setSelectedLetter(null)}
                className="absolute top-4 right-4 text-[#5A5A40] hover:text-black font-sans uppercase tracking-widest text-xs"
              >
                Close
              </button>
              <h2 className="text-3xl font-serif text-[#5A5A40] mb-2">{selectedLetter.title}</h2>
              <p className="text-sm font-sans text-[#C46210] mb-8">{selectedLetter.date}</p>
              <div className="text-[#2C2C2C] leading-loose font-serif text-lg whitespace-pre-line max-h-[70vh] overflow-y-auto">
                {selectedLetter.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="mt-16 flex justify-center items-center py-8 opacity-80 hover:opacity-100 transition-opacity duration-700">
        <img src="/thanks_sanmao.png" alt="Thanks Sanmao" className="max-w-xl w-full object-contain filter drop-shadow-md" />
      </div>
    </div>
  );
}
