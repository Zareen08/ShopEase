"use client";

export default function Hero() {
  const hero = {
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&h=900&q=80",
    title: "Welcome to ShopEase",
    description: "Discover amazing products at the best prices. Shop now and enjoy fast delivery!",
    cta: "Shop Now",
    ctaLink: "/shop",
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden z-0">

  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&h=900&q=80')` }}
  />

  <div className="absolute inset-0 bg-black/40" />


  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
      Welcome to ShopEase
    </h1>
    <p className="text-xl md:text-2xl lg:text-3xl mb-8">
      Discover amazing products at the best prices. Shop now and enjoy fast delivery!
    </p>
    <a
      href="/shop"
      className="bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
    >
      Shop Now
    </a>
  </div>
</section>

  );
}
