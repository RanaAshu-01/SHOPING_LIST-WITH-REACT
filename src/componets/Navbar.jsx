import { ShoppingCart, Chromium, LogIn, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

const Navbar = ({ searchTerm, setSearchTerm }) => {

  const { user, setUser } = useContext(AuthContext);
  const { cartItems, setCartItems, category, setCategory } = useContext(CartContext);
 
  

  

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("user")
    setCartItems([])
  }

  return (
    <nav className="bg-black text-white sticky top-0 z-50">

      {/* Top */}
      <div className="flex items-center justify-between gap-3 px-3 py-2">

        {/* Logo */}
        <Link to="/" className="text-lg font-bold whitespace-nowrap">
          🛍️ Shop
        </Link>

        {/* Search */}
        <div
          className="flex flex-1  max-w-7xl text-center mx-2 bg-white rounded-md overflow-hidden h-10">
          {/* Category */}
          <select
            className=" text-black text-xs px-2  bg-gray-200 outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Laptops">Laptops</option>
            <option value="Books">Books</option>
          </select>

          {/* Input */}
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 text-black px-3 text-sm outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Button */}
          <button className="bg-yellow-400 px-3 flex items-center justify-center">
            🔍
          </button>
        </div>


        {/* Cart */}
        <Link to="/cart" className="relative">
          <ShoppingCart />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
            {cartItems.length}
          </span>
        </Link>
      </div>

      {/* Bottom row (mobile feel) */}
      <div className="flex items-center justify-between px-3 pb-2">

        {/* Left - Greeting */}
        <span className="text-xs sm:text-sm text-gray-300">
          Hello, <span className="font-semibold text-white">{user || "Guest"}</span>
        </span>


        {!user ? (<Link
          to="/login"
          className="
        text-xs sm:text-sm 
        bg-yellow-400 
        text-black 
        px-3 py-1 
        rounded-md 
        font-medium
        hover:bg-yellow-500 
        active:scale-95 
        transition
    "
        >
          Login
        </Link>) : (
          <button
            onClick={handleLogout}
            className="
        text-xs sm:text-sm 
        bg-red-500 
        text-white 
        px-3 py-1 
        rounded-md 
        font-medium
        hover:bg-red-600 
        active:scale-95 
        transition
    "
          >
            Log-Out

          </button>
        )}

      </div>

    </nav>
  );
};


export default Navbar;
