import { useNavigate } from "react-router-dom";

const SuccessPopup = ({ show, onClose }) => {
  const navigate = useNavigate();

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-sm text-center">

        {/* Icon */}
        <div className="text-4xl mb-3">✅</div>

        {/* Message */}
        <h2 className="text-xl font-bold mb-2">
          Successfully Signed Up!
        </h2>

        <p className="text-gray-500 mb-5">
          Your account has been created successfully.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3">

          {/* Login Button */}
          <button
            onClick={() => navigate("/login")}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Go to Login
          </button>

          {/* Cancel Button */}
          <button
            onClick={() => {
              onClose();
              navigate("/");
            }}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg font-semibold transition"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
