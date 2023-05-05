import React, { useEffect } from "react";
import Helmet from "./../component/Helmet/Helmet";
import CommonSection from "./../component/UI/commom-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./pagesStyle/login.css";
const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={(e) => e.preventDefault()}>
                <div className="form_group">
                  <input type="email" required placeholder="Email" />
                </div>
                <div className="form_group">
                  <input type="password" required placeholder="Password" />
                </div>
                <button className="addToCart_btn" type="submit">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
