"use client";
import { useState } from "react";
import Crypto from "./components/crypto";

export default function Home() {
  const [showCrypto, setShowCrypto] = useState(false);

  const handleExploreClick = () => {
    setShowCrypto(true);
    document.getElementById("crypto-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black min-h-screen">
      <header className="text-center py-16 px-4 text-white">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-400 
          transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500"
        >
          Crypto Data Dashboard
          <br />
          Your gateway to comprehensive Crypto InsiGhts!
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto transition-all duration-300 hover:text-cyan-400">
          Stay Updated with the live crypto prices in market. Easily access the market coin rates with APIs.
        </p>
        <button
          onClick={handleExploreClick}
          className="inline-block px-8 py-4 sm:px-10 sm:py-5 bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-all duration-300 
            hover:bg-cyan-400 hover:text-white hover:scale-105"
          aria-label="Explore Cryptocurrency Stats"
        >
          Crypto Currency Current Data Stats
        </button>
      </header>

      {showCrypto && (
        <section id="crypto-section" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <Crypto />
          </div>
        </section>
      )}

      <footer className="bg-black py-6 text-center text-white">
        <p className="text-sm sm:text-lg">
          &copy; {new Date().getFullYear()} Crypto Dashboard. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm mt-2">
          Powered by <span className="font-semibold">Muhammad Owais</span>
        </p>
      </footer>
    </div>
  );
}
