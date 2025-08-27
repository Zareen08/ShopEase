"use client";

import { Tag, Star, ShoppingCart } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 79.99,
    description:
      "High-quality wireless headphones with noise cancellation, long battery life, and comfortable fit.",
    rating: 4.5,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 129.99,
    description:
      "Smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.",
    rating: 4.7,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "Gaming Mouse",
    price: 49.99,
    description:
      "Ergonomic gaming mouse with customizable buttons, RGB lighting, and high precision.",
    rating: 4.3,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-12">Our Products</h1>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg w-full h-60 object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>{product.rating} / 5</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="w-5 h-5 text-green-600" />
              <span>{product.stock} in stock</span>
            </div>
            <div className="flex items-center gap-4">
              <Tag className="w-5 h-5 text-blue-600" />
              <span className="text-xl font-bold">${product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
