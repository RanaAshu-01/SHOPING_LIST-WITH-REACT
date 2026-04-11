import { createContext, useState, useEffect } from "react";
import data from "../data/data";
import slidesData from "../data/slideData";
import autoScrollImages from "../data/autoScrollImages.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setCartItems } from "../redux/slices/cartItems.js";
import { useDispatch } from "react-redux";


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
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()



  const dispatch = useDispatch()

  const playSound = () => {
    const audio = new Audio("/loginPopUp.mp3");
    audio.play();
  };



  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);


  useEffect(() => {
    if (data && data.length > 0 && slidesData && slidesData.length > 2 && autoScrollImages && autoScrollImages.length > 5 && products && products.length > 2) {
      setLoader(false);
    } else {
      setLoader(true);

    }
  }, [data, slidesData, autoScrollImages, products]);




  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      const storage = user ? localStorage : sessionStorage;
      const saved = storage.getItem("cartItems");
      const parsed = saved ? JSON.parse(saved) : [];

      setCartItems(Array.isArray(parsed) ? parsed : []);
    } catch {
      setCartItems([]);
    }
  }, [user]);

  useEffect(() => {
    user ? sessionStorage.removeItem("cartItems") : ""
  }, [user])

  useEffect(() => {



    if (user) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

  }, [cartItems, user]);





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
    setCartItems((prev) => {
      const updatedCart = prev.filter((item) => item.id !== product.id);

      if (updatedCart.length === 0) {
        navigate("/");
      }

      return updatedCart;
    });
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
      value={{ cartItems, products, setCartItems, addToCart, increaseQty, decreaseQty, removeItem, setCategory, category, showPopUp, setShowPopUp, setLoader, loader, accountOpen, setAccountOpen, showData, setUser, user, setSearchTerm, searchTerm, data, handleDeals, handlePayment, slidesData, autoScrollImages, handleNavigate, showEdit, setShowEdit }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
