import React, { useEffect } from "react";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/commom-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Register">
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={(e) => e.preventDefault()}>
                <div className="form_group">
                  <input type="text" required placeholder="Full name" />
                </div>
                <div className="form_group">
                  <input type="email" required placeholder="Email" />
                </div>
                <div className="form_group">
                  <input type="password" required placeholder="Password" />
                </div>
                <button className="addToCart_btn" type="submit">
                  Sign Up
                </button>
              </form>
              <Link to="/login">
                Already have an account? Login
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
