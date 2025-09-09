import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = () => setTheme(matchDark.matches ? 'dark' : 'light');
    updateTheme();
    matchDark.addEventListener('change', updateTheme);
    return () => matchDark.removeEventListener('change', updateTheme);
  }, []);

  return (
    <Navbar
      bg={theme}
      variant={theme}
      expand="md"
      role="navigation"
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
