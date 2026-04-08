import { useState } from "react";
import { createPortal } from "react-dom";
import { ListFilterPlus } from "lucide-react";


const Filter = ({ setBrands, setPriceRange, setHighAndLow, highAndLow, brands, priceRange }) => {
    const [open, setOpen] = useState(false);

    const [highDisabel, setHighDisabel] = useState(false)
    const [lowDisable, setLowDisable] = useState(false)





    return (

        <>

            <div
                onClick={() => setOpen(true)}
                className="cursor-pointer"
            >
                <ListFilterPlus size={24} />
            </div>


            {open &&
                createPortal(
                    <div
                        className="fixed inset-0 flex  bg-black/40 z-10"
                        onClick={() => setOpen(false)}
                    >
                        <div
                            className={`
                                bg-gray-900 p-4  sm:p-6 rounded-lg w-80 max-h-[91vh]  sm:max-h-auto mt-40 sm:mt-15 shadow-xl flex flex-col overflow-y-auto 
                                ${open ? "animate-slideIn" : "animate-slideOut"}
                            `}


                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Top Content */}
                            <div className="sm:flex-1">
                                <h2 className="text-2xl text-white bg-yellow-500  py-1 rounded  font-semibold  sm:mb-4 mt-6 text-center">
                                    Filter Product's
                                </h2>

                                <div className="text-xl font-bold text-white mb-3">
                                    BRAND'S
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-white font-bold">


                                    <label className="flex items-center space-x-2 text-white">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 accent-yellow-500"
                                            value="Apple"
                                            checked={brands.includes("Apple")}
                                            onChange={(e) => {
                                                const { value, checked } = e.target;

                                                setBrands((prev) => {
                                                    if (checked) {
                                                        return [...prev, value];
                                                    } else {
                                                        return prev.filter((b) => b !== value);
                                                    }
                                                });
                                            }}

                                        />
                                        <span>Apple</span>
                                    </label>

                                    <label className="flex items-center space-x-2 text-white">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 accent-yellow-500"
                                            value="Samsung"
                                            checked={brands.includes("Samsung")}
                                            onChange={(e) => {
                                                const { value, checked } = e.target;

                                                setBrands((prev) => {
                                                    if (checked) {
                                                        return [...prev, value];
                                                    } else {
                                                        return prev.filter((b) => b !== value);
                                                    }
                                                });
                                            }}
                                        />
                                        <span>Samsung</span>
                                    </label>

                                    <label className="flex items-center space-x-2 text-white">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 accent-yellow-500"
                                            value="Realme"
                                            checked={brands.includes("Realme")}
                                            onChange={(e) => {
                                                const { value, checked } = e.target;

                                                setBrands((prev) => {
                                                    if (checked) {
                                                        return [...prev, value];
                                                    } else {
                                                        return prev.filter((b) => b !== value);
                                                    }
                                                });
                                            }}
                                        />
                                        <span>Realme</span>
                                    </label>

                                    <label className="flex items-center space-x-2 text-white">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 accent-yellow-500"
                                            value="Vivo"
                                            checked={brands.includes("Vivo")}
                                            onChange={(e) => {
                                                const { value, checked } = e.target;

                                                setBrands((prev) => {
                                                    if (checked) {
                                                        return [...prev, value];
                                                    } else {
                                                        return prev.filter((b) => b !== value);
                                                    }
                                                });
                                            }}
                                        />
                                        <span>Vivo</span>
                                    </label>

                                </div>

                                <div className="text-xl font-bold text-white mb-3 mt-3">
                                    PRICE'S
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-white font-bold">

                                    <label className="flex items-center space-x-2 text-white">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 accent-yellow-500"
                                            value="0-100"
                                            checked={priceRange.includes("0-100")}
                                            onChange={(e) => {
                                                const { value, checked } = e.target;

                                                setPriceRange((prev) => {
                                                    if (checked) {
                                                        return [...prev, value]
                                                    } else {
                                                        return prev.filter((b) => b !== value)
                                                    }
                                                })

                                            }}
                                        />
                                        <span>Under $100</span>
                                    </label>

                                    <label className="flex items-center space-x-2 text-white">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 accent-yellow-500"
                                            value="100-500"
                                            checked={priceRange.includes("100-500")}
                                            onChange={(e) => {
                                                const { value, checked } = e.target;
                                                setPriceRange((prev) => {
                                                    if (checked) {
                                                        return [...prev, value]
                                                    } else {
                                                        return prev.filter((b) => b !== value)
                                                    }
                                                })

                                            }}
                                        />
                                        <span>$100 - $500</span>
                                    </label>

                                    <label className="flex items-center space-x-2 text-white">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 accent-yellow-500"
                                            value="500-1000"
                                            checked={priceRange.includes("500-1000")}
                                            onChange={(e) => {
                                                const { value, checked } = e.target

                                                setPriceRange((prev) => {
                                                    if (checked) {
                                                        return [...prev, value]
                                                    } else {
                                                        return prev.filter((b) => b !== value)
                                                    }
                                                })
                                            }}
                                        />
                                        <span>$500 - $1000</span>
                                    </label>

                                    <label className="flex items-center space-x-2 text-white">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 accent-yellow-500"
                                            value="1000+"
                                            checked={priceRange.includes("1000+")}
                                            onChange={(e) => {
                                                const { value, checked } = e.target

                                                setPriceRange((prev) => {
                                                    if (checked) {
                                                        return [...prev, value]
                                                    } else {
                                                        return prev.filter((b) => b !== value)
                                                    }
                                                })
                                            }}
                                        />
                                        <span>Above $1000</span>
                                    </label>
                                </div>
                                <div className="mt-8 font-bold">
                                    <label className="flex items-center space-x-2 text-white mb-3">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 accent-yellow-500"
                                            value="high"
                                            checked={highAndLow.includes("high")}
                                            disabled={highDisabel}
                                            onChange={(e) => {
                                                if (lowDisable) {
                                                    setLowDisable(false)
                                                    setHighAndLow("")
                                                } else {
                                                    setLowDisable(true)
                                                    setHighAndLow(e.target.value)
                                                }
                                            }}
                                        />
                                        <span>Price High To Low</span>
                                    </label>
                                    <label className="flex items-center space-x-2 text-white mt-3">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 accent-yellow-500"
                                            value="low"
                                            checked={highAndLow.includes("low")}
                                            disabled={lowDisable}
                                            onChange={(e) => {
                                                if (highDisabel) {
                                                    setHighDisabel(false)
                                                    setHighAndLow("")
                                                } else {
                                                    setHighDisabel(true)
                                                    setHighAndLow(e.target.value)
                                                }
                                            }}
                                        />
                                        <span>Price Low To High</span>
                                    </label>
                                </div>
                            </div>
                            < div className="flex justify-end " >
                                <button
                                    onClick={() => setOpen(false)}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 "
                                >
                                    Close
                                </button>
                            </div >
                        </div>





                    </div >
                    , document.body
                )}
        </>
    );
};

export default Filter;