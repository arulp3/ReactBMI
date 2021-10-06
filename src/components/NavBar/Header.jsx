import React from 'react'
import {Container, Navbar} from 'react-bootstrap';

function Header() {
    return (
        <div>
           <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React Project</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Container>
</Navbar>
  
        </div>
    )
}

export default Header
