import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCartTotal } from "../feature/cartSlice";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {cart , totalQuantity} = useSelector((state) => state.allcart);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <MDBNavbar light bgColor='light'>
    <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
         <Link to='/' style={{ color: "#222"}}> All Product </Link>
         </span>
        <MDBBtn color='dark'>
        <Link to="/cart" style={{ color: "white"}}>cart({totalQuantity})</Link>
      </MDBBtn>
    </MDBContainer>
  </MDBNavbar>
  )
}

export default Navbar





