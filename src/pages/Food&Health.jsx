import { useNavigate } from "react-router-dom";

const FoodHealth = () => {
const navigate = useNavigate()

  return (
     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
        🚧 Page Under Development
      </h1>

     <p className="text-gray-600 mb-6">
                We're currently working on Food & Health page.
                <br />
                It will be available soon. Stay tuned!
            </p>


      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 active:scale-95 transition"
      >
        Go Back to Home
      </button>

    </div>
  )
}

export default FoodHealth