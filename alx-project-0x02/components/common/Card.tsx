import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="max-w-md p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
