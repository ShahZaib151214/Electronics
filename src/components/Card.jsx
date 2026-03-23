import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Button from './Button';

const Card = ({ 
  image, 
  title, 
  price, 
  description, 
  badge, 
  onAddToCart, 
  isFavorite = false,
  onToggleFavorite 
}) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50 mb-4">
        {badge && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
            {badge}
          </span>
        )}
        <button 
          onClick={onToggleFavorite}
          className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors z-10 shadow-sm"
        >
          {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
          {title}
        </h3>
        {description && (
          <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-black text-gray-900">{price}</span>
          <Button 
            variant="secondary" 
            className="!px-3 !py-1.5 !text-xs !rounded-lg"
            onClick={onAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
