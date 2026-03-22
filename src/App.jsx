import { Routes, Route } from "react-router-dom";
import { useState, useEffect,useContext } from "react";
import Navbar from "./componets/Navbar";
import MainSection from "./componets/MainSection";
import LoginPage from "./componets/LoginPage";
import users from "./data/data";
import Footer from './componets/Footer';
import CartPage from './componets/Cart';
import CartProvider from "./componets/CartContext";
import About from "./componets/About";
import Career from "./componets/Career";
import Press from "./componets/PressPage";
import Blog from "./componets/Blogs";
import HelpCenter from "./componets/Help";
import SafetyCenter from "./componets/Safety";
import CommunityGuidelines from "./componets/CommunityGuidelines";
import ContactUs from "./componets/ContactUs";
import Shipping from "./componets/Shipping";
import Returns from "./componets/Returns";
import OrderTracking from "./componets/OrderTracking";
import GiftCards from "./componets/GiftCards";
import TermsOfService from "./componets/TermsOfService";
import PrivacyPolicy from "./componets/PrivacyPolicy";
import CookiePolicy from "./componets/CookiePolicy";
import Licenses from "./componets/Licence";
import { AuthContext } from "./componets/AuthContext";
import ScrollToTop from "./componets/ScrollToTop";





const App = () => {
  const { setUser } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");


   useEffect(() => {
    const name = localStorage.getItem("user");
    
    if (name) {
      setUser(name);
    }
  }, [])
 

  return (
    <>
      


        <CartProvider >
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
           <ScrollToTop />

          <Routes>
            <Route path="/" element={<MainSection users={users} searchTerm={searchTerm} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage users={users} />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/press" element={<Press />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/safety" element={<SafetyCenter />} />
            <Route path="/community" element={<CommunityGuidelines />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/licenses" element={<Licenses />} />

          </Routes>
          <Footer />

        </CartProvider>
    </>
  );
};

export default App;
