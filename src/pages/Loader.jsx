import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const Loader = () => {


    const { loader } = useContext(CartContext)

    

    return (
        <>
            {loader && (<div className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-[1px]">

                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin">

                </div>

            </div>)}
        </>
    )
}

export default Loader
