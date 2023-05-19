import React, { useContext } from "react";
import { ListGroupItem } from "reactstrap";
import { cartContext } from '../../context/cartContext'
import "./cart-item.css";
const CartItem = ({ item }) => {
  const { addCartItem, removeItem } = useContext(cartContext);
  const incrementItem = () => {
    addCartItem(item);
  };
  const decreasetItem = () => {
    removeItem(item.id);
  };
  return (
    <ListGroupItem className="border-0 cart_item d-flex align-items-center justify-content-between">
      <div className="cart_item_img">
        <img src={item.image} alt={item.title + " image"} />
      </div>
      <div className="cart_item_info">
        <h6 className="cart_item_title">{item.title}</h6>
        <p className=" d-flex align-items-center gap-5 cart_item_price">
          {item.quantity}x <span className="text-gold">${item.price}</span>
        </p>
        <div className="increase_decrease">
          <span className="increase_btn" onClick={incrementItem}>
            <i className="ri-add-line"></i>
          </span>
          <span className="quantity">{item.quantity}</span>
          <span className="decrease_btn" onClick={decreasetItem}>
            <i className="ri-subtract-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
