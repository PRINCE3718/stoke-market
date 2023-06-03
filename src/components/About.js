import React from 'react'
import security from"./img/icon/security 1.png"
import encrypted from"./img/icon/encrypted 1.png"
import nft from"./img/icon/nft 1.png"
import speed from"./img/icon/speed 1.png"

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function About() {
  return (
    <>
      <div>
        <MDBContainer fluid>
          <MDBCol className='col-lg-12 col-sm-12'>
            <MDBRow className='my-6'>
                <MDBCol size='1' className='cardbodye col-lg-1 col-4'>
                    <MDBCard className='card my-2'>
                        <MDBCardImage src={security} className='img img-fluid'></MDBCardImage>
                       <MDBCardTitle>Reliable</MDBCardTitle>
                    </MDBCard>
                    <MDBCard className='card-1'>
                        <MDBCardImage src={encrypted} className='img img-fluid'></MDBCardImage>
                       <MDBCardTitle>Reliable</MDBCardTitle>
                  </MDBCard>


                </MDBCol>

                <MDBCol size='2' className='cardbodye-1 col-lg-3 col-6'>
                    <MDBCard className='card-2 my-2'>
                        <MDBCardImage src={nft} className='img img-fluid'></MDBCardImage>
                       <MDBCardTitle>Reliable</MDBCardTitle>
                    </MDBCard>
                    <MDBCard className='card-3'>
                        <MDBCardImage src={speed} className='img img-fluid'></MDBCardImage>
                       <MDBCardTitle>Reliable</MDBCardTitle>
                    </MDBCard>


                </MDBCol>

                <MDBCol size='6' className='my-5 py-4 text-white col-lg-6 col-12'>
                  
                  <h5 className='my-5 py-4 text-white'>BEAUTIFUL NFTS FOR EVERYONE</h5>
                  <h6>NFT Market is a multi-chain marketplace that aggregates every
                     NFT into a single platform.</h6>

                </MDBCol>


            </MDBRow>
            </MDBCol>
        </MDBContainer>
      </div>
    
    </>
  )
}
