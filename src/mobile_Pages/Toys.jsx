import { useNavigate } from "react-router-dom";
import { Ban } from 'lucide-react';

const Toys = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 flex justify-center items-center gap-2">

        <span className="text-orange-500">
          <Ban strokeWidth={2} />
        </span>
        Sorry items not available
      </h1>

      <p className="text-gray-600 mb-6">
        currently some items are missing.
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

export default Toys