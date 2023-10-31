import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <MDBNavbar light bgColor='light'>
    <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
         <Link to='/' style={{ color: "#222"}}> All Product </Link>
         </span>
        <MDBBtn color='dark'>
        <Link to="/cart" style={{ color: "white"}}>cart(0)</Link>
      </MDBBtn>
    </MDBContainer>
  </MDBNavbar>
  )
}

export default Navbar





