import React, { useContext } from "react";
import "./product-card.css";
import { Link } from "react-router-dom";
import { cartContext } from "../../../context/cartContext";

const ProductCard = (props) => {
  const { id, title, image, price } = props.item;
  const { addCartItem, toast } = useContext(cartContext);
  const addToCart = () => {
    addCartItem(props.item);
    toast.success(title + " Added", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="product_item">
      <div className="product_img">
        <img src={image} alt={title} />
      </div>

      <div className="product_content">
        <h5>
          <Link className="animated-link" to={`/products/${id}`}>
            {title}
          </Link>
        </h5>
        <div className="d-flex  align-items-center justify-content-between">
          <span className="product_price">${price}</span>
          <button className="addToCart_btn" onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
