import React, { useContext, useEffect } from 'react';
import { cartContext } from '../../context/cartContext';
import Helmet from '../component/Helmet/Helmet';
import CommonSection from '../component/commom-section/CommonSection';
import { Col, Container, Row } from 'reactstrap';
import './cart-page.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/shopping-cart/cartSlice';

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const invoice = cartItems.map(
    (item, index) => `المنتج ${index + 1}:
    اسم المنتج: ${item.name}\n
    السعر: ${item.price}\n
    الكمية: ${item.quantity}\n
    السعر الاجمالي للمنتج: ${item.quantity * item.price}\n
    ------------\n
    `
  );
  const whatsAppMsgForm = `
  مرحبا, لقد اعجبتني المنتجات التالية:\n
  ${invoice}
  السعر الاجمالي للفاتورة: ${totalAmount}
  `;

  return (
    <Helmet title="السلة">
      <CommonSection title="السلة" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">السلة فارغة</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>الصورة</th>
                      <th>اسم المنتج</th>
                      <th>السعر</th>
                      <th>الكمية</th>
                      <th>حذف</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item._id} />
                    ))}
                  </tbody>
                </table>
              )}
              <div className="mt-4">
                <h6>
                  المجموع: NIS <span className="cart_total">{totalAmount}</span>
                </h6>
                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                  <Link to={'/products'}>
                    <button className="shop_btn d-flex align-items-center justify-content-between gap-2">
                      استمر بالتسوق <i className="ri-arrow-left-line"></i>
                    </button>
                  </Link>

                  <button className="all-products-btn">
                    <Link
                      target="_blank"
                      to={`https://wa.me/+972592753581?text=${encodeURIComponent(
                        whatsAppMsgForm
                      )}`}
                    >
                      اطلب من خلال الواتس
                    </Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { toast } = useContext(cartContext);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(cartActions.deleteItem(item._id));
    toast.info('تمت ازالة ' + item.title + ' من السلة', {
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
  const { item } = props;
  return (
    <tr>
      <td className="cart_img_box">
        <img src={item.mainImage?.secure_url} alt={item.name} />
      </td>
      <td>{item.name}</td>
      <td>NIS {item.price}</td>
      <td>{item.quantity}x</td>
      <td className="cart_item_del">
        <i className="ri-delete-bin-line" onClick={handleDelete}></i>
      </td>
    </tr>
  );
};

export default Cart;
