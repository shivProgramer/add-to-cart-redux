import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector , useDispatch } from "react-redux";
import { addToCart } from "../feature/cartSlice";
const Products = () => {
  const items = useSelector((state)=>state.allcart.items);
  const dispatch = useDispatch();

  return (
    <div className="mt-3">
      <MDBContainer>
        <MDBRow className="mb-3">
          {
            items.map((item,id)=>(
              <MDBCol size="4" key={id}>
              <MDBCard>
                <MDBCardImage
                  src={item.imgdata}
                  position="top"
                  alt="..."
                  style={{height:250}}
                />
                <MDBCardBody>
                  <MDBCardTitle>{item.rname}</MDBCardTitle>
                  <MDBCardText>
                  {item.price}
                  </MDBCardText>
                  <MDBBtn onClick={()=>dispatch(addToCart(item))}> add to cart </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            ))
            } 
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Products;
