import React from 'react';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">About Sanmao</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img src="/sanmao.png" alt="Sanmao" className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg" />
        <div className="space-y-4 max-w-lg">
          <p className="text-sm leading-relaxed">
            三毛（1943年3月26日－1991年1月4日），原名陈懋平，后改名为陈平，台湾作家。她以《撒哈拉的故事》驰名华人世界，一生酷爱流浪，用文字记录了她在异乡的奇特经历与深沉的爱情。
          </p>
          <p className="text-sm leading-relaxed">
            她的文字真挚、率性，跨越了语言与文化的藩篱，影响了无数热衷于旅行、写作与追求自由的年轻灵魂。她，是一朵奇女子，在广袤的人世间留下了永恒的音符。
          </p>
        </div>
      </div>
    </div>
  );
}
