import React from "react";
import Helmet from "../component/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero2.svg";
import './pagesStyle/home.css'
const Home = () => {
  return (
    <Helmet title="Home">
      {/* === hero section === */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <h5 className="mb-3">Discover the Latest Products</h5>
                <h2 className="mb-4 hero_title text-blue">
                  <span>Upgrade</span> Your Devices
                  <br /> with <span>Our Technology</span>
                </h2>
                <p>
                  Find the latest products and gadgets at our online store.
                  From smartphones and laptops to smart home devices and gaming
                  consoles, we have everything you need to stay connected and
                  entertained.
                </p>
                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                  <button className="shop_btn d-flex align-items-center justify-content-between">
                    Shop Now <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all-products-btn">
                    <Link to="/products">See All Products</Link>
                  </button>
                </div>
                <div className="hero_service d-flex align-items-center justify-content-between gap-1 mt-5">
                  <p className=" d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i className="ri-car-line"></i>
                    </span>
                    Free Shipping on All Orders
                  </p>

                  <p className=" d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% Secure Checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" className="mt-5">
              <div className="hero_img">
                <img className="w-100" src={heroImg} alt="hero img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
