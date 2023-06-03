import React from 'react'
import logo from "./img/logo-removebg-preview.png"
import b from "./img/slider img/3b003f906b45a98e6e4ac1e0099c37b8 1.png"
import{
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBadge, 
    MDBBtn, 
    MDBTable,
    MDBTableBody,
    MDBRow,
    MDBCol

} from 'mdb-react-ui-kit';
export default function Navbar()

  {

    return (

        <>

        <MDBRow>
        
        <div className='container-fluid navbar'>
        <MDBCol className='col-12 col-lg-6'>
         <MDBNavbar>
            <MDBContainer fluid>
                <MDBNavbarBrand className='text-white'>
                    <img src={logo} alt="alt" className='img-fluid logoimg' />
                    
                    PRO stoke-market
                </MDBNavbarBrand>
            </MDBContainer>
         </MDBNavbar>
         </MDBCol>
        
        
      <MDBCol className='col-12 col-lg-6'>
      <MDBTable> 
      <MDBTableBody className='text-white'>
        <tr>
          <td>
            <div className='d-flex align-items-center text-white'>
              <img
                src={b}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              
              <div className='ms-1'>
                <p className='fw-bold mb-1 text-white'>Voxie Tactics Items</p>
                <p className='text-white mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-3 ms-1'>Total</p>
            <p className='text-muted mb-0 ms-1'>$2,000,000+</p>
          </td>
         
        </tr>
        </MDBTableBody>
        </MDBTable>
        </MDBCol>
        </div>
         </MDBRow>
        </>
    )
}










