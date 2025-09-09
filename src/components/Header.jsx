import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      data-bs-theme="dark"
      role="navigation"
      className="nav py-1"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container className="py-1">
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto justify-content-center py-0" as="ul">
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>Services</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/online-form" onClick={() => setExpanded(false)}>Online Form</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
