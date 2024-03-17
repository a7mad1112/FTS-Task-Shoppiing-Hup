import React, { useContext } from 'react';
import './product-card.css';
import { Link } from 'react-router-dom';
import { cartContext } from '../../../context/cartContext';
const ProductCard = (props) => {
  const { id, name, mainImage, price } = props.item;
  const { addCartItem, toast } = useContext(cartContext);
  const addToCart = () => {
    addCartItem(props.item);
    toast.success('تمت اضافة ' + name + ' الى السلة', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  return (
    <div className="product_item">
      <div className="product_img">
        <img src={mainImage?.secure_url} alt={name} />
      </div>

      <div className="product_content">
        <h5>
          <Link className="animated-link" to={`/products/${id}`}>
            {name}
          </Link>
        </h5>
        <div className="d-flex  align-items-center justify-content-between">
          <button className="addToCart_btn" onClick={addToCart}>
            أضف الى السلة
          </button>
          <span className="product_price">NIS {price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
