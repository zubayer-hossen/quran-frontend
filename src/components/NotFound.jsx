// src/components/NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import './NotFound.css';  // Import the CSS file

const NotFound = () => {
  return (
    <Container className="not-found-container text-center">
      <div className="not-found-box">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="not-found-btn">
          Go Back Home
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
