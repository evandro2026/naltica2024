import React from 'react';

export function FeaturedOffers() {
  const offers = [
    {
      id: 1,
      title: 'Motor de Popa',
      image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=80',
      discount: '20% OFF'
    },
    {
      id: 2,
      title: 'Kit Navegação',
      image: 'https://images.unsplash.com/photo-1532186651327-6ac23687d189?auto=format&fit=crop&w=800&q=80',
      discount: '15% OFF'
    },
    {
      id: 3,
      title: 'Âncoras Premium',
      image: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&w=800&q=80',
      discount: '30% OFF'
    }
  ];

  return (
    <div className="mb-8 px-2 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Ofertas em Destaque</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {offers.map((offer) => (
          <div key={offer.id} className="relative group overflow-hidden rounded-lg">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <h3 className="text-white text-lg sm:text-xl font-bold">{offer.title}</h3>
                <span className="inline-block bg-red-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm mt-1 sm:mt-2">
                  {offer.discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}