import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";

const EditPopUp = () => {
  const [errors, setErrors] = useState({});
  const nameRegex = /^[A-Za-z ]{3,}$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const { showEdit, setShowEdit, user, setUser } = useContext(CartContext);
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const validate = () => {
    let newErrors = {};
    if (!nameRegex.test(details.name)) {
      newErrors.name = "Enter valid name (min 3 letters)";
    }
    if (!phoneRegex.test(details.phone)) {
      newErrors.phone = "Enter valid phone (10 digits)";
    }
    if (showPasswordInput && !details.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setShowPasswordInput(true); // Show password input if not already

    try {
      // Make sure password is entered
      if (!details.password) return;

      const currentUser = auth.currentUser;
      const credential = EmailAuthProvider.credential(
        currentUser.email,
        details.password
      );

      await reauthenticateWithCredential(currentUser, credential);

      await updateDoc(doc(db, "users", currentUser.uid), {
        name: details.name,
        phone: details.phone
      });

      setUser({ ...user, ...details });
      localStorage.setItem("user", JSON.stringify({ ...user, ...details }));

      setShowEdit(false);

    } catch (err) {
      console.log(err);
      if (err.code === "auth/wrong-password") {
        setErrors((prev) => ({ ...prev, password: "Wrong password ❌" }));
      } else if (err.code === "auth/requires-recent-login") {
        setErrors((prev) => ({ ...prev, password: "Please login again ❌" }));
      } else {
        setErrors((prev) => ({ ...prev, password: err.message }));
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    if (user) {
      setDetails({
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: ""
      });
    }
  }, [user]);

  return (
    <>
      {showEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm mt-30 xl:mt-0">
          <form onSubmit={handleUpdate}>
            <div className="bg-white min-w-[55vh] max-w-full p-6 rounded-2xl shadow-lg mx-12">
              <h2 className="text-xl font-semibold mb-4 text-center">Edit Details</h2>

              {/* Name */}
              <label className="block text-gray-700 mb-1 font-medium">Name</label>
              <input
                type="text"
                name='name'
                placeholder="Name..."
                value={details.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-1 outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mb-2">{errors.name}</p>
              )}

              {/* Email (disabled) */}
              <label className="block text-gray-700 mb-1 font-medium">Email</label>
              <input
                type="text"
                name='email'
                disabled
                value={details.email}
                className="w-full border border-gray-300 rounded-md text-gray-400 cursor-not-allowed px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Phone */}
              <label className="block text-gray-700 mb-1 font-medium">Phone</label>
              <input
                type="text"
                name='phone'
                placeholder="Phone..."
                value={details.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-1 outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mb-2">{errors.phone}</p>
              )}

              {/* Password Input */}
              {showPasswordInput && (
                <div className='mt-5'>
                  <label className="block text-gray-700 mb-1 font-medium">
                    Enter Password to confirm
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password..."
                    value={details.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mb-1 outline-none focus:ring-2 focus:ring-blue-500 caret-black"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mb-2">{errors.password}</p>
                  )}
                </div>
              )}

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-2">
                <button
                  type='button'
                  onClick={() => setShowEdit(false)}
                  className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditPopUp;
