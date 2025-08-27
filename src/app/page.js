import Image from "next/image";
import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductsHighlights";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     <div className="mt-5 mb-5">
      <Hero></Hero>
      </div>
      <div className="mt-5 mb-5">
      <ProductHighlights></ProductHighlights>
      </div>
          
    </div>
  );
}
