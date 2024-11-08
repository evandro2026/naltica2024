import React from 'react';
import { Anchor, Compass, Ship, Wrench, LifeBuoy, Settings } from 'lucide-react';

const categories = [
  { 
    name: 'Motores',
    icon: Ship,
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=80'
  },
  { 
    name: 'Navegação',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800&q=80'
  },
  { 
    name: 'Âncoras',
    icon: Anchor,
    image: 'https://images.unsplash.com/photo-1566847438217-76e82d383f84?auto=format&fit=crop&w=800&q=80'
  },
  { 
    name: 'Peças',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1580402427914-a6cc60d7d44f?auto=format&fit=crop&w=800&q=80'
  },
  { 
    name: 'Manutenção',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80'
  },
  { 
    name: 'Segurança',
    icon: LifeBuoy,
    image: 'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?auto=format&fit=crop&w=800&q=80'
  },
];

export function CategoryBar() {
  return (
    <div className="bg-white border-b mb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.name}
              className="group flex-shrink-0 flex flex-col items-center w-20 sm:w-28 px-2 py-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-2 border-2 border-blue-600">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mb-1" />
              <span className="text-xs sm:text-sm text-gray-600 text-center line-clamp-1">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}