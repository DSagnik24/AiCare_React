import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './committee/Registration' 
import Speaker from './committee/Speaker'
import ContactUs from './committee/ContactUs'

export default function NavPills() {
  const [activeKey, setActiveKey] = useState('home')

  return (
    <>
      <Navbar
        expand="md"
        bg="primary"
        data-bs-theme="dark"
        className="rounded-4 shadow-sm my-2 sticky-top"
      >
        <Container fluid>
          {/* Brand */}
          <Navbar.Brand href="#" className="fw-bold text-white">
            AiCare
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {/* Collapsible Nav */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              variant="pills"
              activeKey={activeKey}
              onSelect={(key) => setActiveKey(key)}
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

      {/* Render selected section below the navbar */}
      <div className="container my-4">
        {activeKey === 'home' && <h1 className="text-center">Welcome to AiCare 2025</h1>}
        {activeKey === 'about' && <h1 className="text-center">About Us Section</h1>}
        {activeKey === 'papers' && <h1 className="text-center">Call for Papers</h1>}
        {activeKey === 'dates' && <h1 className="text-center">Key Dates</h1>}
        {activeKey === 'committee' && <h1 className="text-center">Committees Section</h1>}
        {activeKey === 'registration' && <Registration />} {/* ✅ imported directly */}
        {activeKey === 'speakers' && <Speaker />}
        {activeKey === 'contact' && <ContactUs />}
      </div>
    </>
  )
}
