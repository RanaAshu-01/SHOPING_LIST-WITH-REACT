import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import LoginAnimation from "../assets/animations/Login Leady.json";
import { CartContext } from "../context/CartContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Eye, UserCheck } from "lucide-react";
import { toast } from "react-toastify";



const LoginPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(CartContext);
  const [signUpError, setSignUpError] = useState(false)
  const [showPassword, setShowPassword] = useState("password")
  const [loader, setLoader] = useState(false)



  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|org|net)$/;
  const finalEmail = emailRegex.test(email);

  const playSound = () => {
    const audio = new Audio("/loginPopUp.mp3");
    audio.play();
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const cleanEmail = email.trim();

    if (!emailRegex.test(cleanEmail)) {
      return setError("Enter valid email...");
    }


    if (password.length < 6) {
      return setError("invalid password...");
    }



    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        cleanEmail,
        password
      );

      setLoader(true)

      const user = userCredential.user;


      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {

        const userData = docSnap.data();

        console.log("User Data:", userData);


        localStorage.setItem("user", JSON.stringify(userData));

        setUser(userData);

        navigate("/");
       

        toast.success(
          <div className="flex items-center gap-2">
            <UserCheck size={18} />
            <span>Welcome back, {userData.name}</span>
          </div>, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeButton: false,
          style: {
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "#fff",
            borderRadius: "12px",
            padding: "12px 16px",
            fontSize: "14px",
            fontWeight: "500"
          }
        });

        playSound()

      } else {
        setError("User data not found...");
      }

    } catch (err) {
      console.log(err.code);

      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      ) {
        setSignUpError(true);
      } else if (err.code === "auth/invalid-email") {
        setError("Enter valid email...");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <>


      <div className="min-h-screen bg-gray-100 flex flex-col sm:flex-row items-center justify-center p-4 gap-8 mt-10 xl:mt-0">

        {/* Animation */}
        <div className="flex justify-center w-full sm:w-1/2">
          <Lottie
            animationData={LoginAnimation}
            loop={true}
            className="w-48 h-48 sm:w-96 sm:h-96"
          />
        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 w-full max-w-sm flex flex-col gap-6"
        >
          <h2 className="text-2xl font-bold text-center">Login</h2>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {signUpError && (
            <p
              className="text-red-400 text-sm text-center font-medium">
              Invali email or password, if you are not sign-up please
              <Link
                className="text-green-500 font-bold cursor-pointer hover:underline"
                to="/sign-up"
              >
                {" "}    sign-up  {" "}
              </Link>
              here
            </p>
          )}

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
            <label className="block text-gray-700 mb-1 font-medium">password</label>
            <div className="relative">
              <input
                type={showPassword}
                placeholder="Enter your password"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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


          {/* Button */}
          <button
            type="submit"
            disabled={loader}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
          >
            {loader ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

          {/* Signup Redirect */}
          <p className="text-sm text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/sign-up")}
              className="text-green-500 cursor-pointer font-bold"
            >
              Sign-Up
            </span>
          </p>

        </form>


      </div >
    </>
  );
};

export default LoginPage;
