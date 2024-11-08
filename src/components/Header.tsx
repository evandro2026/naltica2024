import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, User, X } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-gradient-to-b from-teal-900 to-teal-800 text-white shadow-lg sticky top-0 z-50">
      <div className="w-full h-32 relative overflow-hidden">
        <img
          src="https://i.ibb.co/VqKY9Zn/rolangra-banner.jpg"
          alt="Rolangra Terra e Mar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-serif text-yellow-100 tracking-wider">
            ROLANGRA
            <span className="block text-lg text-center mt-1 font-sans">TERRA E MAR</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-teal-700 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar peças náuticas..."
                className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-teal-700 rounded-full transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button 
              className="p-2 hover:bg-teal-700 rounded-full transition-colors relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-teal-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-teal-700">Início</a>
            <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-teal-700">Categorias</a>
            <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-teal-700">Ofertas</a>
            <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-teal-700">Minha Conta</a>
          </div>
        </div>
      )}
    </header>
  );
}