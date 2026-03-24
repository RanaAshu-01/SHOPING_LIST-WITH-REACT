import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const HeroSection = () => {

const {searchTerm} = useContext(CartContext)

  return (
    <>
      {!searchTerm?.trim() && (
        <div className="relative w-full">

          {/* Video */}
          <video
            className="w-full h-55 sm:h-62.5 md:h-80 object-[center_40%] object-cover"
            src="/hero.mp4"   
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Gradient overlay */}
          <div className="
            absolute inset-0 
            bg-linear-to-t 
            from-black/60 
            via-transparent 
            to-transparent
          "></div>

          {/* Text */}
          <div className="
            absolute 
            bottom-3 
            left-3 
            text-white
          ">
            <h2 className="text-sm sm:text-lg font-semibold">
              Big Deals Today
            </h2>
            <p className="text-xs sm:text-sm">
              Up to 50% off on top products
            </p>
          </div>

        </div>
      )}
    </>
  );
};

export default HeroSection;
