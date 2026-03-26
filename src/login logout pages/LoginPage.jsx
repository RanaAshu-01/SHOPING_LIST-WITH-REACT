import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import LoginAnimation from "../assets/animations/Login Leady.json";
import { CartContext } from "../context/CartContext";

const LoginPage = () => {

  const navigate = useNavigate();
  const { setUser } = useContext(CartContext);

  const [form, setForm] = useState({

    name: "",
    email: "",
    password: "",
  });


  const [error, setError] = useState("");

  const nameRegex = /^[A-Za-z ]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: form.name,
      email: form.email

    }

    localStorage.setItem("user", JSON.stringify(userData));

    if (!nameRegex.test(form.name)) {
      return setError("Name min 3 letters ka hona chahiye");
    }

    if (!emailRegex.test(form.email)) {
      return setError("Valid email daal bhai 😅");
    }

    if (!passwordRegex.test(form.password)) {
      return setError(
        "Password min 8 chars, uppercase, lowercase, number & special char hona chahiye"
      );
    }

    setError("");

    setForm({
      name: "",
      email: "",
      password: "",
    });



    setUser({
      name: form.name,
      email: form.email
    });
    navigate("/Cart");
  };





  return (
   <div className="min-h-screen bg-gray-100 flex flex-col sm:flex-row items-center justify-center p-4 sm:p-8 gap-8">

  {/* Lottie Animation */}
  <div className="flex justify-center w-full sm:w-1/2 mt-12 xl:mt-0">
    <Lottie 
      animationData={LoginAnimation} 
      loop={true} 
      className="w-48 h-48 sm:w-96 sm:h-96"
    />
  </div>

  {/* Login Form */}
  <form
    onSubmit={handleSubmit}
    className="bg-white border border-gray-200 rounded-3xl shadow-2xl p-6 sm:p-10 w-full max-w-sm flex flex-col gap-6 "
  >
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
      Login
    </h2>

    {error && (
      <p className="text-red-500 text-sm sm:text-base text-center">{error}</p>
    )}

    <div className="flex flex-col gap-4">
      {/* Name */}
      <div>
        <label className="block text-gray-700 mb-1 font-medium">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 mb-1 font-medium">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-gray-700 mb-1 font-medium">Password</label>
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder="Enter your password"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition shadow-md hover:shadow-lg active:scale-95"
    >
      Login
    </button>

    {/* Optional Links */}
    <p className="text-xs sm:text-sm text-gray-500 text-center mt-2">
      Don't have an account?{" "}
      <span className="text-green-500 cursor-pointer hover:underline" onClick={() => navigate("/sign-up")}>
        Sign Up
      </span>
    </p>
  </form>
</div>

  );
};

export default LoginPage;
