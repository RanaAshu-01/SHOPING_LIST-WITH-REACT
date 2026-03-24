import { createContext, useState, useEffect } from "react";
import users from "../data/data";
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
    setUser("")
  }


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    if (!product || !product.id) return; // 🛑 safety check

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
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

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, increaseQty, decreaseQty, removeItem, setCategory, category, showPopUp, setShowPopUp, setLoader, loader, accountOpen, setAccountOpen, handleLogoutAccount, showData, setUser, user, setSearchTerm, searchTerm, users }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
