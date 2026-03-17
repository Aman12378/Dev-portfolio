import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-dark text-light min-vh-100">
        
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3 px-4 fixed-top border-bottom border-secondary">
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-info">Dev.Aman</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-light">About</Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-light">Services</Nav.Link>
              <Nav.Link as={Link} to="/portfolio" className="text-light">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-light">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div style={{ paddingTop: '100px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;