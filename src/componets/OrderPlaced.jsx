import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const OrderPlacedPage = () => {

  const navigate = useNavigate();
  const { cartItems, handlePayment } = useContext(CartContext);

  // Total calculate
  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">

      {/* Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-md flex flex-col gap-4">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Order Summary 🛒
        </h2>

        {/* Items List */}
        <div className="max-h-60 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b py-2 text-sm"
              >
                <span>{item.title}</span>
                <span>₹{item.price*91}</span>
              </div>
            ))
          )}
        </div>

        {/* Total */}
        <div className="flex justify-between font-semibold text-lg mt-2">
          <span>Total:</span>
          <span>₹{totalAmount*91}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-4">

          {/* Pay Now */}
          <button
            onClick={() => handlePayment(totalAmount *91)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition active:scale-95"
          >
            Pay Now 💳
          </button>

          {/* Back */}
          <button
            onClick={() => navigate("/")}
            className="bg-gray-300 hover:bg-gray-400 text-black py-2 rounded-lg font-semibold transition"
          >
            Continue Shopping 🏠
          </button>

        </div>
      </div>
    </div>
  );
};

export default OrderPlacedPage;
