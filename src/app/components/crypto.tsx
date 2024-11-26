"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Crypto = () => {
  const [coins, setCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoinsRates = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`
        );
        setCoins(response.data);
        setError(null); // Clear any previous errors
      } catch (err: any) {
        console.error("Error fetching coin data:", err);
        setError(
          err?.response?.data?.message ||

            "Failed to fetch coin data. Please try again later." // Handle error message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCoinsRates();
  }, []);

  if (loading) {
    return <div className="text-center text-xl text-blue-500">Loading Data...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-semibold text-center text-gradient bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 mb-8">
        Crypto Dashboard
      </h1>

      {/* Grid Layout for Coins */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="bg-gradient-to-r from-blue-400 to-green-400 p-6 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
          >
            <h2 className="text-xl font-bold text-center text-white mb-4 uppercase">{coin.name}</h2>

            <div className="mb-4">
              <p className="text-lg text-black">Price (USD):</p>
              <p className="text-xl font-bold text-white">${coin.current_price.toFixed(2)}</p>
            </div>

            <div className="mb-4">
              <p className="text-lg text-black">Market Cap:</p>
              <p className="text-xl font-bold text-white">${coin.market_cap.toLocaleString()}</p>
            </div>

            <div className="mb-4">
              <p className="text-lg text-black">24h Change:</p>
              <p
                className={`text-xl font-semibold ${
                  coin.price_change_percentage_24h < 0 ? "text-red-500" : "text-black-500"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crypto;
