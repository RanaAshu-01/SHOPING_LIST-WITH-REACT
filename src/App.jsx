import { Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import Navbar from "./componets/Navbar";
import MainSection from "./componets/MainSection";
import LoginPage from "./login logout pages/LoginPage";
import Footer from './pages/Footer';
import CartPage from './cartSection/Cart';
import About from "./pages/About";
import Career from "./pages/Career";
import Press from "./pages/PressPage";
import Blog from "./pages/Blogs";
import HelpCenter from "./pages/Help";
import SafetyCenter from "./pages/Safety";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import ContactUs from "./pages/ContactUs";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import OrderTracking from "./pages/OrderTracking";
import GiftCards from "./pages/GiftCards";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Licenses from "./pages/Licence";
import ScrollToTop from "./pages/ScrollToTop";
import LogoutPopUp from './login logout pages/LogoutPopUp'
import Loader from "./pages/Loader";
import Account from "./mobilePages/AccountPage";
import SignUpPage from "./pages/SignUpPage"
import { CartContext } from "./context/CartContext";
import OrderPlacedPage from "./componets/OrderPlaced";
import Deals from "./componets/Deals";
import CategoryNavbar from "./componets/CategoryNavbar";
import Mobile from "./componets/Mobile";
import ElectronicItems from "./componets/ElectronicItems";
import Fashion from "./componets/Fashion";




const App = () => {
  const { setUser } = useContext(CartContext);

  useEffect(() => {
    const setData = JSON.parse(localStorage.getItem("user"));

    if (setData) {
      setUser(setData)
    }
  }, [])


  return (
    <>
      <Navbar />
      <CategoryNavbar />
      <ScrollToTop />
      <LogoutPopUp />
      <Loader />

      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
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
        <Route path="/Accounts" element={<Account />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/order-placed" element={<OrderPlacedPage />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/electronics" element={<ElectronicItems />} />
        <Route path="/fashion" element={<Fashion />} />
        
      </Routes>

      <Footer />

    </>
  );
};

export default App;
