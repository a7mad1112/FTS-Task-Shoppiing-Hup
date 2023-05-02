import React from "react";
import Helmet from "../component/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero2.svg";
import "./pagesStyle/home.css";
import Categories from "../component/UI/cagegories/Categories";

// data for features section
import featureImg01 from "../assets/images/fastShipping.svg";
import featureImg02 from "../assets/images/santa.svg";
import featureImg03 from "../assets/images/week.svg";
const featureData = [
  {
    title: "Fast Shipping",
    imgUrl: featureImg01,
    desc: "Get your order quickly and efficiently with our fast shipping options.",
    key: 1,
  },
  {
    title: "Hassle-Free Returns",
    imgUrl: featureImg02,
    desc: "Not satisfied with your purchase? No problem. We offer hassle-free returns.",
    key: 2,
  },
  {
    title: "24/7 Customer Support",
    imgUrl: featureImg03,
    desc: "Have a question or concern? Our customer support team is available 24/7 to assist you.",
    key: 3,
  },
];
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
                  Find the latest products and gadgets at our online store. From
                  smartphones and laptops to smart home devices and gaming
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
      {/* === Categories Section === */}
      <section>
        <Categories />
      </section>
      {/* === Features Section === */}
      <section>
        <Container>
          <Row>
            <Col className="text-center" lg="12">
              <h5 className="feature_subtitle mb-4">What we offer</h5>
              <h2 className="feature_title">Sit back and relax</h2>
              <h2 className="feature_title">
                we'll <span>deliver</span>
              </h2>
              <p className="mb-1 mt-4 feature_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, placeat.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, ipsam!
              </p>
            </Col>

            {featureData.map((item) => (
              <Col className="mt-5" lg="4" md="6" sm="6" key={item.key}>
                <div className="feature_item text-center px-5 py-3">
                  <img
                    className="mb-3"
                    src={item.imgUrl}
                    alt="feature-img"
                  />
                  <h5 className="fw-bold">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
