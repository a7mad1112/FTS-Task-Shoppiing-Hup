import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './shopping-cart/cartSlice';
import cartUiSlice from './shopping-cart/cartUiSlice';

const saveCartMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('cartState', JSON.stringify(store.getState().cart));
  return result;
};

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveCartMiddleware),
});

export default store;
