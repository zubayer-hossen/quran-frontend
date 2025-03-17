import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Features.css";

const Features = () => {
  return (
    <Container id="features" className="features-section">
      <h2 className="section-title">🌟 আমাদের প্রতিযোগিতার বিশেষ বৈশিষ্ট্য 🌟</h2>
      <Row className="justify-content-center">
        <Col md={4} sm={12} className="mb-4">
          <Card className="feature-card glass-effect">
            <Card.Body>
              <div className="icon neon-glow">📖</div>
              <h4>কোরআন প্রতিযোগিতা</h4>
              <p>২৯ রমজান, যোহরের পর মসজিদে অনুষ্ঠিত হবে।</p>
              <Button variant="primary" className="feature-btn">বিস্তারিত জানুন</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <Card className="feature-card glass-effect">
            <Card.Body>
              <div className="icon neon-glow">🏆</div>
              <h4>বিশেষ পুরস্কার</h4>
              <p>প্রথম, দ্বিতীয়, তৃতীয় স্থান অর্জনকারীদের জন্য আকর্ষণীয় পুরস্কার!</p>
              <Button variant="success" className="feature-btn">পুরস্কার দেখুন</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <Card className="feature-card glass-effect">
            <Card.Body>
              <div className="icon neon-glow">🎯</div>
              <h4>কুইজ প্রতিযোগিতা</h4>
              <p>প্রতিযোগিতার পর একটি কুইজ প্রতিযোগিতার আয়োজন থাকবে।</p>
              <Button variant="warning" className="feature-btn">কুইজ সম্পর্কে জানুন</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
