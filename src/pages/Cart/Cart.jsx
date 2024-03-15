import React, { useContext, useEffect } from 'react';
import { cartContext } from '../../context/cartContext';
import Helmet from '../component/Helmet/Helmet';
import CommonSection from '../component/commom-section/CommonSection';
import { Col, Container, Row } from 'reactstrap';
import './cart-page.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, calcTotalPrice } = useContext(cartContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
              <div className="mt-4">
                <h6>
                  المجموع: NIS{' '}
                  <span className="cart_total">{calcTotalPrice()}</span>
                </h6>
                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                  <Link to={'/products'}>
                    <button className="shop_btn d-flex align-items-center justify-content-between gap-2">
                      استمر بالتسوق <i className="ri-arrow-left-line"></i>
                    </button>
                  </Link>

                  <button className="all-products-btn">
                    <Link
                      to={`https://wa.me/+970592735331?text=${'whatsAppText'}`}
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
  const { removeItem, toast } = useContext(cartContext);
  const handleDelete = () => {
    removeItem(item.id);
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
        <img src={item.image} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>NIS {item.price}</td>
      <td>{item.quantity}x</td>
      <td className="cart_item_del">
        <i className="ri-delete-bin-line" onClick={handleDelete}></i>
      </td>
    </tr>
  );
};

export default Cart;
