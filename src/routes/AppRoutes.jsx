import { Routes, Route } from "react-router-dom";
import MainLayout from "../componets/layout/MainLayout";

import Home from "../common_pages/Home";
import CartPage from "../common_pages/Cart";
import LoginPage from "../common_pages/LoginPage";
import Deals from "../common_pages/Deals";
import Account from "../common_pages/AccountPage";

// mobile pages
import Mobile from "../mobile_Pages/Mobile";
import ElectronicItems from "../mobile_Pages/ElectronicItems";
import Fashion from "../mobile_Pages/Fashion";
import Books from "../mobile_Pages/Books";
import Toys from "../mobile_Pages/Toys";
import Beauty from "../mobile_Pages/Beauty";
import FoodHealth from "../mobile_Pages/Food&Health";
import Furniture from "../mobile_Pages/Furniture";
import SignUpPage from "../common_pages/SignUpPage";

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
        

        <Route path="/mobile" element={<Mobile />} />
        <Route path="/electronics" element={<ElectronicItems />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/books" element={<Books />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/food-health" element={<FoodHealth />} />
        <Route path="/furniture" element={<Furniture />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;
