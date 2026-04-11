import { Routes, Route } from "react-router-dom";
import MainLayout from "../componets/layout/MainLayout";

import Home from "../common_pages/Home";
import CartPage from "../common_pages/Cart";
import LoginPage from "../common_pages/LoginPage";
import Deals from "../common_pages/Deals";
import Account from "../common_pages/AccountPage";
import Mobile from "../mobile_Pages/Mobile";
import ElectronicItems from "../mobile_Pages/ElectronicItems";
import Fashion from "../mobile_Pages/Fashion";
import Groceries from "../mobile_Pages/Groceries";
import Toys from "../mobile_Pages/Toys";
import Beauty from "../mobile_Pages/Beauty";
import FoodHealth from "../mobile_Pages/Food&Health";
import Furniture from "../mobile_Pages/Furniture";
import SignUpPage from "../common_pages/SignUpPage";
import OrderPlacedPage from "../common_pages/OrderPlaced";
import Licence from "../common_pages/Licence";
import CookiePolicy from "../common_pages/CookiePolicy"
import Blogs from "../common_pages/Blogs"
import Press from "../common_pages/PressPage";
import Career from "../common_pages/Career"
import AboutUs from "../common_pages/About";
import ContactUs from "../common_pages/ContactUs"
import HelpCenter from "../common_pages/Help";
import SafetyCenter from "../common_pages/Safety"
import CommunityGuidelines from "../common_pages/CommunityGuidelines";
import Returns from "../common_pages/Returns";
import Shipping from "../common_pages/Shipping";
import OrderTracking from "../common_pages/OrderTracking"
import GiftCards from "../common_pages/GiftCards"
import PrivacyPolicy from "../common_pages/PrivacyPolicy"
import TermsOfService  from "../common_pages/TermsOfService"
import NotFound from "../common_pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/accounts" element={<Account />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/order-placed" element={<OrderPlacedPage />} />
        <Route path="/licenses" element={<Licence />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/press" element={<Press />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/safety" element={<SafetyCenter />} />
        <Route path="/community" element={<CommunityGuidelines />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound  />} />
        

        <Route path="/mobile" element={<Mobile />} />
        <Route path="/electronics" element={<ElectronicItems />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/food-health" element={<FoodHealth />} />
        <Route path="/furniture" element={<Furniture />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;
