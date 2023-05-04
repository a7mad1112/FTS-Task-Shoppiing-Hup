import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import Logo from "../UI/logo/Logo";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6">
            <Logo />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col lg="3" md="6" sm="6">
            <h5 className="footer_title">Delivery Time</h5>
            <ListGroup className="delivery_time_list">
              <ListGroupItem className="delivery_time_item bg-transparent border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery_time_item border-0 ps-0 bg-transparent">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="6" sm="6">
            <h5 className="footer_title">Contact</h5>
            <ListGroup className="delivery_time_list">
              <ListGroupItem className="delivery_time_item border-0 ps-0 bg-transparent">
                <p>Location: Palestine, Jenin</p>
              </ListGroupItem>
              <ListGroupItem className="delivery_time_item border-0 ps-0 bg-transparent">
                <span>Phone: +970595809023</span>
              </ListGroupItem>
              <ListGroupItem className="delivery_time_item border-0 ps-0 bg-transparent">
                <span>Email:</span>
                <span>ahmalawneh79@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="6" sm="6">
            <h5 className="footer_title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
