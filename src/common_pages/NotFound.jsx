
import Lottie from 'lottie-react'
import NotFoundAnimation from '../assets/animations/Error 404.json'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      
      {/* Animation */}
      <div className="w-full max-w-md">
        <Lottie animationData={NotFoundAnimation} loop={true} />
      </div>

      {/* Text */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 text-center">
        Oops! Page Not Found
      </h1>

      <p className="text-gray-500 mt-2 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-2 rounded-xl bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-md hover:scale-105 transition duration-300"
      >
        Go to Home
      </Link>

    </div>
  )
}

export default NotFound
