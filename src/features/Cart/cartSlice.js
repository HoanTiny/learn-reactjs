import { createSlice } from "@reduxjs/toolkit";

// Create a slice using the createSlice function from Redux Toolkit
const counterSlice = createSlice({
  name: "cart", // Name of the slice
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },

    hideMiniCart(state) {
      state.showMiniCart = false;
    },

    addToCart(state, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);

      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },
  },
});

// Extract the actions and reducer from the counterSlice object
const { actions, reducer } = counterSlice;

// Export the increase and decrease actions
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFromCart,
} = actions;

// Export the reducer as the default export
export default reducer;
