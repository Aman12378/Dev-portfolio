import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

function Portfolio() {
  // Hum yahan static data use kar rahe hain design dekhne ke liye
  const dummyProjects = [
    {
      id: 1,
      name: "IZZEL Unisex Salon",
      description: "A premium booking and management system for a high-end salon. Includes secure admin panel and responsive UI.",
      tech: ["Django", "React", "Cybersecurity"],
      status: "Live"
    },
    {
      id: 2,
      name: "Whazid Saloon Platform",
      description: "Fast and secure web application with appointment scheduling and customer database management.",
      tech: ["Python", "Bootstrap", "API"],
      status: "Completed"
    },
    {
      id: 3,
      name: "coresynk6 Agency Site",
      description: "B2B tech agency portfolio with enterprise-level decoupled architecture and dark-mode UI.",
      tech: ["Vite", "React Router", "Django API"],
      status: "In Progress"
    }
  ];

  return (
    <Container className="pt-5 mt-5">
      <h2 className="display-4 fw-bold text-info mb-3 text-center">My Masterpieces</h2>
      <p className="text-secondary text-center mb-5 lead">
        A showcase of high-performance, secure web applications.
      </p>

      <Row>
        {dummyProjects.map((project) => (
          <Col md={6} lg={4} className="mb-4" key={project.id}>
            <Card className="bg-dark text-light border-secondary h-100 shadow-lg" style={{ borderRadius: '15px', transition: 'transform 0.3s' }}>
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Badge bg={project.status === 'Live' ? 'success' : 'info'} className="text-dark px-3 py-2 rounded-pill">
                    {project.status}
                  </Badge>
                  <i className="bi bi-github fs-4 text-secondary" style={{ cursor: 'pointer' }}></i>
                </div>
                
                <Card.Title className="fw-bold fs-3 text-white mb-3">{project.name}</Card.Title>
                <Card.Text className="text-secondary" style={{ fontSize: '1rem', minHeight: '80px' }}>
                  {project.description}
                </Card.Text>

                <div className="mt-4">
                  {project.tech.map((skill, index) => (
                    <Badge bg="secondary" className="me-2 mb-2 px-2 py-1" key={index}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
              <Card.Footer className="border-secondary bg-transparent p-3 text-center">
                <Button variant="outline-info" className="w-100 rounded-pill fw-bold">View Project</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;