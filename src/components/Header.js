import React from 'react'
import bg from "./img/bg img.png"
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Header() {

    return (

        <>
            <div className='my-5'>
                <MDBContainer fluid>
                    <MDBCol className='col-lg-12 col-sm-12'>
                    <MDBRow className='md-2 head'>
                        <MDBCol size='6' className='col-12  col-lg-6'>
                            <h4>BEST NFT ASSETS</h4>
                            <h2>WELCOME TO META WORLD</h2>
                            <MDBBtn rounded className='mx-2 my-5 bt' color='light'>Explore</MDBBtn>
                    <MDBBtn rounded className='mx-2 my-5 bt' color='dark'>Sell</MDBBtn>

                        </MDBCol>


                        <MDBCol size='6' className='col-12 col-lg-6'>
                            <img src={bg} alt="alt" className='img-fluid' />
                        </MDBCol>

                   
                    </MDBRow>
                    </MDBCol>
                    



                </MDBContainer>
            </div>
        </>
    )
}