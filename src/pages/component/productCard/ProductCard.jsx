import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';
import './product-card.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { toastifyContext } from '../../../context/toastifyContext';
const ProductCard = (props) => {
  const { _id, name, mainImage, price } = props.item;
  const { toast } = useContext(toastifyContext);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addItem({ ...props.item }));
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
  const handleLinkClick = (event) => {
    event.preventDefault();
    window.location.href = `/products/${_id}`;
  };
  return (
    <div className="product_item">
      <div className="product_img">
        <img src={mainImage?.secure_url} alt={name} />
      </div>

      <div className="product_content">
        <h5>
          <Link className="animated-link" onClick={handleLinkClick} to="#">
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
