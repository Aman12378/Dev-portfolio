import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();
  const services = [
    {
      title: "Full Website Development",
      description: "Complete end-to-end website solutions using React and Django. Built for speed, SEO, and professional branding.",
      icon: "bi-globe",
      benefit: "Establish a powerful online presence."
    },
    {
      title: "Custom Web Applications",
      description: "Complex business logic translated into smooth web apps. Perfect for management systems or data-heavy platforms.",
      icon: "bi-cpu",
      benefit: "Automate your business workflows."
    },
    {
      title: "UI/UX Optimization",
      description: "Redesigning existing interfaces to be more intuitive. We focus on conversion rate optimization (CRO).",
      icon: "bi-palette",
      benefit: "Turn visitors into paying customers."
    },
    {
      title: "Sales-Driven Architecture",
      description: "Websites designed specifically to increase your sales through better user experience and fast performance.",
      icon: "bi-graph-up-arrow",
      benefit: "Maximize your ROI and revenue."
    }
  ];

  const cardStyle = {
    backgroundColor: '#0f3460',
    border: '1px solid #1f4068',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    borderRadius: '20px',
    cursor: 'default'
  };

  return (
    <Container className="pt-5 mt-5 text-white">
      <div className="text-center mb-5">
        <h6 className="text-info text-uppercase fw-bold letter-spacing-2">What I Offer</h6>
        <h1 className="display-4 fw-bold">Solutions to Grow Your Business</h1>
        <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
          I help brands thrive in the digital age by building high-performance web applications focused on user experience and sales growth.
        </p>
      </div>

      <Row className="g-4">
        {services.map((service, index) => (
          <Col md={6} lg={3} key={index}>
            <Card 
              className="h-100 p-3 shadow-lg" 
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = '#007bff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#0000';
              }}
            >
              <Card.Body>
                <div className="mb-4 d-inline-block p-3 rounded-3" style={{ backgroundColor: '#16213e' }}>
                  <i className={`bi ${service.icon} text-info fs-2`}></i>
                </div>
                <Card.Title className="fw-bold mb-3" style={{color: '#fff'}}>{service.title}</Card.Title>
                <Card.Text className="text-secondary small mb-4">
                  {service.description}
                </Card.Text>
                <div className="pt-3 border-top border-secondary">
                  <small className="text-info fw-bold italic">
                    <i className="bi bi-check2-circle me-2"></i>{service.benefit}
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mt-5 p-5 rounded-4 text-center shadow-lg" style={{ background: 'linear-gradient(45deg, #0f3460, #16213e)' }}>
        <h2 className="fw-bold mb-3">Ready to increase your digital sales?</h2>
        <p className="text-secondary mb-4">Let's build a platform that doesn't just look good, but works for your bottom line.</p>
        <button className="btn btn-info rounded-pill px-5 py-3 fw-bold text-dark" onClick={()=> navigate('/contact')}>
          START A PROJECT
        </button>
      </div>
    </Container>
  );
}

export default Services;