import { useEffect, useContext } from "react";
import { CartContext } from "./context/CartContext";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./componets/common/ScrollToTop";
import LogoutPopUp from "./componets/common/LogoutPopUp";
import Loader from "./componets/common/Loader";
import EditPopUp from "./componets/common/EditPopUp";

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
    </>
  );
};

export default App;
