import React from 'react';
import { QAData } from '../data/qaData';

interface QAItemProps {
  item: QAData;
}

const QAItem: React.FC<QAItemProps> = ({ item }) => {
  return (
    <div className="mb-4 md:mb-6 p-4 md:p-6 border-l-4 border-bronze bg-gray-50 rounded-r-lg shadow-sm hover:bg-gray-100 transition-colors">
      <h3 className="text-lg md:text-xl font-bold text-spaceIndigo mb-2">{item.question}</h3>
      <p className="text-base md:text-lg text-gray-700">{item.answer}</p>
    </div>
  );
};

export default QAItem;
