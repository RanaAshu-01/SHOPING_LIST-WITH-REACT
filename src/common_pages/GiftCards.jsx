// componets/GiftCards.jsx
import { useState } from "react";

const GiftCards = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const predefinedAmounts = [100, 250, 500, 1000];

  const handlePurchase = () => {
    if (!amount) {
      alert("Please select an amount or enter a custom value");
      return;
    }
    setMessage(`🎉 Gift Card of ₹${amount} purchased successfully!`);
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-green-500 mb-6 text-center">Gift Cards</h1>
        <p className="text-center text-gray-700 mb-4">
          Send the perfect gift! Choose a predefined amount or enter your own.
        </p>

        {/* Predefined amounts */}
        <div className="flex gap-4 flex-wrap justify-center mb-4">
          {predefinedAmounts.map((amt) => (
            <button
              key={amt}
              onClick={() => setAmount(amt)}
              className={`px-4 py-2 rounded-lg border font-semibold hover:bg-green-500 hover:text-white transition ${
                amount == amt ? "bg-green-500 text-white" : "bg-gray-100"
              }`}
            >
              ₹{amt}
            </button>
          ))}
        </div>

        {/* Custom amount */}
        <input
          type="number"
          placeholder="Enter custom amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={handlePurchase}
          className="w-full bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition"
        >
          Purchase Gift Card
        </button>

        {message && (
          <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>
        )}
      </div>
    </div>
  );
};

export default GiftCards;
