import React from 'react';
import { ProductCard } from './ProductCard';
import { CategoryBar } from './CategoryBar';
import { FeaturedOffers } from './FeaturedOffers';
import { Product } from '../types';

const products: (Product & { rating: number; deliveryTime: string; stock: number })[] = [
  {
    id: 1,
    name: 'Motor de Popa 15HP',
    price: 12999.99,
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=80',
    description: 'Motor de popa potente e econômico',
    category: 'Motores',
    rating: 4.8,
    deliveryTime: '5-7 dias',
    stock: 5
  },
  {
    id: 2,
    name: 'Kit Navegação Profissional',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1532186651327-6ac23687d189?auto=format&fit=crop&w=800&q=80',
    description: 'Kit completo para navegação segura',
    category: 'Navegação',
    rating: 4.9,
    deliveryTime: '3-5 dias',
    stock: 8
  },
  {
    id: 3,
    name: 'Âncora Premium 25kg',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&w=800&q=80',
    description: 'Âncora de alta resistência',
    category: 'Âncoras',
    rating: 4.7,
    deliveryTime: '2-4 dias',
    stock: 12
  },
  {
    id: 4,
    name: 'Kit Manutenção Completo',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
    description: 'Kit completo para manutenção de embarcações',
    category: 'Manutenção',
    rating: 4.6,
    deliveryTime: '3-5 dias',
    stock: 7
  },
  {
    id: 5,
    name: 'GPS Náutico Profissional',
    price: 3499.99,
    image: 'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800&q=80',
    description: 'GPS de alta precisão para navegação',
    category: 'Navegação',
    rating: 4.9,
    deliveryTime: '4-6 dias',
    stock: 4
  },
  {
    id: 6,
    name: 'Colete Salva-vidas Premium',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?auto=format&fit=crop&w=800&q=80',
    description: 'Colete salva-vidas de alta qualidade',
    category: 'Segurança',
    rating: 4.8,
    deliveryTime: '2-3 dias',
    stock: 15
  }
];

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({ onAddToCart }: ProductGridProps) {
  return (
    <div>
      <CategoryBar />
      <FeaturedOffers />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 px-2 sm:px-0">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            image={product.image}
            rating={product.rating}
            deliveryTime={product.deliveryTime}
            stock={product.stock}
            quantity={0}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}