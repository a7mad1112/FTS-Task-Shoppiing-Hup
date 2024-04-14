import { ListGroupItem } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/shopping-cart/cartSlice';
import './cart-item.css';
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(cartActions.addItem({ ...item }));
  };
  const decreasetItem = () => {
    dispatch(cartActions.removeItem(item._id));
  };
  return (
    <ListGroupItem className="border-0 cart_item d-flex align-items-center justify-content-between">
      <div className="cart_item_info">
        <h6 className="cart_item_title">{item.name}</h6>
        <p className=" d-flex align-items-center gap-5 cart_item_price">
          {item.quantity}x <span className="text-gold">NIS {item.price}</span>
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
      <div className="cart_item_img">
        <img src={item.mainImage?.secure_url} alt={item.name + ' image'} />
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
