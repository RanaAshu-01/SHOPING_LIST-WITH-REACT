import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import Lottie from "lottie-react";
import LoginAnimation from "../assets/animations/Sign up.json";
import { Eye } from 'lucide-react';
import Loader from '../componets/common/Loader';
import SuccessPopup from '../componets/common/SuccessPopup';

const SignUpPage = () => {

    const navigate = useNavigate()
    const auth = getAuth()


    const nameRegex = /^[A-Za-z ]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|org|net)$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const phoneRegex = /^[6-9]\d{9}$/

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState('password')
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showConfirmPassword, setShowConfirmPassword] = useState('password')
    const [error, setError] = useState("")
    const [loader, setLoader] = useState(false)
    const [showPopup, setShowPopup] = useState(false);

    const finalEmail = emailRegex.test(email)
    const finalPhone = phoneRegex.test(phone)
    const finalPass = password.trim() === confirmPassword.trim() && password.length >=1 && confirmPassword.length >= 1 && passwordRegex.test(password,confirmPassword)

    const handleSignup = async (e) => {
        e.preventDefault()

        const cleanEmail = email.trim()
        const cleanName = name.trim()
        const cleanPhone = phone.trim()

        // 🔍 Validation
        if (!nameRegex.test(name)) {
            setError("Please enter valid name...")
            return
        }

        if (!emailRegex.test(cleanEmail)) {
            setError("Please enter valid email address...")
            return
        }

        if (!phoneRegex.test(phone)) {
            setError("Please enter valid mobile number...")
            return
        }

        if (!passwordRegex.test(password)) {
            setError("Password must be at least 8 characters...")
            return
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match...")
            return
        } else


            try {
                const userCredential = await createUserWithEmailAndPassword(auth, cleanEmail, password)

                setLoader(true)
                const user = userCredential.user;



                await updateProfile(user, {
                    displayName: name
                });

                // 🔥 Firestore me full data save
                await setDoc(doc(db, "users", user.uid), {
                    name: cleanName,
                    email: cleanEmail,
                    phone: cleanPhone
                });

                setShowPopup(true);

            } catch (err) {

                if (err.code === "auth/email-already-in-use") {
                    setError("Enter your details is already registered, please login")
                } else {
                    setError(err.message)
                }
            }
    }

    return (
        <>
            {loader && <Loader />}

            <SuccessPopup
                show={showPopup}
                onClose={() => setShowPopup(false)}
            />

            <div className="flex-col xl:flex-row min-h-screen flex justify-center items-center bg-gray-100">

                {/* Animation */}
                <div className="flex justify-center w-full sm:w-1/2 mt-12 xl:mt-0">
                    <Lottie
                        animationData={LoginAnimation}
                        loop={true}
                        className="w-48 h-48 sm:w-96 sm:h-96"
                    />
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSignup}
                    className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm flex flex-col gap-4"
                >

                    <h2 className="text-2xl font-bold text-center">Sign Up</h2>

                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Email</label>
                        <div className='relative'>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />

                            {finalEmail && (
                                <div className="absolute top-3 right-3 bg-green-800 text-white rounded-full p-1 animate-pop">
                                    <svg width="10" height="10" viewBox="0 0 24 24">
                                        <path
                                            d="M5 13l4 4L19 7"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tick-path"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Phone</label>

                        <div className='relative'>
                            <input
                                type="number"
                                placeholder="Enter your mobile number"
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}

                            />

                            {finalPhone && (
                                <div className="absolute top-3 right-3 bg-green-800 text-white rounded-full p-1 animate-pop">
                                    <svg width="10" height="10" viewBox="0 0 24 24">
                                        <path
                                            d="M5 13l4 4L19 7"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tick-path"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword}
                                placeholder="Enter your password"
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />

                            {finalPass && (
                                <div className="absolute top-3 right-10 bg-green-800 text-white rounded-full p-1 animate-pop">
                                    <svg width="10" height="10" viewBox="0 0 24 24">
                                        <path
                                            d="M5 13l4 4L19 7"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tick-path"
                                        />
                                    </svg>
                                </div>
                            )}

                            <span className='absolute top-2 right-2 text-gray-700 cursor-pointer'
                                onClick={() => {
                                    if (showPassword === "password") {
                                        setShowPassword("")
                                    } else {
                                        setShowPassword("password")
                                    }

                                }}
                            >
                                <Eye />
                            </span>
                        </div>

                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Confirm Password</label>
                        <div className='relative'>
                            <input
                                type={showConfirmPassword}
                                placeholder="Re-enter password"
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                            {finalPass && (
                                <div className="absolute top-3 right-10 bg-green-800 text-white rounded-full p-1 animate-pop">
                                    <svg width="10" height="10" viewBox="0 0 24 24">
                                        <path
                                            d="M5 13l4 4L19 7"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tick-path"
                                        />
                                    </svg>
                                </div>
                            )}

                            <span className='absolute top-2 right-2 text-gray-700 cursor-pointer'
                                onClick={() => {
                                    if (showConfirmPassword === "password") {
                                        setShowConfirmPassword("")
                                    } else {
                                        setShowConfirmPassword("password")
                                    }

                                }}
                            >
                                <Eye />
                            </span>
                        </div>
                    </div>

                    {/* Error */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl"
                    >
                        Sign Up
                    </button>

                    {/* Login Redirect */}
                    <p className="text-center text-sm">
                        Already have account?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            className="text-blue-500 cursor-pointer"
                        >
                            Login
                        </span>
                    </p>

                </form>

            </div>
        </>
    )
}

export default SignUpPage
