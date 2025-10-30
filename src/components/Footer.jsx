import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4 mt-auto">
      <Container fluid className="px-4">
        <Row className="align-items-center text-center text-md-start">
          {/* Left Section */}
          <Col md={8} className="mb-3 mb-md-0">
            <h3 className="fw-bold fs-4">AICARE 2025</h3>
            <p className="mb-0 small">
              Artificial Intelligence for Computing, Astronomy and Renewable Energy 2025
            </p>
          </Col>

          {/* Right Section */}
          <Col md={4} className="text-md-end">
            <p className="mb-0 small">© 2025 UEM. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
