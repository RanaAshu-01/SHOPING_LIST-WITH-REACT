import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const Loader = () => {

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-white backdrop-blur-sm">
            <div className="w-12 h-12 border-4 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}

export default Loader
