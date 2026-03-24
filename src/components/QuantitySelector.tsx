"use client";
import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99
}) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={handleDecrease}
        disabled={quantity <= min}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-black text-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Minus className="w-4 h-4" />
      </button>

      <span className="text-xl font-semibold text-black min-w-[2rem] text-center">
        {quantity}
      </span>

      <button
        onClick={handleIncrease}
        disabled={quantity >= max}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-black text-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default QuantitySelector;
