import { createSlice } from "@reduxjs/toolkit";

const getCartFromStorage = () => {
    try {
        const saved = localStorage.getItem("cartItems");
        const parsed = saved ? JSON.parse(saved) : [];

        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}



const initialState = {
    cartItems: getCartFromStorage(),
}

const cartItems = createSlice({
    name: "cart",
    initialState,

    reducers: {

        addToCart: (state, action) => {
          state.cartItems = cartItems.filter((item) =>{
            cartItems.id !== item.id 
            localStorage.setItem("cartItems", JSON.stringify())
            return cartItems.push[action.payload]
          })
        },

        removeToCart: (state, action) => {

        }
    }
})

export const { setCartItems } = cartItems.actions
export default cartItems.reducer