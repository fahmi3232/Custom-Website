import React from "react";
import {
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet, Link } from 'react-router-dom'

const NavbarComp = () => {
  return (
    <div>
      <Container>
        <Navbar bg="primary" fixed="top" expand="lg" style={{borderRadius: 15, padding: 10}}>
          <Container>
            <Navbar.Brand href="#" style={{fontSize: 30, marginBottom: 5}}>RestoKu</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav >
                <Link style={{textDecoration: "none", marginLeft: 20, fontSize: 18}} to="/">Home</Link>
                <Link style={{textDecoration: "none", marginLeft: 20, fontSize: 18}} to="/service">Service</Link>
                <Link style={{textDecoration: "none", marginLeft: 20, fontSize: 18}} to="/about">About</Link>
                <Link style={{textDecoration: "none", marginLeft: 20, fontSize: 18}} to="/contact">Contact</Link>
              </Nav>  
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Outlet />
    </div>
  );
};

export default NavbarComp;
