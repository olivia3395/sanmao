import React from 'react';
import { quotesData } from '../quotesData';

export default function QuotesPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Quotes</h2>
      <div className="grid grid-cols-1 gap-6">
        {quotesData.map((item, index) => (
          <div key={index} className="p-6 border border-[#E0D5C1]">
            <p className="text-lg italic">"{item.quote}"</p>
            <p className="mt-4 text-sm text-gray-500">— {item.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
