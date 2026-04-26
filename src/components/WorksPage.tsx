import { sanmaoData } from "../data";
import { motion } from "motion/react";

export default function WorksPage() {
  return (
    <div className="p-12">
      <h2 className="text-4xl font-serif text-[#5A5A40] mb-12">著作集</h2>
      <div className="space-y-12">
        {sanmaoData.echoes.map((book, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-[#E0D5C1] pb-8"
          >
            <div className="flex items-baseline gap-4 mb-2">
              <h3 className="text-2xl font-serif text-[#5A5A40]">{book.title}</h3>
              <span className="text-sm font-sans text-[#C46210]">{book.year}</span>
            </div>
            <p className="text-sm leading-relaxed font-sans text-gray-600">
              {book.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
