import { useState } from "react";
import Layout from "./component/Layout/Layout";
import { productsContext } from "./context/productsContext";
import productsFromFakeData from "./assets/fake-data/products";
import { cartContext } from "./context/cartContext";
const App = () => {
  const [products, setProducts] = useState(productsFromFakeData);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  // function to calc total price
  const calcTotalPrice = () => {
    return cartItems.reduce((total, currItem) => {
      return total + Number(currItem.price) * Number(currItem.quantity);
    }, 0);
  };
  const addCartItem = (item) => {
    setTotalQuantity(totalQuantity + 1);
    const isItemExist = cartItems.find((cartItem) => cartItem.id === item.id);
    const newItem = { ...item, quantity: 1 };
    // if the item not exist
    if (!isItemExist) {
      setCartItems([...cartItems, newItem]);
    } else {
      // isItemExist.quantity++;
      // Instead, create new array with the updated quantity
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    }
  };

  // function to delete item form cart
  const removeItem = (id) => {
    if (totalQuantity === 0) return;
    setTotalQuantity(totalQuantity - 1);
    const item = cartItems.find((item) => item.id === id);
    if (item.quantity === 1) {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            }
          : cartItem
      );
      setCartItems(updatedCartItems);
    }
  };

  // state to show the cart in header
  const [cartUiShow, setCartUiShow] = useState(false);
  return (
    <productsContext.Provider value={{ products, setProducts }}>
      <cartContext.Provider
        value={{ cartItems, addCartItem, totalQuantity, removeItem, calcTotalPrice, cartUiShow, setCartUiShow }}
      >
        <Layout />
      </cartContext.Provider>
    </productsContext.Provider>
  );
};

export default App;
