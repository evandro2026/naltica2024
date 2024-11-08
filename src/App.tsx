import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { Toast } from './components/Toast';
import { CartItem, Product } from './types';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemsCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
      <main className="container px-4 py-8">
        <ProductGrid onAddToCart={handleAddToCart} />
      </main>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={(productId, quantity) => {
          setCartItems(prevItems =>
            quantity === 0
              ? prevItems.filter(item => item.id !== productId)
              : prevItems.map(item =>
                  item.id === productId
                    ? { ...item, quantity }
                    : item
                )
          );
        }}
      />
      <Toast 
        show={showToast}
        message="Produto adicionado ao carrinho!"
      />
    </div>
  );
}

export default App;