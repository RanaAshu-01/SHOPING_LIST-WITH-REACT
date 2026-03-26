import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import CartProvider from "./context/CartContext.jsx";
import './i18n/index.js'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <CartProvider >
        <App />
      </CartProvider>
  </BrowserRouter>

)
