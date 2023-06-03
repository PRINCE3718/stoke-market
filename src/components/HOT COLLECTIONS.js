import React from 'react'
import a from "./img/nva/Rectangle 46.png"
import s from "./img/nva/Rectangle 47.png"
import d from "./img/nva/Rectangle 49.png"
import f from "./img/nva/Rectangle 50.png"
import g from "./img/nva/Rectangle 51 (1).png"
import h from "./img/nva/Rectangle 46.png"
import {
    MDBContainer,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

export default function HOT() {
    return (
        <>

            <div>
                <MDBContainer fluid>

                    <MDBCol className='col-lg-12 col-sm-12'>

                    <MDBRow >


                    <MDBCol size='6' className='text-white d-flex my-2 col-12 col-lg-6' >
                        <h3>HOT COLLECTIONS</h3>
                    </MDBCol>

                    <MDBCol size='6' className='text-white d-flex my-2 col-12 col-lg-6'>
                        <h6>Price</h6>
                        <MDBCol size='12' className='d-flex justify-content-evenly col-12 col-lg-12'>
                        <MDBBtn rounded color='light'className='aslide'>Min</MDBBtn>
                        <MDBBtn rounded color='light'className='aslide'>Max</MDBBtn>
                        <MDBBtn rounded color='light'className='aslide'>Day</MDBBtn>
                        <MDBBtn rounded color='light'className='aslide'>View All</MDBBtn>
                        </MDBCol>
                    </MDBCol>

                        <MDBCol  className='text-white d-flex p-2  bg-info bg-opacity-10 border border-info border-start-0 rounded-end col-12 col-lg-6'>
                            <MDBCol  className='d-flex col-6 col-lg-4'>
                                <h4 className='m-auto'>01</h4>
                                <MDBCardImage src={a} className='img-fluid m-auto hotimg'></MDBCardImage>
                            </MDBCol>
                            <MDBCol size='4' className='col-6 col-lg-4'>
                                <p className='text-center'>Voxie Tactics Items</p>
                                <div className='d-flex'>
                                    <h6>Start</h6>  <h6 className='ms-5'>$98</h6>
                                </div>

                                <div className='d-flex'>
                                    <p>Volume</p>  <p className='ms-5'>$16</p>
                                </div>

                                <div>
                                <MDBBtn rounded color='light' className='d-lg-none d-sm-block'>98.25%</MDBBtn>
                                </div>

                            </MDBCol>
                            <MDBCol size='4' className='text-center mt-4 btn-1 col-6 col-lg-4'>
                                <MDBBtn rounded color='light' className='d-lg-block d-sm-none'>98.25%</MDBBtn>
                            </MDBCol>
                        </MDBCol>


                        <MDBCol size='6' className='text-white d-flex p-2  bg-info bg-opacity-10 border border-info border-start-0 rounded-end col-12 col-lg-6'>
                            <MDBCol size='4' className='d-flex col-6 col-lg-4'>
                                <h4 className='m-auto'>02</h4>
                                <MDBCardImage src={s} className='img-fluid m-auto hotimg'></MDBCardImage>
                            </MDBCol>
                            <MDBCol size='4' className='col-6 col-lg-4'>
                                <p className='text-center'>Carkayous-Feral Fish</p>
                                <div className='d-flex'>
                                    <h6>Start</h6>  <h6 className='ms-5'>$999</h6>
                                </div>

                                <div className='d-flex'>
                                    <p>Volume</p>  <p className='ms-5'>$111</p>
                                </div>

                                <div>
                                <MDBBtn rounded color='light' className='dtg d-lg-none d-sm-block'>25.90%</MDBBtn>
                                </div>

                            </MDBCol>
                            <MDBCol size='4' className='text-center mt-4 col-6 col-lg-4'>
                                <MDBBtn rounded color='light' className='d-lg-block d-sm-none'>25.90%</MDBBtn>
                            </MDBCol>
                        </MDBCol>


                        <MDBCol size='6' className='text-white d-flex  p-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end col-12 col-lg-6'>
                            <MDBCol size='4' className='d-flex col-6 col-lg-4'>
                                <h4 className='m-auto'>03</h4>
                                <MDBCardImage src={d} className='img-fluid m-auto hotimg'></MDBCardImage>
                            </MDBCol>
                            <MDBCol size='4' className='col-6 col-lg-4'>
                                <p className='text-center'>Rare Apepe YC</p>
                                <div className='d-flex'>
                                    <h6>Start</h6>  <h6 className='ms-5'>$88</h6>
                                </div>

                                <div className='d-flex'>
                                    <p>Volume</p>  <p className='ms-5'>$11</p>
                                </div>

                                <div>
                                <MDBBtn rounded color='light' className='dtg d-lg-none d-sm-block'>52.01%</MDBBtn>
                                </div>

                            </MDBCol>
                            <MDBCol size='4' className='text-center mt-4 col-6 col-lg-4'>
                                <MDBBtn rounded color='light' className='d-lg-block d-sm-none'>52.01%</MDBBtn>
                            </MDBCol>
                        </MDBCol>

                        <MDBCol size='6' className='text-white d-flex  p-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end col-12 col-lg-6'>
                            <MDBCol size='4' className='d-flex col-6 col-lg-4'>
                                <h4 className='m-auto'>04</h4>
                                <MDBCardImage src={f} className='img-fluid m-auto hotimg'></MDBCardImage>
                            </MDBCol>
                            <MDBCol size='4' className='col-6 col-lg-4'>
                                <p className='text-center'>Voxie Tactics Items</p>
                                <div className='d-flex'>
                                    <h6>Start</h6>  <h6 className='ms-5'>$100</h6>
                                </div>

                                <div className='d-flex'>
                                    <p>Volume</p>  <p className='ms-5'>$30</p>
                                </div>

                                <div>
                                <MDBBtn rounded color='light' className='dtg d-lg-none d-sm-block'>58.25%</MDBBtn>
                                </div>

                            </MDBCol>
                            <MDBCol size='4' className='text-center mt-4 col-6 col-lg-4'>
                                <MDBBtn rounded color='light' className='d-lg-block d-sm-none'>58.25%</MDBBtn>
                            </MDBCol>
                        </MDBCol>

                        <MDBCol size='6' className='text-white d-flex p-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end col-12 col-lg-6'>
                            <MDBCol size='4' className='d-flex col-6 col-lg-4'>
                                <h4 className='m-auto'>05</h4>
                                <MDBCardImage src={g} className='img-fluid m-auto hotimg'></MDBCardImage>
                            </MDBCol>
                            <MDBCol size='4' className='col-6 col-lg-4'>
                                <p className='text-center'>Voxie Tactics Items</p>
                                <div className='d-flex'>
                                    <h6>Start</h6>  <h6 className='ms-5'>$298</h6>
                                </div>

                                <div className='d-flex'>
                                    <p>Volume</p>  <p className='ms-5'>$21</p>
                                </div>
                                <div>
                                <MDBBtn rounded color='light' className='dtg d-lg-none d-sm-block'>38.25%</MDBBtn>
                                </div>

                            </MDBCol>
                            <MDBCol size='4' className='text-center mt-4 col-6 col-lg-4'>
                                <MDBBtn rounded color='light' className='d-lg-block d-sm-none'>38.25%</MDBBtn>
                            </MDBCol>
                        </MDBCol>
                       
                        <MDBCol size='6' className='text-white d-flex p-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end col-12 col-lg-6'>
                            <MDBCol size='4' className='d-flex col-6 col-lg-4'>
                                <h4 className='m-auto'>06</h4>
                                <MDBCardImage src={h} className='img-fluid m-auto hotimg'></MDBCardImage>
                            </MDBCol>
                            <MDBCol size='4' className='col-6 col-lg-4'>
                                <p className='text-center'>Voxie Tactics Items</p>
                                <div className='d-flex'>
                                    <h6>Start</h6>  <h6 className='ms-5'>$989</h6>
                                </div>

                                <div className='d-flex'>
                                    <p>Volume</p>  <p className='ms-5'>$121</p>
                                </div>

                                <div>
                                <MDBBtn rounded color='light' className='dtg d-lg-none d-sm-block'>28.25%</MDBBtn>
                                </div>

                            </MDBCol>
                            <MDBCol size='4' className='text-center mt-4 col-6 col-lg-4'>
                                <MDBBtn rounded color='light' className='d-lg-block d-sm-none'>28.25%</MDBBtn>
                            </MDBCol>
                        </MDBCol>
                        


                    </MDBRow>
                    </MDBCol>




                </MDBContainer>
            </div>



        </>
    )
}
