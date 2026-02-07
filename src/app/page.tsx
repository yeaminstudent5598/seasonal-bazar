import Image from "next/image";
import { Search, MapPin, ShoppingBag, User, ChevronRight, Heart, Menu, Home as HomeIcon, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // ১. সাইডবার ক্যাটাগরি ডাটা
  const categories = [
    "Summer Item", "Autumn Item", "Monsoon Item", "Winter Eve Item", 
    "Winter Item", "Sprint Item", "Food Products", "Fashion Products", 
    "Dry Food", "Handi Craft", "Dates", "Mango", "Sweets", 
    "Pickel", "Suger", "Puffed Rice", "Flatten Rice", 
    "Corn", "Kashundi", "Palm Candy", "Ghee"
  ];

  // ২. সিজনাল বাটন ডাটা
  const seasons = [
    { name: "গ্রীষ্ম", color: "bg-[#800000]" },
    { name: "বর্ষা", color: "bg-[#800000]" },
    { name: "শরৎ", color: "bg-[#800000]" },
    { name: "হেমন্ত", color: "bg-[#800000]" },
    { name: "শীত", color: "bg-[#800000]" },
    { name: "বসন্ত", color: "bg-[#800000]" },
  ];

  // ৩. প্রোডাক্ট ডাটা
  const products = [
    { id: 1, title: "Khajur Gur Patali", sub: "Chuadanga Harvest", price: "750", weight: "1 KG", img: "/images/1.jpg" },
    { id: 2, title: "Haribhanga Mango", sub: "Rajshahi Harvest", price: "750", weight: "1 KG", img: "/images/2.jpg" },
    { id: 3, title: "Khajur Gur Jhola", sub: "Chuadanga Harvest", price: "750", weight: "1 KG", img: "/images/3.png" },
    { id: 4, title: "SIWI Dates", sub: "Egypt Harvest", price: "750", weight: "1 KG", img: "/images/product4.jpg" },
    { id: 5, title: "Browan Sugar", sub: "Bangladeshi Harvest", price: "750", weight: "1 KG", img: "/images/5.jpg" },
    { id: 6, title: "Bagura Misti Doi", sub: "Bagura Making", price: "750", weight: "1 KG", img: "/images/6.1.jpg" },
    { id: 7, title: "Tangailer Chamcham", sub: "Tangail Porabari Making", price: "750", weight: "1 KG", img: "/images/7.jpg" },
    { id: 8, title: "Sponge Rosgolla", sub: "Madaripur Making", price: "750", weight: "1 KG", img: "/images/8.jpg" },
  ];

  return (
    // pb-20 added to prevent content hiding behind bottom nav on mobile
    <div className="min-h-screen flex flex-col font-sans bg-[#F0F2F5] pb-20 md:pb-0">
      
      {/* --- HEADER --- */}
      <header className="bg-[#800000] h-14 md:h-20 sticky top-0 z-50 shadow-md transition-all">
        <div className="container mx-auto px-4 h-full flex items-center justify-between gap-4">
          
          {/* MOBILE HEADER LAYOUT */}
          <div className="flex items-center gap-3 md:hidden w-full">
             <Menu className="text-white w-6 h-6 cursor-pointer" />
             <span className="text-white font-bold text-lg flex-1">Seasonal Bazar</span>
             <Search className="text-white w-5 h-5 cursor-pointer" />
             <div className="relative">
                <ShoppingBag className="text-white w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[9px] font-bold w-3 h-3 rounded-full flex items-center justify-center">0</span>
             </div>
          </div>

          {/* DESKTOP HEADER LAYOUT */}
          <div className="hidden md:flex items-center justify-between w-full gap-4">
            
            {/* Desktop Logo Section */}
            <div className="relative w-28 shrink-0">
              <div className="absolute top-[-30px] left-18 w-24 h-24 lg:w-28 lg:h-28 bg-white rounded-full border-[5px] border-white flex items-center justify-center shadow-lg z-30 overflow-hidden cursor-pointer group">
                 <div className="relative w-full h-full p-3 group-hover:scale-105 transition-transform">
                   <Image 
                     src="/SeasonalBazar_Logo.png" 
                     alt="Seasonal Bazar Logo" 
                     fill
                     className="object-contain"
                     priority
                   />
                 </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl relative">
              <input 
                type="text" 
                placeholder="Search Seasonal Product..." 
                className="w-full h-10 pl-5 pr-10 rounded-full text-sm focus:outline-none shadow-inner text-black bg-white focus:ring-2 focus:ring-yellow-400 transition-all"
              />
               <Search className="absolute right-3 top-2.5 text-gray-500 w-5 h-5" />
            </div>

            {/* Desktop Icons */}
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition shadow-sm group">
                  <MapPin className="text-black w-5 h-5 group-hover:text-[#800000]" />
               </div>
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition shadow-sm relative group">
                  <ShoppingBag className="text-black w-5 h-5 group-hover:text-[#800000]" />
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">0</span>
               </div>
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition shadow-sm group">
                  <User className="text-black w-5 h-5 group-hover:text-[#800000]" />
               </div>
            </div>
          </div>

        </div>
      </header>

      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="container mx-auto px-3 md:px-4 py-4 md:py-6 flex gap-6 flex-1 items-start">
        
        {/* 1. LEFT SIDEBAR (Categories) - Hidden on Mobile */}
        <aside className="w-64 bg-white border border-gray-200 py-4 hidden lg:block shrink-0 rounded-lg shadow-sm self-start sticky top-24">
          <ul className="space-y-0.5">
            {categories.map((cat, idx) => (
              <li key={idx} className="px-5 py-2.5 text-gray-700 text-[14px] font-medium hover:text-[#800000] hover:bg-red-50 cursor-pointer flex justify-between items-center group transition-colors border-l-4 border-transparent hover:border-[#800000]">
                {cat}
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#800000] transition-all group-hover:translate-x-1" />
              </li>
            ))}
          </ul>
        </aside>

        {/* 2. CENTER CONTENT (Hero & Products) */}
        <main className="flex-1 min-w-0 w-full">
          
          {/* Main Hero Banner */}
          <div className="w-full h-[160px] sm:h-[220px] md:h-[320px] rounded-lg md:rounded-xl overflow-hidden relative shadow-md bg-gray-200 group">
             <div className="absolute inset-0 w-full h-full">
               <Image 
                 src="/banner.jpeg" 
                 alt="Seasonal Banner" 
                 fill
                 className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
             </div>
          </div>

          {/* Seasonal Circles (Scrollable on Mobile) */}
          <div className="relative z-10 flex gap-3 md:justify-between -mt-8 md:-mt-10 mb-6 md:mb-8 px-2 md:px-6 overflow-x-auto no-scrollbar py-2">
            {seasons.map((season, idx) => (
              <div key={idx} className="flex flex-col items-center group shrink-0 first:pl-2 last:pr-2">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#800000] border-[3px] md:border-[5px] border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 hover:bg-[#A00000]">
                  <span className="text-white font-bold text-sm md:text-xl">{season.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Product Grid */}
          <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4 px-1 border-l-4 border-[#800000] pl-3">Popular Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100">
                
                {/* Product Image Area */}
                <div className="h-36 md:h-48 w-full bg-white flex items-center justify-center relative p-3 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Floating Action Button */}
                  <button className="absolute top-2 right-2 bg-gray-100/80 p-1.5 rounded-full text-gray-500 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:text-red-600 hover:bg-white z-10 shadow-sm backdrop-blur-sm">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Product Info Area */}
                <div className="p-3 flex-1 flex flex-col bg-gray-50/50">
                  <h3 className="font-bold text-gray-800 text-[13px] md:text-[15px] leading-tight mb-1 line-clamp-2 h-9 md:h-10 group-hover:text-[#800000] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-[10px] md:text-[11px] text-gray-500 mb-3 uppercase tracking-wide">{product.sub}</p>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-[10px] md:text-[11px] font-bold text-gray-600 bg-white px-2 py-0.5 rounded border border-gray-200 shadow-sm">{product.weight}</span>
                    <span className="text-[#D00000] font-black text-sm md:text-lg">Tk. {product.price}</span>
                  </div>

                  {/* Add to Cart (Mobile Only - Optional for 'App feel') */}
                  <button className="mt-3 w-full bg-[#800000] text-white text-[10px] md:text-xs font-bold py-1.5 md:py-2 rounded hover:bg-[#600000] transition active:scale-95 md:hidden">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* 3. RIGHT SIDEBAR (Banners) - Hidden on Mobile */}
        <aside className="w-64 hidden xl:flex flex-col gap-6 shrink-0 sticky top-24">
          
          {/* Summer Sale */}
          <div className="bg-[#FFD700] h-48 rounded-xl relative overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-all w-full flex items-center justify-center text-center">
             <div className="z-10 px-4">
               <h3 className="text-white drop-shadow-md text-3xl font-black italic">Summer<br/>SALE</h3>
               <span className="bg-white text-orange-600 px-4 py-1 rounded-full text-xs font-bold mt-2 inline-block shadow-sm">50% OFF</span>
             </div>
             <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          </div>

          {/* Flash Sale */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 h-36 rounded-xl relative overflow-hidden shadow-lg flex items-center justify-between px-4 w-full cursor-pointer hover:brightness-105 transition-all">
             <div className="absolute left-[-15px] top-0 bottom-0 w-16 bg-yellow-400 skew-x-[-20deg] border-r-4 border-white shadow"></div>
             <div className="z-10 pl-6">
               <div className="bg-red-600 text-white text-[9px] font-extrabold px-2 py-0.5 inline-block -rotate-6 shadow">FLASH</div>
               <h3 className="font-black text-white italic text-2xl mt-1 uppercase">Sale</h3>
             </div>
             <div className="z-10 text-right">
                <span className="block text-yellow-300 font-black text-2xl drop-shadow-md">-50%</span>
                <button className="bg-white text-blue-700 text-[10px] font-bold px-3 py-1 rounded shadow mt-1">BUY NOW</button>
             </div>
          </div>

          {/* Best Deal Grid */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-full">
            <h3 className="font-black text-xl mb-3 text-center text-gray-800 border-b pb-2" style={{ fontFamily: 'serif' }}>Best Deal</h3>
            <div className="grid grid-cols-2 gap-2">
              {products.slice(0, 8).map((product) => (
                <div key={product.id} className="aspect-square bg-gray-50 border border-gray-200 rounded-lg hover:border-[#800000] cursor-pointer transition-all relative overflow-hidden group">
                  <Image src={product.img} alt={product.title} fill className="object-contain p-2 group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* --- BOTTOM NAVIGATION BAR (FIXED ON MOBILE) --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex justify-between items-center px-6 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
         <div className="flex flex-col items-center gap-1 text-[#800000] cursor-pointer">
            <HomeIcon className="w-5 h-5" />
            <span className="text-[10px] font-medium">Home</span>
         </div>
         <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#800000] cursor-pointer transition-colors">
            <LayoutGrid className="w-5 h-5" />
            <span className="text-[10px] font-medium">Category</span>
         </div>
         <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#800000] cursor-pointer transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-1 bg-[#800000] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">0</span>
            <span className="text-[10px] font-medium">Cart</span>
         </div>
         <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#800000] cursor-pointer transition-colors">
            <User className="w-5 h-5" />
            <span className="text-[10px] font-medium">Account</span>
         </div>
      </div>

      {/* --- FOOTER (Hidden on Mobile, Visible on Desktop) --- */}
      <footer className="bg-[#6B0F0F] text-white pt-10 border-t-8 border-[#800000] mt-auto hidden md:block">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm pb-8">
           <div>
             <h4 className="font-bold mb-3 text-base text-yellow-400 border-b border-white/20 inline-block pb-1">Office Address:</h4>
             <p className="leading-relaxed opacity-90 text-xs">Milon Cinema Hall, Puran Bazar,<br/>Madaripur Sadar, Bangladesh</p>
           </div>
           <div>
             <h4 className="font-bold mb-3 text-base text-yellow-400 border-b border-white/20 inline-block pb-1">Contact us:</h4>
             <p className="opacity-90 text-xs">+8801705946829</p>
             <p className="opacity-90 text-xs">info@seasonalbazar.com</p>
           </div>
           <div>
             <h4 className="font-bold mb-3 text-base text-yellow-400 border-b border-white/20 inline-block pb-1">Payment:</h4>
             <p className="opacity-90 text-xs">Bkash, Nagad, Rocket</p>
           </div>
           <div>
             <h4 className="font-bold mb-3 text-base text-yellow-400 border-b border-white/20 inline-block pb-1">Banking:</h4>
             <p className="opacity-90 text-xs">Dutch-Bangla Bank PLC.</p>
           </div>
        </div>

        <div className="bg-[#3E0000] py-4 text-center text-[11px] text-gray-400 border-t border-[#500000]">
          <p>Copyright © 2026 Seasonal Bazar All rights reserved.</p>
          <p className="mt-1">
            Development by: <Link href="https://pixelandcode.agency/" target="_blank" className="text-white font-bold cursor-pointer hover:underline">Pixel & Code</Link>
          </p>
        </div>
      </footer>

    </div>
  );
}