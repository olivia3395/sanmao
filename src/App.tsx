import { motion } from "motion/react";
import React, { useState } from 'react';
import Hero from "./components/Hero";
import Footprints from "./components/Footprints";
import EchoesSection from "./components/EchoesSection";
import BiographyModal from "./components/BiographyModal";
import WorksPage from "./components/WorksPage";
import LettersPage from "./components/LettersPage";
import QuotesPage from "./components/QuotesPage";
import AboutPage from "./components/AboutPage";
import { sanmaoData } from "./data";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'works' | 'letters' | 'quotes' | 'about'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onOpenModal={() => setIsModalOpen(true)} />
            <EchoesSection />
          </>
        );
      case 'works':
        return <WorksPage />;
      case 'letters':
        return <LettersPage />;
      case 'quotes':
        return <QuotesPage />;
      case 'about':
        return <AboutPage />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white/80 text-[#2C2C2C] font-serif min-h-screen relative">
      <BiographyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="max-w-6xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-1/3 border-r border-[#E0D5C1] p-12 min-h-screen flex flex-col justify-between">
           <Footprints />
           <div className="mt-12 text-xs text-gray-500 font-sans tracking-wider opacity-70">
             © Copyright, Yuyao Wang <br />
             yuyaow@bu.edu
           </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
           {/* Top Navigation */}
           <nav className="h-20 flex items-center justify-between px-12 border-b border-[#E0D5C1]">
             <div className="flex space-x-8 text-[11px] font-sans tracking-[0.2em] uppercase">
               <button onClick={() => setCurrentPage('home')} className={`font-bold border-b ${currentPage === 'home' ? 'border-[#2C2C2C]' : 'border-transparent'}`}>Echoes</button>
               <button onClick={() => setCurrentPage('works')} className={`${currentPage === 'works' ? 'font-bold border-b border-[#2C2C2C]' : 'opacity-40'}`}>Works</button>
               <button onClick={() => setCurrentPage('letters')} className={`${currentPage === 'letters' ? 'font-bold border-b border-[#2C2C2C]' : 'opacity-40'}`}>Letters</button>
               <button onClick={() => setCurrentPage('quotes')} className={`${currentPage === 'quotes' ? 'font-bold border-b border-[#2C2C2C]' : 'opacity-40'}`}>Quotes</button>
               <button onClick={() => setCurrentPage('about')} className={`${currentPage === 'about' ? 'font-bold border-b border-[#2C2C2C]' : 'opacity-40'}`}>About</button>
             </div>
             <button onClick={() => setIsModalOpen(true)} className="w-10 h-10 bg-[#C46210] rounded-full flex items-center justify-center text-white text-xs cursor-pointer hover:opacity-80 transition-opacity">三毛</button>
           </nav>

           <div className="p-12">
             {renderPage()}
           </div>
        </main>
      </div>
    </div>
  );
}
