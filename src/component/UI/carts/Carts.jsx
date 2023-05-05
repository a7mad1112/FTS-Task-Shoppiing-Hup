import React, { useContext } from "react";
import { cartContext } from "../../../context/cartContext";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import "./shopping-cart.css";
import { Link } from "react-router-dom";
const Carts = () => {
  const { cartItems, calcTotalPrice, setCartUiShow } = useContext(cartContext);
  const toggleCart = () => setCartUiShow(false);
  return (
    <div className="cart_container">
      <ListGroup className="cart">
        <div className="cart_close">
          <span onClick={toggleCart}>
            <i className="ri-close-line"></i>
          </span>
        </div>
        <div className="cart_list">
          {cartItems.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartItems.map((item) => <CartItem item={item} key={item.id} />)
          )}
        </div>

        <div className="cart_bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal: <span>${calcTotalPrice()}</span>
          </h6>
          <button>
            <Link to='/checkout'>Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
