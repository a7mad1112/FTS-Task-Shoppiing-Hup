import { useEffect, useRef } from 'react';
import { ListGroup } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import './shopping-cart.css';
import { Link } from 'react-router-dom';
import { whatsAppInvoice } from '../../utils/whatsAppInvoice';
import { cartUiActions } from './../../store/shopping-cart/cartUiSlice';

const Carts = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const toggleCart = () => dispatch(cartUiActions.toggle());
  // close if clicking outside the bar
  const containerRef = useRef(null);
  const handleClickOutsideCart = (event) => {
    if (containerRef.current && event.target === containerRef.current) {
      toggleCart();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideCart);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideCart);
    };
  }, []);
  const whatsAppMsgForm = whatsAppInvoice(cartItems, totalAmount);
  return (
    <div className="cart_container" ref={containerRef}>
      <ListGroup className="cart">
        <div className="cart_close">
          <span onClick={toggleCart}>
            <i className="ri-close-line"></i>
          </span>
        </div>
        <div className="cart_list">
          {cartItems.length === 0 ? (
            <h6 className="text-center mt-5">السلة فارغة</h6>
          ) : (
            cartItems.map((item) => <CartItem item={item} key={item._id} />)
          )}
        </div>

        <div className="cart_bottom d-flex align-items-center justify-content-between">
          <h6>
            المجموع: <span>NIS {totalAmount}</span>
          </h6>
          <button>
            <Link
              target="_blank"
              to={`https://wa.me/+972592753581?text=${encodeURIComponent(
                whatsAppMsgForm
              )}`}
            >
              طلب
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
