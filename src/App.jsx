import React from "react";
import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Container className="mt-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
     
    </Container>
  );
}

export default App;
