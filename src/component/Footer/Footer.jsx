import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import Logo from '../../pages/component/logo/Logo';
import './footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" sm="6">
            <Logo />
            <p>
              هناك العديد من البدائل التي يمكن استخدامها في العربية للنص الوهمي
              مثل "النص العربي المؤقت" أو "النص البديل المؤقت".
            </p>
          </Col>
          <Col lg="4" md="6" sm="6">
            <h5 className="footer_title">وقت التوصيل</h5>
            <ListGroup className="delivery_time_list">
              <ListGroupItem className="delivery_time_item bg-transparent border-0 ps-0">
                <span>الأحد - الخميس</span>
                <p>10:00 صباحًا - 11:00 مساءً</p>
              </ListGroupItem>
              <ListGroupItem className="delivery_time_item border-0 ps-0 bg-transparent">
                <span>الجمعة - السبت</span>
                <p>يوم العطلة</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="4" md="6" sm="6">
            <h5 className="footer_title">التواصل</h5>
            <ListGroup className="delivery_time_list">
              <ListGroupItem className="delivery_time_item border-0 ps-0 bg-transparent">
                <p>الموقع: فلسطين، جنين</p>
              </ListGroupItem>
              <ListGroupItem className="delivery_time_item border-0 ps-0 bg-transparent">
                <span>الهاتف: +970595809023</span>
              </ListGroupItem>
              <ListGroupItem className="delivery_time_item border-0 ps-0 bg-transparent">
                <span>البريد الإلكتروني:</span>
                <span>ahmalawneh79@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
