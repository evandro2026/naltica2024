import React from 'react';
import { Star, Clock, ShoppingCart, Check } from 'lucide-react';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
  deliveryTime: string;
  stock: number;
  quantity: number;
  onAddToCart: () => void;
}

export function ProductCard({ 
  title, 
  price, 
  image, 
  rating, 
  deliveryTime, 
  stock,
  quantity,
  onAddToCart 
}: ProductCardProps) {
  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">{title}</h3>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">{rating}</span>
        </div>
        <div className="flex items-center mb-2">
          <Clock className="h-4 w-4 text-gray-400" />
          <span className="ml-1 text-sm text-gray-600">{deliveryTime}</span>
        </div>
        <div className="text-sm text-gray-600 mb-3">
          {stock > 0 ? `${stock} unidades disponíveis` : 'Fora de estoque'}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">{formatPrice(price)}</span>
          <button
            onClick={onAddToCart}
            disabled={stock === 0 || quantity >= stock}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              quantity > 0
                ? 'bg-green-500 hover:bg-green-600'
                : stock === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            {quantity > 0 ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                <span>{quantity}</span>
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-2" />
                <span>Adicionar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}