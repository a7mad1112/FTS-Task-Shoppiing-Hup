import React, { useContext, useEffect } from "react";
import Helmet from "./../component/Helmet/Helmet";
import CommonSection from "./../component/UI/commom-section/CommonSection";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { productsContext } from "./../context/productsContext";
import "./pagesStyle/product-details.css";
import { cartContext } from "../context/cartContext";
import ProductCard from "../component/UI/productCard/ProductCard";
const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(productsContext);
  const currProduct = products.find((prod) => +id === +prod.id);
  const relatedProducts = products
    .filter((prod) => prod.category === currProduct.category)
    .slice(0, 4);

  const { addCartItem } = useContext(cartContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title={currProduct.title}>
      <CommonSection title={currProduct.title} />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="single_product_img">
                <img
                  src={currProduct.image}
                  alt={currProduct.title + " image"}
                />
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="single_product">
                <h2 className="product_title mb-3">{currProduct.title}</h2>
                <p className="product_price">
                  price: <span>${currProduct.price}</span>{" "}
                </p>
                <p className="category">
                  Category: <span>{currProduct.category}</span>{" "}
                </p>
                <p className="mb-4">{currProduct.desc}</p>
                <button
                  className="addToCart_btn"
                  onClick={() => addCartItem(currProduct)}
                >
                  Add to Cart
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col className="mb-5 mt-4" lg="12">
              <h2>You might also like</h2>
            </Col>
            {relatedProducts.map((item) => (
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

export default ProductDetails;
