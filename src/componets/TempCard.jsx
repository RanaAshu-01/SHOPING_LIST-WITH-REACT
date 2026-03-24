import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

const Card = ({ id, image, title, price }) => {
  
  const { addToCart } = useContext(CartContext);

  return (
   <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-101 transition duration-300  w-full p-3">
  
  {/* Image */}
  <div className="w-full h-40 sm:h-48 md:h-56 overflow-hidden rounded-lg">
    <img
      className="w-full h-full object-cover"
      src={image}
      alt={title}
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
        className="p-2 border rounded hover:bg-gray-100 transition"
        onClick={() => addToCart({ id, image, title, price })}
      >
        <ShoppingCart size={18} />
      </button>

      <div className="flex gap-1 text-[10px] sm:text-xs">
        <p className="border px-3 py-2 rounded cursor-pointer ">Buy with EMI</p>
        <p className="border px-3 py-2 rounded bg-amber-300 cursor-pointer">
          Buy Now
        </p>
      </div>

    </div>
  </div>
</div>

  );
};

export default Card;
