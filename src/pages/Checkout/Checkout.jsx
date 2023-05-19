import React, { useContext, useEffect } from "react";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/commom-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { cartContext } from "../../context/cartContext";
import './checkout.css'
const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { calcTotalPrice } = useContext(cartContext);
  const price = calcTotalPrice();
  const shippingCost = price ? 30 : 0;
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shopping Address</h6>
              <form className="checkout_form">
                <div className="form_group">
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form_group">
                  <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form_group">
                  <input type="number" placeholder="Phone number" required />
                </div>
                <div className="form_group">
                  <input type="text" placeholder="Country" required />
                </div>
                <div className="form_group">
                  <input type="text" placeholder="City" required />
                </div>
                <div className="form_group">
                  <input type="text" placeholder="Postal code" required />
                </div>
                <button className="addToCart_btn">Payment</button>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout">
                <h6 className=" d-flex align-items-center justify-content-start gap-4 mb-3">
                  Subtotal: <span>${price}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-start gap-4">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout_total mb-3">
                  <h5 className=" d-flex align-items-center justify-content-start gap-4">
                    Total: <span>${price + shippingCost}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
