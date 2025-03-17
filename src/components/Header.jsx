import { Container, Row, Col, Button, Card, Navbar, Nav, NavDropdown } from "react-bootstrap";

// Navbar Component
const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand className="logo">ইশাস</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav-link">হোম</Nav.Link>
            <Nav.Link href="#features" className="nav-link">প্রতিযোগিতা</Nav.Link>
            <Nav.Link href="#register" className="nav-link">রেজিস্ট্রেশন</Nav.Link>
            <NavDropdown title="আরো" id="basic-nav-dropdown" className="nav-link">
              <NavDropdown.Item href="#quiz">কুইজ</NavDropdown.Item>
              <NavDropdown.Item href="#prizes">পুরস্কার</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contact">যোগাযোগ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header