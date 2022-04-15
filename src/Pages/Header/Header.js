import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo2.png'

const Header = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg"  >
        <Container>
  <Navbar.Brand href="#">
 
      <Nav>
      <img className=' w-25 p-3 ' src={logo}></img>
      </Nav>
     
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto"></Nav>
    <Nav>
    <Nav.Link href="#pricing" className='mask flex-center rgba-red-strong' >Login</Nav.Link>
    <Nav.Link href="#deets" className='text-white bg-danger bg-gradient rounded-pill '>Signup</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header;