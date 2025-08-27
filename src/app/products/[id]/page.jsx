"use client";

import { Tag, Star, ShoppingCart } from "lucide-react";
import { useParams } from "next/navigation";


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

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center items-start p-8">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-6 p-6">
      
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg w-full h-auto"
          />
        </div>

       
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>

            <div className="flex items-center gap-4 mb-4">
              <Tag className="w-5 h-5 text-blue-600" />
              <span className="text-xl font-semibold">${product.price}</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>{product.rating} / 5</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="w-5 h-5 text-green-600" />
              <span>{product.stock} in stock</span>
            </div>
          </div>

          <button className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
