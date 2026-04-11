import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import emptyCartAnimation from "../assets/animations/empty.json";
import CountUp from "../componets/common/CountUp"
import { Trash2, ShoppingCart, Flame } from "lucide-react";
import { div } from "framer-motion/client";



const CartPage = () => {

  const { cartItems, increaseQty, decreaseQty, removeItem, user } = useContext(CartContext);


  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  return (
    <div className="min-h-screen bg-gray-200 px-2 py-6 xl:flex gap-5" >




      {cartItems.length === 0 ? (
          <div className="flex flex-col w-full self-center items-center mt-14 md:mt-40 xl:mt-0">

            <div className="w-full h-64 flex flex-col items-center justify-center">
              <Lottie
                animationData={emptyCartAnimation}
                loop={true}
                className="w-48 h-48 sm:w-80 sm:h-80"
              />

              <p
                className="text-lg font-semibold mt-4 text-gray-700 flex items-center gap-2"
              >
                <ShoppingCart />  Your cart is empty!
              </p>
            </div>
            <Link
              to="/"
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition sm:mt-20"
            >
              Go Back to Home
            </Link>

          </div>) : (

        <div className="pt-12 pb-2 rounded-md bg-white h-fit grid grid-cols-1 gap-6">

          <div className="mb-6 flex flex-col justify-center items-center">


            <h2 className="text-sm  font-bold bg-linear-to-r from-green-500 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
              Your Cart — Ready to Checkout
            </h2>

            <p className="text-gray-500 mt-1 text-xs md:text-base flex items-center">

              Fast delivery • Secure checkout • Best prices guaranteed
            </p>

            <div className="mt-3 h-0.5 w-24 bg-linear-to-r from-green-400 to-lime-400 rounded-full"></div>
          </div>

          {cartItems.map((item, index) => {
            if (!item) return null;
            return (


              <div
                key={item?.id || index}
                className="flex  transition py-1 px-2 pb-0  border-t  border-gray-300 "
              >
                {/* Image */}
                <div className="w-20 h-20 shrink-0 bg-gray-100 rounded-xl flex items-center justify-center">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Right Side */}
                <div className="flex flex-col flex-1 justify-between">

                  {/* Top Section */}
                  <div className="flex justify-between items-start gap-4">

                    {/* Title + small info */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-base leading-snug">
                        {item?.title}
                      </h4>

                      <p className="text-gray-500 text-sm mt-1">
                        {item?.quantity} pcs
                      </p>

                    </div>

                    {/* Qty + Price */}
                    <div className="flex flex-col items-end gap-2">

                      {/* Quantity */}
                      <div className="flex items-center bg-green-600 text-white rounded-lg overflow-hidden">
                        <button
                          onClick={() => decreaseQty(item?.id)}
                          className="1 text-sm px-3  py-1 font-bold"
                        >
                          −
                        </button>

                        <span className="text-xs py-1">
                          {item?.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item?.id)}
                          className="text-sm px-3  py-1 font-bold"
                        >
                          +
                        </button>
                      </div>


                      {/* Price */}
                      <div className="flex gap-1 items-center">
                        <p className="text-gray-800 line-through text-xs">
                          $ {Number((item?.price + 50).toFixed(2))}
                        </p>
                        <p className="text-gray-800 font-semibold text-sm">
                          ${item?.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Remove */}
                  <div className="flex justify-end">


                    <button
                      onClick={() => removeItem(item)}
                      className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center gap-1"
                    >
                      <Trash2 size={14} />
                      Remove
                    </button>
                  </div>

                </div>
              </div>

            );
          })}
        </div>



      )
      }

      {/* Left: Cart Items */}


      {/* Right: Summary - Desktop */}
      {cartItems.length >= 1 &&
        (<div
          className="hidden lg:flex flex-col justify-between p-6 rounded-2xl bg-white shadow-lg w-72 h-fit sticky top-6">
          <h2 className="text-2xl font-bold mb-4">Place Order ✅</h2>

          <p className="text-lg font-semibold mb-2">
            Total Items: <span className="text-green-500">{cartItems.length}</span>
          </p>
          <p className="text-lg font-semibold mb-6">
            Total Amount: <span className="text-red-500">
              $ <CountUp targetAmount={totalAmount} />
            </span>
          </p>
          <p className="text-sm font-semibold mb-6">
            Pay INR: <span className="text-red-500">
              ₹  <CountUp targetAmount={totalAmount * 91} />
            </span>
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
            Pay INR: <span className="text-red-600 font-bold"> ₹ <CountUp targetAmount={totalAmount * 91} /> </span>
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
