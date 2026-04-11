import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CategoryNavbar from "../common/CategoryNavbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />


      <div className="block xl:hidden">
        <CategoryNavbar />
      </div>
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
