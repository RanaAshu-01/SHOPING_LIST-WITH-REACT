import { useContext, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CartContext } from "../context/CartContext";

const BannerSlider = () => {

  const { slidesData, handleNavigate } = useContext(CartContext)

  const extendedSlides = [
    slidesData[slidesData.length - 1],
    ...slidesData,
    slidesData[0],
  ];

  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);

  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setTransition(true);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
    setTransition(true);
  };

  // 🔥 reset without animation
  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 700);
    }

    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(slides.length);
      }, 700);
    }
  }, [current]);

  return (
    <div className=" relative top-15  md:top-15 xl:top-0 w-full h-50 sm:h-75 overflow-hidden">

      {/* Slider Track */}
      <div
        className={`flex h-full ${transition ? "transition-transform duration-700 ease-in-out" : ""
          }`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">

            {/* Image */}

            <img
              onClick={ () => handleNavigate(slide)}
              src={slide.img}
              alt="banner"
              className="w-full h-full object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute pointer-events-none inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <h2 className="text-xl sm:text-3xl font-bold">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-lg">
                {slide.desc}
              </p>
            </div>

          </div>
        ))}
      </div>


      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-300  p-2 rounded-full"
      >
        <ChevronLeft size={30} />
      </button>


      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-300  p-2 rounded-full"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default BannerSlider;
