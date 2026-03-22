const HeroSection = ({ searchTerm }) => {
  return (
    <>
      {!searchTerm?.trim() && (
        <div className="relative w-full">

          {/* Image */}
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/af_pc_2x._CB792409181_.jpg"
            alt="hero"
            className="
              w-full 
              h-45 
              sm:h-62.5 
              md:h-80 
              object-cover
            "
          />

          {/* Gradient overlay */}
          <div className="
            absolute inset-0 
            bg-linear-to-t 
            from-gray-100 
            via-transparent 
            to-transparent
          "></div>

          {/* Text (optional but 🔥) */}
          <div className="
            absolute 
            bottom-3 
            left-3 
            text-gray-400
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
