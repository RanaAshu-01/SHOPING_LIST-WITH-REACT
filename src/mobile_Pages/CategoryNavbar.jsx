import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Handbag, Smartphone, Monitor, Shirt, ShoppingBasket,
  SoapDispenserDroplet, Shapes, Coffee, Armchair
} from "lucide-react";

const categories = [
  { path: "/", label: "All", icon: Handbag },
  { path: "/mobile", label: "Mobile", icon: Smartphone },
  { path: "/electronics", label: "Electronics", icon: Monitor },
  { path: "/fashion", label: "Fashion", icon: Shirt },
  { path: "/groceries", label: "Groceries", icon: ShoppingBasket },
  { path: "/beauty", label: "Beauty", icon: SoapDispenserDroplet },
  { path: "/toys", label: "Toys", icon: Shapes },
  { path: "/food-health", label: "Health", icon: Coffee },
  { path: "/furniture", label: "Furniture", icon: Armchair },
];

const CategoryNavbar = () => {
  const location = useLocation();

  return (
    <div className="fixed left-0 w-full bg-gray-200 shadow-lg border-t xl:hidden z-50">
      
      <div className="flex overflow-x-auto whitespace-nowrap gap-8 px-3 py-2 no-scrollbar relative">

        {categories.map((cat, index) => {
          const Icon = cat.icon;
          const isActive = location.pathname === cat.path;

          return (
            <div key={index} className="relative flex flex-col items-center min-w-15">
              
              <NavLink
                to={cat.path}
                className={`flex flex-col items-center text-xs ${
                  isActive ? "text-yellow-500  font-semibold" : "text-black"
                }`}
              >
                <Icon />
                <span>{cat.label}</span>
              </NavLink>

          
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 h-0.75 w-full bg-yellow-500 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 50 }}
                />
              )}

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default CategoryNavbar;
