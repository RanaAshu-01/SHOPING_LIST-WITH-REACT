import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Deals = () => {
    const { users, handleDeals } = useContext(CartContext);

    function getRandomProducts(users, n) {
        const shuffled = [...users].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    }

    const deals = users ? getRandomProducts(users, 4) : [];

    return (
        <div className="bg-gray-100 py-12 px-6">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    🔥 Hot Deals
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                    Grab these exclusive offers before they're gone!
                </p>
            </div>

            {/* Deals Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {deals.length > 0 &&
                    deals.map((deal) => {
                        const discountedPrice = deal.price * 0.75; // 25% discount
                        return (
                            <div
                                key={deal.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                            >
                                {/* Image */}
                                <div className="w-full h-48 overflow-hidden">
                                    <img
                                        src={deal.image}
                                        alt={deal.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Deal Info */}
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                                        {deal.title}
                                    </h3>
                                    <p className="text-red-500 font-bold text-lg mt-1 line-through">
                                        ${deal.price}
                                    </p>
                                    <p className="text-green-500 font-bold text-lg mt-1">
                                        ${discountedPrice.toFixed(2)}
                                    </p>
                                    <p className="text-gray-500 text-sm mt-2">
                                        {deal.description}
                                    </p>
                                </div>

                                {/* Buy Button */}
                                <div className="flex justify-center gap-4 mt-4">
                                    <Link
                                        to="/cart"
                                        onClick={() => {
                                            handleDeals({
                                                id: deal.id,
                                                image: deal.image,
                                                title: deal.title,
                                                price: discountedPrice, // correct discounted price
                                            });
                                        }}
                                        className="w-full px-4 py-2 bg-linear-to-r from-yellow-300 to-yellow-400 text-black font-semibold rounded-b-lg transition cursor-pointer"
                                    >
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Deals;
