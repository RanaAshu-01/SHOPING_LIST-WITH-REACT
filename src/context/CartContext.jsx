import { createContext, useState, useEffect } from "react";
import users from "../data/data";
import slidesData from "../data/slideData";
import autoScrollImages from "../data/autoScrollImages";
import { useNavigate } from "react-router-dom";


export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [showPopUp, setShowPopUp] = useState(false)
  const [loader, setLoader] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [showData, setShowData] = useState("")
  const API_KEY = "e4c4f3066f2d4aa88020182710e8db2a"
  const navigate = useNavigate()





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
            ]

            const locationText = finalData.filter(Boolean).join(", ");


            setShowData(locationText)

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
  }, [])


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

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
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
    if (items.product === "Mobile Offers"){
      navigate("/mobile")
    }else if (items.product === "Electronics Offers"){
      navigate("/electronics")
    }else if (items.product === "Fashion Offers"){
        navigate("/fashion")
    }
  }



  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, increaseQty, decreaseQty, removeItem, setCategory, category, showPopUp, setShowPopUp, setLoader, loader, accountOpen, setAccountOpen, handleLogoutAccount, showData, setUser, user, setSearchTerm, searchTerm, users, handleDeals, handlePayment, slidesData, autoScrollImages, handleNavigate }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
