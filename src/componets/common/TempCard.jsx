import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ id, image, title, price }) => {

  const { addToCart, cartItems, user } = useContext(CartContext);
  const isCart = cartItems.some((item) => item.id === id);

  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-101 transition duration-300  w-full p-3">

      {/* Image */}
      <div className="w-full h-40 sm:h-48 md:h-56 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 mt-2">

        <h2 className="text-sm sm:text-base font-semibold line-clamp-2">
          {title}
        </h2>

        <p className="text-orange-500 font-bold text-sm sm:text-base">
          ${price}
        </p>

        <div className="flex items-center justify-between mt-2 gap-2">

          <button
            className={
              isCart
                ? "p-2 border border-gray-300 rounded shadow-md scale-105 transition-all duration-200"
                : "p-2 border border-gray-300 rounded hover:bg-gray-100 transition-all duration-200"
            }
            onClick={() => {
              addToCart({ id, image, title, price });
            }}
          >
            <Link
              to={isCart ? "/cart" : ""}
              className="relative flex items-center justify-center w-6 h-6"
            >
              <ShoppingCart size={18} strokeWidth={1.5} />

              {isCart && (
                <div className="absolute -top-1 -right-1 bg-green-800 text-white rounded-full p-0.5">
                  <svg width="6" height="6" viewBox="0 0 24 24">
                    <path
                      d="M5 13l4 4L19 7"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: 50,
                        strokeDashoffset: 50,
                        animation: "draw 0.5s ease forwards"
                      }}
                    />
                  </svg>
                </div>
              )}
            </Link>

          </button>


          <div className="flex gap-1 text-[10px] sm:text-xs">
            <div
              onClick={() => {
                !user ? navigate("/login ") : ""
              }}
              className="
               flex flex-col justify-center items-center
               border rounded-md px-6 
               border-gray-300
               Class	Description
               tracking-wider
               cursor-pointer
               transition-transform duration-150
               active:scale-95
               active:bg-gray-100"
            >
              <p className=" font-medium">Buy with No</p>
              <p className="font-medium text-gray-700">cost EMI</p>
            </div>


            <div
              onClick={() => {
                !user ? navigate("/login ") : ""
              }}
              className="
               flex flex-col justify-center items-center
               border rounded-md px-6 
               bg-linear-to-r from-yellow-300  to-yellow-400
               text-black
               Class	Description
               tracking-wider
               cursor-pointer
               border-none
               transition-transform duration-150
               active:scale-95
                      "
            >
              <p className="font-medium text-black  font-sans">Buy now</p>
              <p className="font-semibold text-black">at ${price}</p>
            </div>


          </div>

        </div>
      </div>
    </div>

  );
};

export default Card;
