import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar , Button , Form , FormControl , Nav , NavDropdown } from 'react-bootstrap';
import brands from '../pictures/brands.png';

class Navbars extends React.Component {
    render() {
        return <div>
            <Navbar bg="light" variant="light" expand="lg" className='navbar fixed-top'>
            <div className="container-fluid">
            <img
              alt=""
              src={brands}
              width="30"
              height="40"
              className="d-inline-block align-top"
            />
            <Navbar.Brand className="navbar-brand" href="#home">Saham Budaya</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="nav-link" href="#home">Homepage</Nav.Link>
                <Nav.Link className="nav-link" href="#link">Kursus</Nav.Link>
                <Nav.Link className="nav-link" href="#tentang">Tentang Kami</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
    }
}

export default Navbars;