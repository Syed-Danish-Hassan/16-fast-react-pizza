import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: [],
  //   cart: [
  //     {
  //       pizzaId: 12,
  //       name: 'Mediterranean',
  //       quantity: 2,
  //       unitPrice: 16,
  //       totalPrice: 32,
  //     },
  //   ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      //payload here = newItem
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      //payload here = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      //payload here = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity: (state, action) => {
      //payload here = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) {
        //calling the deleteItem function in thesame reducer, to avoid code duplication
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) => {
  const item = state.cart.cart.find((item) => item.pizzaId === id);
  return item ? item.quantity : 0;
};

// export const decreaseItemQuantity = (pizzaId) => (state) => {
//   const item = state.cart.cart.find((item) => item.pizzaId === pizzaId);
//   return item ? item.quantity - 1 : 0;
// };

//reselect library for memoization of selectors, so they only recompute when their inputs change, improving performance.
