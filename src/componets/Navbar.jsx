import { ShoppingCart, Chromium, LogIn, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useState, useContext } from "react";

const Navbar = ({ searchTerm, setSearchTerm }) => {

  const [category, setCategory] = useState("All");

  const {user}   = useContext(AuthContext);



  return (
    <nav className="bg-black text-white sticky top-0 z-40">
      <div className="w-full flex items-center justify-between h-16 px-4 py-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 p-1 hover:border">
          <Chromium size={36} className="text-green-500" />
          <h2 className="text-xl font-bold">
            <span className="text-green-500">S</span>hopping
            <span className="text-green-500 ml-1">List</span>
          </h2>
        </Link>


        <div className="flex items-center w-[65vw] rounded h-10  overflow-hidden bg-white shadow-md">

          <select
            className="h-full w-24  px-2 bg-gray-200 text-black text-sm outline-none border-r"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Books</option>
            <option>Grocery</option>
          </select>

          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 h-full px-3 text-black outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button className="h-full px-4 bg-green-500 hover:bg-green-600 flex items-center justify-center">
            <Search size={20} className="text-white" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="text-green-500 hover:scale-110 transition">
            <ShoppingCart size={22} />
          </Link>

          {user ? (
            <span className="text-sm font-semibold">
              Welcome, {user.name} 👋
            </span>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1 bg-green-500 px-3 py-1 rounded-md hover:bg-green-600 hover:scale-110 transition"
            >
              <LogIn size={18} />
              <span className="text-sm font-semibold">Login</span>
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
