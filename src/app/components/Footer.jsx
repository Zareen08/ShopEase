"use client";

import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
       
        <div>
          <h2 className="text-xl font-bold mb-4">ShopEase</h2>
          <p className="text-gray-400">
            Your one-stop shop for high-quality products at the best prices.
            Fast delivery and excellent customer service guaranteed.
          </p>
        </div>

        
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">Products</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-blue-500" /> contact@shopease.com
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-white">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
