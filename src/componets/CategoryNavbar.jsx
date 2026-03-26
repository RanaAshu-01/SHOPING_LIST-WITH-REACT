import { NavLink } from "react-router-dom";
import { Handbag,  Smartphone, Monitor, Shirt  } from 'lucide-react';

const CategoryNavbar = () => {
  return (
    <div className="fixed left-0 w-full bg-gray-200 shadow-lg border-t xl:hidden z-50">

      <div className="flex justify-around items-center py-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-blue-800 border-b-2  font-semibold" : "text-black"
            }`
          }
        >
          <Handbag />
          <span>All</span>
        </NavLink>

        <NavLink
          to="/mobile"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-blue-800 font-semibold border-b-2" : "text-black"
            }`
          }
        >
          <Smartphone />
          <span>Mobile</span>
        </NavLink>

        <NavLink
          to="/electronics"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-blue-800 font-semibold border-b-2" : "text-black"
            }`
          }
        >
          <Monitor />
          <span>Electronics</span>
        </NavLink>

        <NavLink
          to="/fashion"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-blue-800 font-semibold border-b-2" : "text-black"
            }`
          }
        >
          <Shirt />
          <span>Fashion</span>
        </NavLink>

      </div>
    </div>
  );
};

export default CategoryNavbar;
