import Link from "next/link";


export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        <Link href="/" className="text-2xl font-bold text-gray-800">
          ShopEase
        </Link>

        
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        
        

        
        <div className="flex items-center space-x-4">
          
          <Link href="/login">
           Login
          </Link>
        </div>
      </div>
    </header>
  );
}

