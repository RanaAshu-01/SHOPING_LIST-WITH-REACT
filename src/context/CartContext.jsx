import { createContext, useState, useEffect } from "react";
import data from "../data/data";
import slidesData from "../data/slideData";
import autoScrollImages from "../data/autoScrollImages.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LogOut } from 'lucide-react';



export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [showPopUp, setShowPopUp] = useState(false)
  const [loader, setLoader] = useState(true)
  const [accountOpen, setAccountOpen] = useState(false)
  const [showData, setShowData] = useState("")
  const [showEdit, setShowEdit] = useState(false)
  const navigate = useNavigate()
  const API_KEY = "e4c4f3066f2d4aa88020182710e8db2a"
  const [products, setProducts] = useState([]);

  const playSound = () => {
    const audio = new Audio("/loginPopUp.mp3");
    audio.play();
  };


  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  console.log(products)

  useEffect(() => {
    if (data && data.length > 0 && slidesData && slidesData.length > 2 && autoScrollImages && autoScrollImages.length > 5 && products && products.length > 2) {
      setLoader(false);
    } else {
      setLoader(true);

    }
  }, [data, slidesData, autoScrollImages, products]);



  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        try {
          const res = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${API_KEY}`
          );
          const data = await res.json();

          if (data.results.length > 0) {
            const finalData = [
              data.results[0].components.suburb,
              data.results[0].components.city,
              data.results[0].components.postcode
            ];

            const locationText = finalData.filter(Boolean).join(", ");
            setShowData(locationText);
          } else {
            console.log("No location found");
          }
        } catch (error) {
          console.log("Error:", error);
        }
      },
      (error) => {
        console.log("Location error:", error.message);
      }
    );
  }, []);


  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("cartItems");
      const parsed = saved ? JSON.parse(saved) : [];

      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  });

  const handleLogoutAccount = () => {
    localStorage.removeItem("user")
    setUser(null)
    toast.info(
      <div className="flex items-center gap-2">
        <LogOut size={18} />
        <span>Logged out successfully</span>
      </div>);
  }


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  // Deals.................

  const handleDeals = (product) => {

    setCartItems((prev) => {

      return [...prev, { ...product, quantity: 1 }]
    })

  }

  const addToCart = (product) => {
    if (!product || !product.id) return;
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev;

      } else {
        playSound()
        toast.success(
          <div className="flex items-center gap-3">

            {/* Icon */}
            <div className="bg-green-100 text-green-600 rounded-full p-2 text-lg">
              🛒
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold">Added to Cart</p>
              <p className="text-xs text-gray-500">{product.title}</p>
            </div>

          </div>,
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeButton: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            style: {
              borderRadius: "12px",
              background: "#ffffff",
              color: "#111827",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            },
          }
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };


  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };


  const handlePayment = (amount) => {
    const options = {
      key: "rzp_test_SVTrrkoZoAymLd",
      amount: amount * 100,
      currency: "INR",
      name: "ShopZone",

      handler: function (response) {
        alert("Payment Success: " + response.razorpay_payment_id);
      },

      prefill: {
        name: "Ashu",
        email: "ashu@test.com",
      },

      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleNavigate = (items) => {
    if (items.product === "Mobile Offers") {
      navigate("/mobile")
    } else if (items.product === "Electronics Offers") {
      navigate("/electronics")
    } else if (items.product === "Fashion Offers") {
      navigate("/fashion")
    }
  }





  return (
    <CartContext.Provider
      value={{ cartItems, products, setCartItems, addToCart, increaseQty, decreaseQty, removeItem, setCategory, category, showPopUp, setShowPopUp, setLoader, loader, accountOpen, setAccountOpen, handleLogoutAccount, showData, setUser, user, setSearchTerm, searchTerm, data, handleDeals, handlePayment, slidesData, autoScrollImages, handleNavigate, showEdit, setShowEdit }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
