import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Construction from "../assets/animations/Construction.json";


const OrderPlacedPage = () => {

    const navigate = useNavigate()



  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">

            <div className="w-full flex justify-center mb-6 ">
                <Lottie
                    animationData={Construction}
                    loop={true}
                    className="w-full h-70  sm:w-100 sm:h-100"
                />
            </div>

            {/* Info Card */}
            <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-sm flex flex-col gap-4 text-center">

                {/* Icon */}
                <div className="text-5xl">🚧</div>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Signup Coming Soon!
                </h2>

                {/* Subtext */}
                <p className="text-gray-500 text-sm sm:text-base">
                    We're still working on the page. Stay tuned!
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">

                    {/* Go Home */}
                    <button
                        onClick={() => navigate("/")}
                        className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition active:scale-95"
                    >
                        Go Home
                    </button>

                  
                  

                </div>
            </div>

        </div>
  );
};

export default OrderPlacedPage;
