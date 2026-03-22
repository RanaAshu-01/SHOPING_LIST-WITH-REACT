import { useContext } from "react";
import { CartContext } from "./CartContext";

const Card = ({ id, image, title, price }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-[50vh] m-3 p-4 rounded-2xl shadow-xl bg-white hover:scale-105 transition">
      <div className="h-[50vh] w-full ">
        <img className="h-full w-full object-cover" src={image} alt={title} />
      </div>

      <div className="flex flex-col items-center gap-2 mt-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <h2 className="text-2xl font-bold">PRICE: <span className="text-orange-500">{price}</span> $</h2>
        <button
          className="p-2 bg-amber-300 w-full text-center hover:bg-orange-400 cursor-pointer"
          onClick={() => {
            addToCart({ id, image, title, price });
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Card;
