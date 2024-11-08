import React from 'react';

const categories = [
  'All Parts',
  'Engine Components',
  'Navigation Equipment',
  'Safety Gear',
  'Deck Hardware',
  'Electronics',
  'Maintenance'
];

export function CategoryFilter() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}