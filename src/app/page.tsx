import Image from "next/image";
import { Search, MapPin, ShoppingBag, User, ChevronRight, Heart } from "lucide-react";
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
    <div className="min-h-screen flex flex-col font-sans bg-[#F0F2F5]">
      
      {/* --- HEADER --- */}
      <header className="bg-[#800000] h-20 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 h-full flex items-center justify-between gap-4">
          
          {/* Logo Section */}
          <div className="relative w-28 shrink-0">
            <div className="absolute top-[-25px] left-18 w-28 h-28 bg-white rounded-full border-[5px] border-white flex items-center justify-center shadow-lg z-30 overflow-hidden cursor-pointer">
               {/* আপনার লোগো ফাইলটি এখানে বসানো হয়েছে */}
               <div className="relative w-full h-full p-3">
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
              placeholder="Search Seasonal Product" 
              className="w-full h-10 pl-5 pr-10 rounded-full text-sm focus:outline-none shadow-inner text-black bg-white"
            />
             <Search className="absolute right-3 top-2.5 text-gray-500 w-5 h-5" />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition shadow-sm group">
                <MapPin className="text-black w-5 h-5" />
             </div>
             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition shadow-sm relative group">
                <ShoppingBag className="text-black w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">0</span>
             </div>
             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition shadow-sm group">
                <User className="text-black w-5 h-5" />
             </div>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="container mx-auto px-4 py-6 flex gap-6 flex-1 items-start">
        
        {/* 1. LEFT SIDEBAR (Categories) */}
        <aside className="w-64 bg-[#EAEAEA] py-4 pt-10 hidden lg:block shrink-0 rounded shadow-sm self-start sticky top-24">
          <ul className="space-y-0.5">
            {categories.map((cat, idx) => (
              <li key={idx} className="px-5 py-2 text-gray-700 text-[14px] font-medium hover:text-[#800000] hover:bg-white cursor-pointer flex justify-between items-center group transition-colors border-l-4 border-transparent hover:border-[#800000]">
                {cat}
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#800000] opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
            ))}
          </ul>
        </aside>

        {/* 2. CENTER CONTENT (Hero & Products) */}
        <main className="flex-1 min-w-0">
          
          {/* Main Hero Banner */}
          <div className="w-full h-[320px] rounded overflow-hidden relative shadow-md bg-gray-300">
             <div className="absolute inset-0 w-full h-full">
               <Image 
                 src="/banner.jpeg" 
                 alt="Seasonal Banner" 
                 fill
                 className="object-cover object-center"
                 priority
               />
               <div className="absolute inset-0 bg-black/5"></div>
             </div>
          </div>

          {/* Seasonal Circles (Overlapping the banner) */}
          <div className="relative z-10 flex justify-center lg:justify-between gap-3 -mt-10 mb-8 px-4 flex-wrap">
            {seasons.map((season, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full bg-[#6B0F0F] border-[4px] border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 hover:bg-[#8B0000]">
                  <span className="text-white font-bold text-lg">{season.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-[#EAEAEA]">
                
                {/* Product Image Area */}
                {/* Product Image (Top White Part) */}
                <div className="h-48 w-full bg-white flex items-center justify-center relative p-4 overflow-hidden">
                  
                  {/* Next.js Image Component */}
                  <div className="relative w-full h-full">
                    <Image
                      src={product.img}        // আপনার ডাটা থেকে ইমেজের পাথ
                      alt={product.title}      // এসইও (SEO) এর জন্য টাইটেল
                      fill                     // প্যারেন্ট ডিভ (div) এর পুরো জায়গা নিবে
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Wishlist Icon on Hover */}
                  <button className="absolute top-2 right-2 bg-gray-100 p-1.5 rounded-full text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 hover:bg-white z-10">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Product Info Area */}
                <div className="p-3 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-900 text-[16px] leading-tight mb-1 group-hover:text-[#800000] transition-colors">{product.title}</h3>
                  <p className="text-[12px] text-gray-500 mb-3">{product.sub}</p>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-[11px] font-bold text-gray-600 bg-white px-2 py-1 rounded shadow-sm border border-gray-200">{product.weight}</span>
                    <span className="text-[#D00000] font-bold text-lg">Tk. {product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* 3. RIGHT SIDEBAR (3 Banners in one DIV) */}
        {/* আপনার রিকোয়ারমেন্ট অনুযায়ী ৩টি ব্যানার একটি প্যারেন্ট div (aside) এর মধ্যে রাখা হয়েছে */}
        <aside className="w-60 hidden xl:flex flex-col gap-5 shrink-0 sticky top-24">
          
          {/* Banner 1: Summer Sale */}
          <div className="bg-[#FFD700] h-44 rounded-lg relative overflow-hidden shadow-md group cursor-pointer hover:brightness-105 transition-all w-full">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
               <div className="w-16 h-1 bg-white mb-2 opacity-50"></div>
               <h3 className="text-white drop-shadow-md text-3xl font-black italic leading-none">Summer<br/>SALE</h3>
               <span className="bg-white text-orange-500 px-3 py-1 rounded-full text-xs font-bold mt-2 shadow-sm group-hover:scale-110 transition-transform">50% OFF</span>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
          </div>

          {/* Banner 2: Flash Sale */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-32 rounded-lg relative overflow-hidden shadow-md cursor-pointer flex items-center justify-between px-3 group hover:brightness-105 transition-all w-full">
             <div className="absolute left-[-10px] top-0 bottom-0 w-16 bg-yellow-400 skew-x-[-20deg] border-r-4 border-white"></div>
             
             <div className="relative z-10 pl-6">
               <div className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 inline-block transform -rotate-6 shadow">FLASH</div>
               <h3 className="font-black text-white italic text-2xl uppercase leading-none mt-1 drop-shadow-md">SALE</h3>
             </div>
             
             <div className="relative z-10 text-right">
                <span className="block text-yellow-300 font-black text-xl drop-shadow">-50%</span>
                <button className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow hover:bg-red-700 transition mt-1">BUY NOW!</button>
             </div>
          </div>

          {/* Banner 3: Best Deal Grid */}
          {/* Best Deal Grid */}
            <div className="bg-white p-3 rounded shadow-sm w-full">
              <h3 className="font-black text-2xl mb-2 text-center text-gray-800" style={{ fontFamily: 'serif' }}>Best Deal</h3>
              
              <div className="grid grid-cols-2 gap-2">
                {/* এখানে products অ্যারেকে ম্যাপ করা হয়েছে */}
                {products.slice(0, 8).map((product) => (
                  <div key={product.id} className="aspect-square bg-white border border-gray-200 rounded hover:border-[#800000] cursor-pointer transition-all hover:shadow-md relative overflow-hidden group">
                    
                    {/* Image Component */}
                    <Image
                      src={product.img}       // প্রোডাক্টের ইমেজ পাথ
                      alt={product.title}     // টাইটেল
                      fill                    // বক্সের সাইজ অনুযায়ী ফিট হবে
                      className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Optional: Hover overlay for effect */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>

        </aside>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-[#6B0F0F] text-white pt-10 border-t-4 border-[#8B0000] mt-auto">
        <div className="container mx-auto  px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm pb-8">
           {/* Address */}
           <div>
             <h4 className="font-bold mb-3 text-base text-yellow-400 border-b border-white/20 inline-block pb-1">Office Address:</h4>
             <p className="leading-relaxed opacity-90 text-xs">
               Milon Cinema Hall, Puran Bazar Main Road,<br/>
               Madaripur Sadar, Madaripur,<br/>
               Dhaka, Bangladesh
             </p>
           </div>
           
           {/* Contact */}
           <div>
             <h4 className="font-bold mb-3 text-base text-yellow-400 border-b border-white/20 inline-block pb-1">Contact us:</h4>
             <p className="opacity-90 text-xs">+8801705946829</p>
             <p className="opacity-90 text-xs">seasonalbazar.info@gmail.com</p>
           </div>

           {/* Payment */}
           <div>
             <h4 className="font-bold mb-3 text-base text-yellow-400 border-b border-white/20 inline-block pb-1">Mobile Payment in:</h4>
             <p className="opacity-90 text-xs">01705946829 (Bkash)</p>
             <p className="opacity-90 text-xs">0192287733 (Nagad)</p>
           </div>

           {/* Banking */}
           <div>
             <h4 className="font-bold mb-3 text-base text-yellow-400 border-b border-white/20 inline-block pb-1">Banking:</h4>
             <p className="opacity-90 text-xs">Dutch-Bangla Bank PLC.</p>
             <p className="opacity-90 text-xs">Madaripur Branch</p>
           </div>
        </div>

        {/* Copyright */}
        <div className="bg-[#3E0000]">
          <div className=" container mx-auto flex justify-between item-center py-4 text-center text-[11px] text-gray-400 border-t border-[#500000]">
        <p>Copyright © 2026 Seasonal Bazar All rights reserved.</p>
        <p className="mt-1">
          Development by:{" "}
          <Link 
            href="https://pixelandcode.agency/" 
            target="_blank" 
            className="text-white font-bold cursor-pointer hover:underline"
          >
            Pixel & Code
          </Link>
        </p>
      </div>
        </div>
      </footer>

    </div>
  );
}