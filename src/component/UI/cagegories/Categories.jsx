import React from "react";

import categoryImg01 from "../../../assets/images/smartphone.svg";
import categoryImg02 from "../../../assets/images/laptop.svg";
import categoryImg03 from "../../../assets/images/watch.svg";
import categoryImg04 from "../../../assets/images/tv.svg";
import { Col, Container, Row } from "reactstrap";
import './categories.css'
const categoryData = [
  {
    display: "Smartphones",
    imgUrl: categoryImg01,
    key: 1,
  },
  {
    display: "Laptops",
    imgUrl: categoryImg02,
    key: 2,
  },
  {
    display: "Watch",
    imgUrl: categoryImg03,
    key: 3,
  },
  {
    display: "TVs",
    imgUrl: categoryImg04,
    key: 4,
  },
];

const Categories = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item) => (
          <Col className="mb-4" lg="3" md="6" sm="6" xs="6" key={item.key}>
            <div className="category_item d-flex align-items-center gap-3">
              <div className="category_img">
                <img src={item.imgUrl} alt={item.display} />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
