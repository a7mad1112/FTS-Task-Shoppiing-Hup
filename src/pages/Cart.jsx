import React, { useContext, useEffect } from "react";
import { cartContext } from "../context/cartContext";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/UI/commom-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import "./pagesStyle/cart-page.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, calcTotalPrice } = useContext(cartContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Products Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
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
                  Total: $<span className="cart_total">{calcTotalPrice()}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart_page_btn">
                  <button className="addToCart_btn me-4">
                    <Link className="text-white fw-bold" to="/products">Continue Shopping</Link>
                  </button>
                  <button className="addToCart_btn">
                    <Link className="text-white fw-bold" to="/checkout">Proceed to checkout</Link>
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
    removeItem(item.id)
    toast.info(item.title + ' Deleted', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const { item } = props;
  return (
    <tr>
      <td className="cart_img_box">
        <img src={item.image} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>${item.price}</td>
      <td>{item.quantity}x</td>
      <td className="cart_item_del">
        <i
          className="ri-delete-bin-line"
          onClick={handleDelete}
        ></i>
      </td>
    </tr>
  );
};

export default Cart;
