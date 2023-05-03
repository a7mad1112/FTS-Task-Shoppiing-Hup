import React, { useContext, useEffect, useState } from "react";
import Helmet from "../component/Helmet/Helmet";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero2.svg";
import "./pagesStyle/home.css";
import Categories from "../component/UI/cagegories/Categories";
import whyImg from "../assets/images/map.svg";
// data for features section
import featureImg01 from "../assets/images/fastShipping.svg";
import featureImg02 from "../assets/images/santa.svg";
import featureImg03 from "../assets/images/week.svg";
import { productsContext } from "../context/productsContext";
import ProductCard from "../component/UI/productCard/ProductCard";
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
  const { products } = useContext(productsContext);
  // let productsToShow ; // create a copy of products array
  const [productsToShow, setProductsToShow] = useState([]);
  const [category, setCategory] = useState("all");
  function filterProducts() {
    if (category === "all") {
      setProductsToShow(products);
    } else {
      setProductsToShow(products.filter((prod) => prod.category === category));
    }
  }
  useEffect(() => {
    filterProducts();
  }, [category]);
  const hotProducts = [products[12], products[16], products[19], products[5]];
  return (
    <Helmet title="Home">
      {/* === hero section === */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <h5 className="mb-3 text-blue">Discover the Latest Products</h5>
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
                  <img className="mb-3" src={item.imgUrl} alt="feature-img" />
                  <h5 className="fw-bold">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* === All Products Section === */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Products</h2>
            </Col>
            <Col lg="12">
              <div className="products_category d-flex align-items-center justify-content-center gap-sm-2 gap-lg-4">
                <button
                  className={`all_btn ${
                    category === "all" && "productBtnActive"
                  }`}
                  onClick={() => setCategory("all")}
                >
                  All
                </button>
                <button
                  className={`${
                    category === "smartphone" && "productBtnActive"
                  }`}
                  onClick={() => setCategory("smartphone")}
                >
                  SmartPhone
                </button>
                <button
                  className={`${category === "watch" && "productBtnActive"}`}
                  onClick={() => setCategory("watch")}
                >
                  Watch
                </button>
                <button
                  className={`${category === "laptop" && "productBtnActive"}`}
                  onClick={() => setCategory("laptop")}
                >
                  Laptop
                </button>
              </div>
            </Col>
            {productsToShow.map((item) => (
              <Col
                className="mt-5"
                xl="3"
                lg="4"
                md="4"
                sm="6"
                xs="12"
                key={item.id}
              >
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* === Why Choose Us section === */}
      <section className="why__choose-us">
        <Container>
          <Row>
            <Col className="mb-5 mb-md-5" lg="6" md="6">
              <img className="img-fluid" src={whyImg} alt="why-img" />
            </Col>
            <Col lg="6" md="6">
              <div className="why_shopping_hup">
                <h2 className="shopping_hup_title mb-4 text-blue">
                  Why <span className="text-gold fw-bold">Shopping Hup?</span>
                </h2>
                <p className="shopping_hup_desc">
                  At ShoppingHup, we provide an exceptional online shopping
                  experience for our customers. Here are some of the key
                  features that set us apart:
                </p>
                <ListGroup className="mt-4 bg-transparent">
                  <ListGroupItem className="border-0 ps-1 bg-transparent">
                    <p className="choose-us-title d-flex align-align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Wide range of products
                    </p>
                    <p className="choose-us-desc  bg-transparent">
                      We offer a wide range of high-quality products, from
                      electronics to clothing, so that our customers can find
                      everything they need in one place.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-1  bg-transparent">
                    <p className="choose-us-title d-flex align-align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Secure and convenient payment options
                    </p>
                    <p className="choose-us-desc">
                      We provide our customers with secure and convenient
                      payment options, including credit card, debit card, and
                      online payment gateways, so that they can shop with
                      confidence.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-1  bg-transparent">
                    <p className="choose-us-title d-flex align-align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Fast and reliable delivery
                    </p>
                    <p className="choose-us-desc">
                      We understand the importance of timely delivery, and we
                      work hard to ensure that our customers receive their
                      orders as quickly as possible, without any delays.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* === Hot Products Section === */}
      <section>
        <Container>
          <Row>
            <Col className="text-center mb-5" lg="12">
              <h2>Hot Products</h2>
            </Col>
            {hotProducts.map((item) => (
              <Col
                className="mb-4"
                xl="3"
                lg="4"
                md="4"
                sm="6"
                xs="12"
                key={item.id}
              >
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
