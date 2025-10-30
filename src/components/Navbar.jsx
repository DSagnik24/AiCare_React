import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function NavPills() {
  const [activeKey, setActiveKey] = useState('home')

  return (
    <Navbar
      expand="md"
      bg="primary"
      data-bs-theme="dark"
      className="rounded-4 shadow-sm my-2"
    >
      <Container fluid>
        {/* Navbar Brand */}
        <Navbar.Brand href="#" className="fw-bold text-white">
          AiCare
        </Navbar.Brand>

        {/* Toggle Button for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            variant="pills"
            activeKey={activeKey}
            onSelect={(selectedKey) => setActiveKey(selectedKey)}
            className="ms-auto gap-2 small rounded-4"
            style={{
              '--bs-nav-link-color': 'var(--bs-white)',
              '--bs-nav-pills-link-active-color': 'var(--bs-primary)',
              '--bs-nav-pills-link-active-bg': 'var(--bs-white)',
            }}
          >
            <Nav.Link eventKey="home" className="rounded-5 text-center">
              Home
            </Nav.Link>
            <Nav.Link eventKey="about" className="rounded-5 text-center">
              About Us
            </Nav.Link>
            <Nav.Link eventKey="papers" className="rounded-5 text-center">
              Call for Papers
            </Nav.Link>
            <Nav.Link eventKey="dates" className="rounded-5 text-center">
              Key Dates
            </Nav.Link>
            <Nav.Link eventKey="committee" className="rounded-5 text-center">
              Committees
            </Nav.Link>
            <Nav.Link eventKey="registration" className="rounded-5 text-center">
              Registration
            </Nav.Link>
            <Nav.Link eventKey="speakers" className="rounded-5 text-center">
              Keynote Speakers
            </Nav.Link>
            <Nav.Link eventKey="contact" className="rounded-5 text-center">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
