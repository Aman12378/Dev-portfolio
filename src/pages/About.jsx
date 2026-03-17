import React from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // 1. Yeh import hona chahiye
import profileImg from '../assets/aman.jpg'; 

function About() {
  const navigate = useNavigate();
  const currentTech = ["React.js", "Django REST Framework", "Python", "PostgreSQL"];
  const learningTech = ["Cloud Deployment", "Advanced System Design"];

  return (
    <Container className="pt-5 mt-5 text-white">
      <Row className="align-items-center gx-5">
        {/* Left Side: Professional Image */}
        <Col lg={5} className="mb-5 position-relative">
          <div className="profile-container p-2 border border-secondary rounded-4 shadow-lg">
             <img 
              src={profileImg} 
              alt="Aman Chauhan" 
              className="img-fluid rounded-4 shadow-lg" 
              style={{ width: '100%', minHeight: '450px', objectFit: 'cover' }}
            />
          </div>
        </Col>

        {/* Right Side: Content */}
        <Col lg={7}>
          <Badge bg="primary" className="mb-3 px-3 py-2 text-uppercase letter-spacing-1">About Me</Badge>
          <h1 className="display-4 fw-bold mb-4">
            Available for <span className="text-info">Full-Stack</span> Web Projects
          </h1>
          
          <p className="text-secondary fs-5 mb-4">
            Hello, I am <span className="text-white">Aman Chauhan</span>. I specialize in building end-to-end web applications. I bridge the gap between complex backend logic in <span className="text-white">Python/Django</span> and intuitive frontend design with <span className="text-white">React.js</span>. 
          </p>

          {/* Proficiency Boxes */}
          <Row className="mb-5">
            <Col md={4} className="mb-3">
              <div className="p-3 bg-dark border border-secondary rounded-4 h-100 shadow-sm text-center">
                <h3 className="text-info fw-bold mb-0">90%</h3>
                <small className="text-secondary text-uppercase" style={{fontSize: '10px'}}>Django/Python</small>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className="p-3 bg-dark border border-secondary rounded-4 h-100 shadow-sm text-center">
                <h3 className="text-info fw-bold mb-0">85%</h3>
                <small className="text-secondary text-uppercase" style={{fontSize: '10px'}}>React Framework</small>
              </div>
            </Col>
            {/* <Col md={4} className="mb-3">
              <div className="p-3 bg-dark border border-secondary rounded-4 h-100 shadow-sm text-center">
                <h3 className="text-info fw-bold mb-0">75%</h3>
                <small className="text-secondary text-uppercase" style={{fontSize: '10px'}}>Database (SQL)</small>
              </div>
            </Col> */}
          </Row>

          <div className="mb-5">
             <h5 className="mb-3 text-white">Tech Stack:</h5>
             <div className="d-flex flex-wrap gap-2">
               {currentTech.map((tech, i) => (
                 <Badge key={i} pill bg="info" className="text-dark px-3 py-2 fw-bold">{tech}</Badge>
               ))}
               {learningTech.map((tech, i) => (
                 <Badge key={i} pill bg="outline-secondary" className="border border-secondary text-secondary px-3 py-2">{tech}</Badge>
               ))}
             </div>
          </div>

          <Button onClick={() => navigate('/contact')} variant="outline-info" size="lg" className="rounded-pill px-4 fw-bold shadow">
                     Get In Touch
                   </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;