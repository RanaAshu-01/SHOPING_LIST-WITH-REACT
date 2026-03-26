import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import emptyCartAnimation from "../assets/animations/empty.json";
import CountUp from "../componets/CountUp"



const CartPage = () => {
  
  const { cartItems, increaseQty, decreaseQty, removeItem, user } = useContext(CartContext);


  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  



  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col lg:flex-row gap-6 relative">


      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center  justify-center mt-20">

          <div className="w-full h-64 flex flex-col items-center justify-center">
            <Lottie
              animationData={emptyCartAnimation}
              loop={true}
              className="w-48 h-48 sm:w-80 sm:h-80"
            />

            <p
              className="text-lg font-semibold mt-4 text-gray-700"
            >🛒 Your cart is empty!
            </p>
          </div>
          <Link
            to="/"
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition sm:mt-20"
          >
            Go Back to Home
          </Link>

        </div>) : (

        <div className="flex-1 flex flex-wrap justify-center gap-6">
          {cartItems.map((item, index) => {
            if (!item) return null;

            return (
              <div
                key={item?.id || index}
                className="flex h-fit flex-col m-4 p-4 rounded-2xl bg-white shadow-lg w-60 hover:scale-101 transition-transform"
              >
                <div className="w-full h-40 overflow-hidden rounded-2xl mb-3">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center mb-3">
                  <h4 className="font-semibold text-lg text-gray-800 truncate">
                    {item?.title}
                  </h4>
                  <p className="text-red-500 font-bold text-lg mt-1">
                    $ {item?.price || 0}
                  </p>
                </div>

                <div className="flex items-center justify-between w-36 mx-auto mb-4 bg-gray-100 rounded-full px-3 py-1 shadow-sm">
                  <button
                    onClick={() => decreaseQty(item?.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-red-100 text-lg font-bold transition"
                  >
                    −
                  </button>

                  <span className="text-base font-semibold text-gray-800">
                    {item?.quantity || 1}
                  </span>

                  <button
                    onClick={() => increaseQty(item?.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-green-100 text-lg font-bold transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item?.id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition shadow-md"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )
      }

      {/* Left: Cart Items */}


      {/* Right: Summary - Desktop */}
      {cartItems.length >= 1 && (<div className="hidden lg:flex flex-col justify-between p-6 rounded-2xl bg-white shadow-lg w-72 h-fit sticky top-6">
        <h2 className="text-2xl font-bold mb-4">Place Order ✅</h2>

        <p className="text-lg font-semibold mb-2">
          Total Items: <span className="text-green-500">{cartItems.length}</span>
        </p>
        <p className="text-lg font-semibold mb-6">
          Total Amount: <span className="text-red-500"> $ <CountUp targetAmount={totalAmount } /> </span>
        </p>
        <p className="text-sm font-semibold mb-6">
          Pay INR: <span className="text-red-500"> $ <CountUp targetAmount={totalAmount * 91} /> </span>
        </p>

        <Link
          to={user ? "/order-placed" : "/login"}
          className="text-center px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
        >
          Place Order
        </Link>
      </div>)}

      {/* Mobile / iPad: Bottom Navbar */}
      {cartItems.length >= 1 && (<div className="lg:hidden fixed bottom-14 left-0 w-full bg-white border-t border-t-gray-300 py-1 px-3 flex justify-between items-center shadow-md">
        <div>
          <p className="text-gray-800 font-semibold">
            Total: <span className="text-red-500">$ <CountUp targetAmount={totalAmount} /> </span>
          </p>
          <p className="text-gray-800 text-xs font-semibold">
            Pay INR: <span className="text-red-600 font-bold">$ <CountUp targetAmount={totalAmount * 91} /> </span>
          </p>
          <p className="text-gray-600 text-sm">{cartItems.length} Items</p>
        </div>
        <Link
          to={user ? "/order-placed" : "/login"}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Place Order
        </Link>
      </div>
      )}
    </div>

  );
};

export default CartPage;
