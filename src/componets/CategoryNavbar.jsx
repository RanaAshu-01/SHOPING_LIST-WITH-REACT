import { NavLink } from "react-router-dom";
import { Handbag, Smartphone, Monitor, Shirt, Book, SoapDispenserDroplet, Shapes, Coffee, Armchair } from 'lucide-react';

const CategoryNavbar = () => {
  return (
    <div className="fixed left-0 w-full bg-gray-200 shadow-lg border-t xl:hidden z-50">

      <div className="flex overflow-x-auto whitespace-nowrap gap-6 px-2 py-2 scroll-smooth no-scrollbar ">


        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs min-w-17 ${isActive ? "text-yellow-500 border-b-2 font-semibold" : "text-black"
            }`
          }
        >
          <Handbag />
          <span>All</span>
        </NavLink>

        <NavLink
          to="/mobile"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs min-w-17 ${isActive ? "text-yellow-500 border-b-2 font-semibold" : "text-black"
            }`
          }
        >
          <Smartphone />
          <span>Mobile</span>
        </NavLink>

        <NavLink
          to="/electronics"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs min-w-17 ${isActive ? "text-yellow-500 border-b-2 font-semibold" : "text-black"
            }`
          }
        >
          <Monitor />
          <span>Electronics</span>
        </NavLink>

        <NavLink
          to="/fashion"
         className={({ isActive }) =>
            `flex flex-col items-center text-xs min-w-17 ${isActive ? "text-yellow-500 border-b-2 font-semibold" : "text-black"
            }`
          }
        >
          <Shirt />
          <span>Fashion</span>
        </NavLink>

        <NavLink
          to="/books"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs min-w-17 ${isActive ? "text-yellow-500 border-b-2 font-semibold" : "text-black"
            }`
          }
        >
          <Book />
          <span>Books</span>
        </NavLink>

        <NavLink
          to="/beauty"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs min-w-17 ${isActive ? "text-yellow-500 border-b-2 font-semibold" : "text-black"
            }`
          }
        >
          <SoapDispenserDroplet />
          <span>Beauty</span>
        </NavLink>
        <NavLink
          to="/toys"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs min-w-17 ${isActive ? "text-yellow-500 border-b-2 font-semibold" : "text-black"
            }`
          }
        >
          <Shapes />
          <span>Toys</span>
        </NavLink>
        <NavLink
          to="/food & health"
         className={({ isActive }) =>
            `flex flex-col items-center text-xs min-w-17 ${isActive ? "text-yellow-500 border-b-2 font-semibold" : "text-black"
            }`
          }
        >
          <Coffee />
          <span>Food & Health</span>
        </NavLink>
        <NavLink
          to="/furniture"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs min-w-17 ${isActive ? "text-yellow-500 border-b-2 font-semibold" : "text-black"
            }`
          }
        >
          <Armchair />
          <span>Furniture</span>
        </NavLink>

      </div>
    </div>
  );
};

export default CategoryNavbar;
