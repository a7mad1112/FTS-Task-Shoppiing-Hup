import React from "react";
import "./product-card.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, image, price } = props.item;
  const addToCart = () => 1;
  return (
    <div className="product_item">
      <div className="product_img">
        <img src={image} alt={title} />
      </div>

      <div className="product_content">
        <h5>
          <Link to={`/products/${id}`}>{title}</Link>
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
