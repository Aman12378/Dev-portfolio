import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // 1. Yeh import hona chahiye
import profileImage from '../assets/aman.jpg'; 

function Home() {
  const navigate = useNavigate(); // 2. Yeh line navigate ko active karti hai

  // 3. Yeh functions icon clicks ko handle karte hain
  const openGitHub = () => window.open('https://github.com', '_blank');
  const openLinkedIn = () => window.open('https://linkedin.com', '_blank');
  const openInstagram = () => window.open('https://instagram.com', '_blank');

  return (
    <Container className="pt-5 mt-5">
      <Row className="align-items-center">
        <Col lg={7}>
          <h1 className="display-4 fw-bold mb-3">
            Hello, I'm <span className="text-info">Aman</span>
          </h1>
          <h2 className="h4 text-secondary mb-4">
            Full-Stack Developer 
          </h2>
          <p className="lead mb-5" style={{ color: '#adb5bd' }}>
            I architect and build fast, highly secure web applications. Specializing in Python, Django, React.js, and PostgreSQL. Let's create something amazing together.
          </p>
          
          <Button onClick={() => navigate('/portfolio')} variant="info" size="lg" className="me-3 rounded-pill px-4 fw-bold shadow">
            View My Work
          </Button>
          <Button onClick={() => navigate('/contact')} variant="outline-info" size="lg" className="rounded-pill px-4 fw-bold shadow">
            Get In Touch
          </Button>
          
          <div className="mt-5 fs-4">
            <i onClick={openGitHub} className="bi bi-github me-4 text-light" style={{ cursor: 'pointer' }}></i>
            <i onClick={openLinkedIn} className="bi bi-linkedin me-4 text-light" style={{ cursor: 'pointer' }}></i>
            <i onClick={openInstagram} className="bi bi-instagram text-light" style={{ cursor: 'pointer' }}></i>
          </div>
        </Col>
        
        <Col lg={5} className="text-center mt-5 mt-lg-0">
          <img 
            src={profileImage} 
            alt="Developer Aman" 
            className="img-fluid rounded-4 shadow-lg" 
            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;