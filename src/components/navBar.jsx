import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
function NavBar () {
    return ( 
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </Nav>
        </Container>
      </Navbar>
     );
}

export default NavBar;