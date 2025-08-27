"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          We'd love to hear from you! If you have any questions, feedback, or
          inquiries about our products, feel free to reach out.
        </p>

        <div className="flex items-center gap-4 mb-4 justify-center">
          <Mail className="w-6 h-6 text-blue-600" />
          <span className="text-gray-700 font-medium">contact@shopease.com</span>
        </div>

        <div className="flex items-center gap-4 mb-4 justify-center">
          <Phone className="w-6 h-6 text-green-600" />
          <span className="text-gray-700 font-medium">+880 1234 567890</span>
        </div>

        <div className="flex items-center gap-4 justify-center">
          <MapPin className="w-6 h-6 text-red-600" />
          <span className="text-gray-700 font-medium">
            123 Market Street, Dhaka, Bangladesh
          </span>
        </div>
      </div>
    </main>
  );
}
