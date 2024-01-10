/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" /> {/* Left side empty to balance the center */}
          <Link passHref href="/">
            <Navbar.Brand className="mx-auto">Got Jokes!</Navbar.Brand>
          </Link>
          <Nav className="ms-auto" />{/* Right side empty to balance the center */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
