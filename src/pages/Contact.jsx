import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import profileImg from '../assets/aman.jpg'; // Using your existing profile image

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', gender: 'Male'
  });
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', msg: 'Connecting to coresynk6 database...' });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/save-contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', msg: 'Details sent to Aman successfully!' });
        setFormData({ name: '', email: '', phone: '', address: '', gender: 'Male' });
      } else {
        setStatus({ type: 'danger', msg: 'Server error. Please check backend.' });
      }
    } catch (error) {
      setStatus({ type: 'danger', msg: 'Connection Failed: Is Django running?' });
    }
  };

  const inputStyle = {
    backgroundColor: '#16213e',
    border: '1px solid #1f4068',
    color: '#fff',
    padding: '12px',
    borderRadius: '8px'
  };

  const openSocial = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Container className="pt-5 mt-5 text-white">
      <Row className="gx-5">
        {/* Left Side: Profile & Direct Contact */}
        <Col lg={5} className="mb-5">
          <div className="p-4 rounded-4" style={{ backgroundColor: '#0f3460' }}>
            <img 
              src={profileImg} 
              alt="Aman Chauhan" 
              className="img-fluid rounded-4 mb-4 shadow-lg" 
              style={{ width: '100%', height: '350px', objectFit: 'cover' }}
            />
            <h3 className="fw-bold mb-3">Let's Discuss Your Project</h3>
            <p className="text-secondary mb-4">
              Always available for freelancing if the right project comes along. Feel free to contact me.
            </p>
            
            <div className="mb-3">
              <small className="text-info d-block fw-bold text-uppercase">Write an email</small>
              <h5 className="fw-normal">amanchauhanem@google.com</h5>
            </div>
            
            <div className="mb-4">
              <small className="text-info d-block fw-bold text-uppercase">Call me</small>
              <h5 className="fw-normal">+91 9310499060</h5>
            </div>

            <div className="d-flex gap-3">
              <Button
                variant="primary"
                className="rounded-circle p-2"
                style={{ width: '40px' }}
                onClick={() => openSocial('https://www.facebook.com/yourprofile')}
              >
                <i className="bi bi-facebook"></i>
              </Button>
              <Button
                variant="danger"
                className="rounded-circle p-2"
                style={{ width: '40px' }}
                onClick={() => openSocial('https://www.instagram.com/yourprofile')}
              >
                <i className="bi bi-instagram"></i>
              </Button>
              <Button
                variant="info"
                className="rounded-circle p-2"
                style={{ width: '40px' }}
                onClick={() => openSocial('https://www.linkedin.com/in/yourprofile')}
              >
                <i className="bi bi-linkedin text-white"></i>
              </Button>
            </div>
          </div>
        </Col>

        {/* Right Side: Form */}
        <Col lg={7}>
          {status.msg && <Alert variant={status.type} className="mb-4 shadow-sm">{status.msg}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="small text-secondary fw-bold">YOUR NAME</Form.Label>
                  <Form.Control 
                    type="text" placeholder="Name *" style={inputStyle} required
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="small text-secondary fw-bold">YOUR EMAIL</Form.Label>
                  <Form.Control 
                    type="email" placeholder="Email *" style={inputStyle} required
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label className="small text-secondary fw-bold">CONTACT NUMBER</Form.Label>
              <Form.Control 
                type="text" placeholder="Phone *" style={inputStyle} required
                value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small text-secondary fw-bold">ADDRESS / SUBJECT</Form.Label>
              <Form.Control 
                as="textarea" rows={2} placeholder="Where are you located? *" style={inputStyle}
                value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} 
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="small text-secondary fw-bold d-block">GENDER</Form.Label>
              <div className="d-flex gap-4 mt-2">
                <Form.Check inline type="radio" label="Male" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={(e) => setFormData({...formData, gender: e.target.value})} />
                <Form.Check inline type="radio" label="Female" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={(e) => setFormData({...formData, gender: e.target.value})} />
              </div>
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100 py-3 fw-bold rounded-pill shadow-lg mt-2" 
              style={{ backgroundColor: '#007bff', border: 'none' }}
            >
              SEND MESSAGE
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;