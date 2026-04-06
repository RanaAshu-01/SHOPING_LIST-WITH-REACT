import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MapPin, CircleUser, Flame, ShoppingCart, House } from 'lucide-react';
import { useTranslation } from 'react-i18next';



const Navbar = () => {
  ''
  const { t, i18n } = useTranslation();
  const { searchTerm, setSearchTerm, cartItems, category, setCategory, setShowPopUp, showData, user } = useContext(CartContext);

  const handleShowPopUp = () => {
    setShowPopUp(true)
  }

  const navigate = useNavigate()

  return (
    <>

      <nav className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white sticky top-0 z-50 shadow-lg">


        {/* Top */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-2 py-2">


          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold tracking-wide rounded transition hover:border p-3 py-1.5"
          >
            🛍️ ShopZone
          </Link>

          {/* Mobile Welcome Text */}
          <div className="sm:hidden text-[10px] text-gray-300 leading-tight text-right ml-auto mr-3">
            <p>Welcome to ShopZone</p>
            <p className="text-yellow-400 cursor-pointer">Download App</p>
          </div>


          {/* Search */}
          <div className="order-3 w-full sm:order-0 sm:w-auto sm:flex-1 max-w-4xl mx-2 bg-white rounded-lg overflow-hidden h-9 sm:h-10 shadow-md flex items-center">




            {/* Category */}
            <select
              id="select"
              className="hidden sm:block text-black text-xs px-2 bg-gray-100 p-3 outline-none cursor-pointer"

              value={category}
              onChange={(e) => {
                const value = e.target.value;
                setCategory(value);
              }}
            >
              <option value={t("all")}>{t("all")}</option>
              <option value={t("electronics")}>{t("electronics")}</option>
              <option value={t("fashion")}>{t("fashion")}</option>
              <option value={t("mobiles")}>{t("mobiles")}</option>
              <option value={t("laptops")}>{t("laptops")}</option>
              <option value={t("books")}>{t("books")}</option>

            </select>

            {/* Input */}
            <input
              id="input"
              type="text"
              placeholder="Search for products, brands and more..."
              className="flex-1 text-black px-2 sm:px-3 text-xs sm:text-sm outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Button */}
            <button className="bg-yellow-400 px-3 sm:px-4 h-full flex items-center justify-center">
              🔍
            </button>

          </div>


          <div
            onClick={() => navigate("/accounts")}
            className="hidden xl:flex flex-col text-xs leading-tight cursor-pointer hover:border p-1 rounded">
            <span className="text-gray-300">{t("welcome")}, {user?.name || "Guest"}</span>
            <span className="font-semibold">Account & Lists</span>
          </div>


          {/* 📍 Location Row */}
          <div className="order-4 w-full xl:order-0 xl:w-auto px-3">
            <div className="hover:border rounded px-3 w-full sm:w-auto">

              <div className="flex gap-3 xl:gap-0 xl:flex-col">

                {/* Deliver to */}
                <p className="flex items-center gap-1 text-sm md:text-xs text-gray-400 whitespace-nowrap">
                  <MapPin size={16} className="text-red-400" />
                  {t("deliverTo")}
                </p>

                {/* Location */}
                <p className="text-sm sm:text-base font-semibold text-white truncate">
                  {showData || t("detectingLocation")}
                </p>

              </div>

            </div>
          </div>



          <Link
            to="/deals"
            className="hidden xl:block text-xs bg-linear-to-r from-yellow-400 to-orange-400 text-black px-3 py-2 rounded-md font-semibold cursor-pointer hover:scale-105 transition"
          >
            🔥 Deals
          </Link>


          {/* Language */}
          <div className="hidden xl:flex items-center gap-1 cursor-pointer rounded hover:border p-1 transition">
            🌐
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-transparent text-white text-xs outline-none cursor-pointer"
            >
              <option className="text-white bg-gray-800" value="en" >EN</option>
              <option className="text-white bg-gray-800" value="hi" >HI</option>
            </select>
          </div>




          {/* Cart */}
          <Link to="/cart" className="hidden xl:block relative group">
            <ShoppingCart className="group-hover:scale-110 transition" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1.5 py-px rounded-full">
              {cartItems.length}
            </span>
          </Link>


          <div className="hidden xl:flex items-center justify-between px-3 pb-2 border-t border-gray-800">


            {/* Greeting */}


            {/* Actions */}
            <div className="flex items-center gap-3">

              {!user ? (
                <Link
                  to="/login"
                  className="
            text-xs sm:text-sm 
            bg-yellow-400 
            text-black 
            px-4 py-1.5 
            rounded-md 
            font-medium
            hover:bg-yellow-500 
            active:scale-95 
            transition
            shadow
          "
                >
                  {t("login")}
                </Link>
              ) : (
                <button
                  onClick={setShowPopUp}
                  className="
            text-xs sm:text-sm 
            bg-red-500 
            text-white 
            px-4 py-1.5 
            rounded-md 
            font-medium
            hover:bg-red-600 
            active:scale-95 
            transition
            shadow
          "
                >
                  {t("logout")}
                </button>
              )}

            </div>
          </div>

        </div>






      </nav>


      <div className="fixed bottom-0 left-0 w-full bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white  flex justify-around items-center py-2 xl:hidden z-50">

        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "flex flex-col items-center text-xs text-green-600 cursor-pointer" : "cursor-pointer flex flex-col items-center text-xs"
          }
        >
          <House />
          <span>Home</span>
        </NavLink>

        {/* Deals */}
        <NavLink
          to="/deals"
          className={({ isActive }) =>
            isActive ? "flex flex-col items-center text-xs text-green-600 cursor-pointer" : "cursor-pointer flex flex-col items-center text-xs"
          }
        >
          <Flame />
          <span>Deals</span>
        </NavLink>

        <NavLink
          to="/accounts"
          className={({ isActive }) =>
            isActive ? "flex flex-col items-center text-xs text-green-600 cursor-pointer" : "cursor-pointer flex flex-col items-center text-xs"
          }>
          <CircleUser size={18} />
          <div>
            Account
          </div>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "flex flex-col items-center text-xs text-green-600 relative" : "cursor-pointer flex flex-col items-center text-xs relative"
          }

        >
          <ShoppingCart className="group-hover:scale-110 transition" />
          <span className="absolute text-white -top-1 -right-2 bg-red-500 text-[10px] px-1 rounded-full">
            {cartItems.length}
          </span>
        </NavLink>



      </div>

    </>

  );
};


export default Navbar;
