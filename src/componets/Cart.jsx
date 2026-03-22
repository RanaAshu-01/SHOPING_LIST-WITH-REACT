import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const CartPage = () => {
  const { cartItems, increaseQty, decreaseQty, removeItem } = useContext(CartContext);
  const { user } = useContext(AuthContext)

  // Total amount calculate karte hain
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-2xl mb-4 text-gray-500">🛒 Cart empty 😢</p>
          <Link
            to="/"
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Go Back to Home
          </Link>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {/* Cart items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col m-4 p-4 rounded-2xl bg-white shadow-lg w-60 hover:scale-105 transition-transform"
            >
              {/* Image */}
              <div className="w-full h-40 overflow-hidden rounded-2xl mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Price */}
              <div className="text-center mb-3">
                <h4 className="font-semibold text-lg text-gray-800 truncate">{item.title}</h4>
                <p className="text-red-500 font-bold text-lg mt-1">$ {item.price}</p>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center justify-between w-32 mx-auto mb-3">
                <button
                  className="w-8 h-8 bg-red-500 text-white rounded flex items-center justify-center font-bold hover:bg-red-600 transition"
                  onClick={() => decreaseQty(item.id)}
                >
                  −
                </button>
                <span className="font-semibold text-lg">{item.quantity}</span>
                <button
                  className="w-8 h-8 bg-green-500 text-white rounded flex items-center justify-center font-bold hover:bg-green-600 transition"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeItem(item.id)}
                className="w-full py-2 bg-gray-200 hover:bg-red-500 hover:text-white text-gray-700 font-semibold rounded-lg transition"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Summary + Checkout */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-white shadow-lg w-72 h-fit">
            <h2 className="text-2xl font-bold mb-4">Cart Summary ✅</h2>
            <p className="text-lg font-semibold mb-2">
              Total Items: <span className="text-green-500">{cartItems.length}</span>
            </p>
            <p className="text-lg font-semibold mb-6">
              Total Amount: <span className="text-red-500">${totalAmount}</span>
            </p>

            {!user ? (<Link
              to="/login"
              className="text-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
            >
              Proceed to Checkout
            </Link>) : (<Link
              to=""
              className="text-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
            >
              Proceed to Checkout
            </Link>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
