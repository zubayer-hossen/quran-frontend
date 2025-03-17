import React from "react";
import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <Container className="mt-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationForm />} />
        
      </Routes>
     
    </Container>
  );
}

export default App;
