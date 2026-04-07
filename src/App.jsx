import { useEffect, useContext } from "react";
import { CartContext } from "./context/CartContext";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./componets/common/ScrollToTop";
import LogoutPopUp from "./componets/common/LogoutPopUp";
import Loader from "./componets/common/Loader";
import EditPopUp from "./componets/common/EditPopUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { setUser, loader } = useContext(CartContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) setUser(data);
  }, []);

  return (
    <>
      <ScrollToTop />
      <LogoutPopUp />
      <EditPopUp />

      {loader && <Loader />}

      <AppRoutes />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;
