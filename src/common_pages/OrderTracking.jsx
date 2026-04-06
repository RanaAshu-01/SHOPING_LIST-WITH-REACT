// componets/OrderTracking.jsx
import { useState } from "react";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();

    // Simulate fetching order status
    const fakeStatus = ["Processing", "Shipped", "Out for Delivery", "Delivered"];
    const randomStatus = fakeStatus[Math.floor(Math.random() * fakeStatus.length)];
    setStatus(randomStatus);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-green-500 mb-6 text-center">Order Tracking</h1>

        <form onSubmit={handleTrack} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition"
          >
            Track Order
          </button>
        </form>

        {status && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-gray-700">
              Order <span className="font-semibold">{orderId}</span> is currently:
            </p>
            <p className="mt-2 text-lg font-bold text-green-500">{status}</p>
          </div>
        )}

        <p className="text-center text-gray-500 mt-6">
          Stay updated on your order status with Shopping List! 🛒
        </p>
      </div>
    </div>
  );
};

export default OrderTracking;
