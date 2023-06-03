import React from 'react'
import k from "./img/logo-removebg-preview.png"
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit'

export default function Footer() {
    return (
        <>
            <MDBContainer>
                <div className='imgsection text-white'>
                    <img src={k} className='ebg' />
                    <h6>PRO stoke-market</h6>
                </div>


                 <MDBCol className='col-lg-12 col-sm-12'>                
                    
                    <MDBRow>

                    <MDBCol size={6} className='text-white my-5 col-12 col-lg-6'>

                        <MDBCol size={6} className='col-12 col-lg-6'>
                            <p>The world's first and largest digital marketplace for
                                crypto collectibles and non-fungible tokens (NFTs).
                                Buy. sell, and discover exclusive digital items.</p>

                            <i class="bi bi-telegram"></i>&nbsp;
                            <i class="bi bi-twitter"></i>&nbsp;
                            <i class="bi bi-whatsapp"></i>&nbsp;
                            <i class="bi bi-instagram"></i>
                        </MDBCol>

                    </MDBCol>

                    <MDBCol size={12} className='text-white d-flex col-12 col-lg-6 pas'>

                        <MDBCol size={4} className='col-2 col-lg-3'>

                            <h5 className='font'>MARKETPLACE</h5>
                            <hr className='border border-right'></hr>
                            <h6>Explore</h6>
                            <h6> Blog</h6>
                            <h6>How it works</h6>
                            <h6>Help center</h6>
                            <h6> Partners</h6>
                            <h6>  Docs</h6>



                        </MDBCol>

                        <MDBCol size={4} className='col-2 col-lg-3'>

                            <h5 className='font'>MY ACCOUNT</h5>
                            <hr className=''></hr>
                            <h6>Profile</h6>
                            <h6> Favorites</h6>
                            <h6>Watchlist</h6>
                            <h6>My Collections</h6>
                            <h6>Create</h6>
                            <h6>Settings</h6>



                        </MDBCol>

                        

                        <MDBCol size={4} className='col-2 col-lg-3'>

                            <h5 className='font'>COMPANY</h5>
                            <hr className='border'></hr>
                            <h6>About</h6>
                            <h6>Careers</h6>
                            <h6>Ventures</h6>
                            <h6>Ventures</h6>




                        </MDBCol>

                    </MDBCol>




                </MDBRow>
                </MDBCol>

                
               

                <MDBRow>
                    <MDBCol size={6} className='my-5'>

                        <MDBCol size={6}>
                        <hr className='text-white'></hr>
                        <h6>@2023-2025 Market, Inc</h6>

                        </MDBCol>
                    </MDBCol>   


                     <MDBCol size={6} className='my-5'>

                        <MDBCol size={6}>
                        <hr className='text-white'></hr>
                        <h6>Privacy Policy&nbsp; &nbsp;Terms of Service</h6>

                        </MDBCol>
                    </MDBCol> 
                </MDBRow>

            </MDBContainer>




        </>
    )
}

