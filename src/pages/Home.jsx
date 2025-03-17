import React from "react";
import { Container, Row, Col, Button, Card, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { useNavigate } from "react-router-dom";  // Import useNavigate


// Hero Section
const Hero = () => {
   const navigate = useNavigate();  
  return (
    <section className="hero">
      <div className="overlay">
        <h1 className="hero-title">পবিত্র কোরআন প্রতিযোগিতা ২০২৫</h1>
        <p className="hero-text">রমজানের পবিত্রতা রক্ষায় আমাদের এই উদ্যোগে অংশ নিন ও পুরস্কার জিতুন!</p>
        <Button variant="light" className="hero-btn" onClick={() => {
            navigate("/registration");  // Use navigate to go to the registration page
          }} >রেজিস্ট্রেশন করুন</Button>
      </div>
    </section>
  );
};


// Call to Action Section
const RegisterCTA = () => {
  const navigate = useNavigate();  // Initialize navigate function

  return (
    <section id="register" className="register-section">
      <Container className="text-center">
        <h2>💠 রেজিস্ট্রেশন করুন এখনই!</h2>
        <p>২৭ রমজানের মধ্যে রেজিস্ট্রেশন সম্পন্ন করতে হবে।</p>
        <Button
          variant="warning"
          className="cta-btn"
          onClick={() => {
            navigate("/registration");  // Use navigate to go to the registration page
          }}
        >
          রেজিস্ট্রেশন করুন
        </Button>
      </Container>
    </section>
  );
};


// Main Home Component
const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Hero />
      <Features />
      <RegisterCTA />
      <Footer />
    </div>
  );
};

export default Home;
