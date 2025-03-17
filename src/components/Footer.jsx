

import { Container, Row, Col, Button, Card, Navbar, Nav, NavDropdown } from "react-bootstrap";

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <p>📍 আমাদের ঠিকানা: ইসলামপুর (৯২৯১), কয়রা, খুলনা</p>
          </Col>
          <Col md={6} className="text-end">
            <p>📞 যোগাযোগ: ০১৫৮০-৮৫৬৩৯৭</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p>© ২০২৫ ইশাস | সকল অধিকার সংরক্ষিত</p>
            <p className="credit">💻 Developed by <span className="zubayer">ZUBAYER HOSSEN</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};


export default Footer