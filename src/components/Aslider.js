import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import q from "./img/slider img/1fc0dfd87d53748043c4963124c09e54 1.png"
import w from "./img/slider img/3b003f906b45a98e6e4ac1e0099c37b8 1.png"
import e from "./img/slider img/a192cb82f1c28a4d807ac342999e4ea4 1.png"
import r from "./img/icon/send 1.png"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {
  MDBRow,
  MDBCol,
  MDBContainer


} from 'mdb-react-ui-kit'

export default function Aslider() {
  return (
    <>

      

      <MDBContainer fluid>
      <h3 className='text-white my-5 ms-5'>POPULAR</h3>
         <MDBCol className='col-lg-12 col-sm-12'>
        <MDBRow>
          <MDBCol size={12} className='d-flex col-12 col-lg-12'>
            <MDBCol size={4} className='bslider img-fluid col-5 col-lg-4 img-3'>
              <img src={e} />
            </MDBCol>
            <MDBCol size={4} className='bslider img-fluid col-5 col-lg-4 img-3'>
              <img src={w} />
            </MDBCol>
            <MDBCol size={4} className='bslider img-fluid col-5 col-lg-4 img-3'>
              <img src={q} />
            </MDBCol>


          </MDBCol>
        </MDBRow>
        </MDBCol>
      </MDBContainer>

     
        
          
        
      <div className='stay  text-center text-white'>
      

        <h5>STAY IN THE LOOP</h5>
        <h6>Join our mailing list to stay in the loop with our
          newest feature releasesYour e-mail</h6>



        <InputGroup className="mb-3 dhk">

          <Form.Control placeholder="Your e-mail" aria-label="Your e-mail" aria-describedby="basic-addon1" className='e-mail' />
          <InputGroup.Text className='imbg'><img src={r} /></InputGroup.Text>
        </InputGroup>

       


      </div>
      
     

    </>
  )
}

