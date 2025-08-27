"use client";

import { Star } from "lucide-react";

const products = [
  {
    name: "Wireless Headphones",
    price: 79.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Smart Watch",
    price: 129.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Gaming Mouse",
    price: 49.99,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1611599533242-6f5a3ec7b1f3?auto=format&fit=crop&w=800&q=80"
  },
];

export default function ProductHighlights() {
  return (
    <section className="relative py-20 bg-gray-50 text-center z-0">
  <h2 className="text-3xl font-bold mb-12">Featured Products</h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {products.map((product, index) => (
      <div key={index} className="bg-white rounded-lg shadow-lg p-4 relative z-10">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg mb-4 w-full h-60 object-cover"
        />
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>{product.rating} / 5</span>
        </div>
        <p className="text-lg font-bold mb-4">${product.price}</p>
        <a
          href="/products"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Buy Now
        </a>
      </div>
    ))}
  </div>
</section>
  );
}
