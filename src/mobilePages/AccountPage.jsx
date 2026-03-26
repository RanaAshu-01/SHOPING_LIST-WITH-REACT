import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import LoginSingUp from "../assets/animations/Login and Sign up.json";

const Account = () => {

    const { handleLogoutAccount, showData, user } = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <>
            {user ? (
                <div className="min-h-screen bg-gray-100 p-4 flex flex-col">

                    {/* 🔥 Header */}
                    <h1 className="text-2xl font-bold mb-4">My Account</h1>

                    {/* 🔥 User Card */}
                    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-3">

                        <div>
                            <p className="text-gray-500 text-sm">Name</p>
                            <p className="font-semibold text-lg">{user?.name}</p>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Email</p>
                            <p className="font-semibold">{user?.email}</p>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Phone</p>
                            <p className="font-semibold">{"***********"}</p>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Address</p>
                            <p className="font-semibold">{showData}</p>
                        </div>

                        <button
                            onClick={handleLogoutAccount}
                            className="w-fit bg-red-500 text-white py-2 px-4 rounded-xl font-semibold hover:bg-red-600 active:scale-95 transition shadow self-end"

                        >
                            Log Out
                        </button>

                    </div>





                </div>
            ) : (
                <div className="min-h-screen bg-gray-100 flex flex-col items-center  px-4 space-y-6">

                    {/* Lottie Animation */}
                    <div className="w-full flex justify-center">
                        <Lottie
                            animationData={LoginSingUp}
                            loop={true}
                            className="w-48 h-48 sm:w-80 sm:h-80"
                        />
                    </div>

                    {/* Login Card */}
                    <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 w-full max-w-sm flex flex-col gap-6 items-center text-center">

                        {/* Icon */}
                        <div className="text-5xl sm:text-6xl animate-bounce">
                            🔐
                        </div>

                        {/* Heading */}
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                            You're not logged in
                        </h2>

                        {/* Subtext */}
                        <p className="text-gray-500 text-sm sm:text-base">
                            Please login to view your account details
                        </p>

                        {/* Button */}
                        <button
                            onClick={() => navigate("/login")}
                            className="w-full sm:w-auto bg-yellow-400 text-black py-3 px-6 rounded-xl font-semibold hover:bg-yellow-500 active:scale-95 transition-shadow shadow-lg"
                        >
                            Go to Login
                        </button>

                    </div>

                </div>


            )}

        </>

    );
};

export default Account;
