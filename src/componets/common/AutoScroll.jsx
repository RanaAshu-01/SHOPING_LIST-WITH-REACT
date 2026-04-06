import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const AutoScroll = () => {
  
    const {autoScrollImages} = useContext(CartContext)

  return (
     <div className="overflow-hidden w-full bg-gray-100 py-4 mt-13 xl:mt-0">
      
      <div className="flex w-max gap-4 animate-scroll">
        {[...autoScrollImages, ...autoScrollImages].map((img, index) => (
          <img
            key={index}
            src={img}
            alt="img"
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg shrink-0"
          />
        ))}
      </div>

    </div>
  );
};

export default AutoScroll;
