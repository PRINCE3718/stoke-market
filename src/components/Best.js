import React from 'react'
import z from "./img/BEST AUTHORS/56c86f42338ebaca99d0c2875a50494a 1.png"
import x from "./img/BEST AUTHORS/56c86f42338ebaca99d0c2875a50494a 2.png"
import c from "./img/BEST AUTHORS/56c86f42338ebaca99d0c2875a50494a 3.png"
import v from "./img/BEST AUTHORS/56c86f42338ebaca99d0c2875a50494a 4.png"
import b from "./img/icon/56c86f42338ebaca99d0c2875a50494a 5.png"
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit'


export default function Best() {
    
    return (
        <>



            <MDBContainer fluid>

                <h3 className='text-white my-'>BEST AUTHORS</h3>
                <MDBCol className='col-lg-12 col-sm-12 my-1'>
                    <MDBRow>
                       
                    <MDBCol size={12} className='d-flex my-5 text-white text-center col-12 col-lg-12'>
                    <MDBCol size={3} className='col-4 col-lg-3'>
                        <img src={z} className='img-fluid c-1'/>
                        <h5>Travis Ragsdale</h5>
                        <p>$2,000,000+</p>

                    </MDBCol>

                    <MDBCol size={3} className='col-4 col-lg-3'>
                        <img src={x} className='img-fluid c-1'/>
                        <h5>Ballies</h5>
                        <p>$2,000,000+</p>
                    </MDBCol>

                    <MDBCol size={3} className='col-4 col-lg-3'>
                        <img src={c} className='img-fluid c-1'/>
                        <h5 >DaRealGenius</h5>
                        <p>$2,000,000+</p>
                    </MDBCol>
                    
                    

                    

                </MDBCol> 

                    
                </MDBRow>
            </MDBCol>



            <h3 className='text-white BROWSE-BY'>BROWSE BY CATEGORY</h3>

            <MDBCol className=' col-lg-12 col-sm-12 my-2'>
                <MDBRow>

                    <MDBCol size={6} className='d-flex text-center bg-info bg-opacity-10 border border-info border-start-0 rounded-end best col-12 col-lg-6'>
                        <MDBCol size={4} className='col-6 col-lg-4'>
                            <h5>ACCESS</h5>
                        </MDBCol>

                        <MDBCol size={4}>
                            <h1>01</h1>
                        </MDBCol>
                    </MDBCol>

                    <MDBCol size={6} className='d-flex text-center bg-info bg-opacity-10 border border-info border-start-0 rounded-end best col-12 col-lg-6'>
                        <MDBCol size={4} className='col-6 col-lg-4'>
                            <h5>AVATARS</h5>
                        </MDBCol>

                        <MDBCol size={4}>
                            <h1>02</h1>
                        </MDBCol>
                    </MDBCol>

                    <MDBCol size={6} className='d-flex text-center bg-info bg-opacity-10 border border-info border-start-0 rounded-end best col-12 col-lg-6'>
                        <MDBCol size={4} className='col-6 col-lg-4'>
                            <h5>TRADING CARDS</h5>
                        </MDBCol>

                        <MDBCol size={4} className='col-6 col-lg-4'>
                            <h1>03</h1>
                        </MDBCol>
                    </MDBCol>


                    <MDBCol size={6} className='d-flex text-center bg-info bg-opacity-10 border border-info border-start-0 rounded-end best col-12 col-lg-6'>
                        <MDBCol size={4} className='col-6 col-lg-4'>
                            <h5>DIGIPHYSICAL GOODS</h5>
                        </MDBCol>

                        <MDBCol size={4} className='col-6 col-lg-4'>
                            <h1>04</h1>
                        </MDBCol>
                    </MDBCol>

                    <MDBCol size={6} className='d-flex text-center bg-info bg-opacity-10 border border-info border-start-0 rounded-end best col-12 col-lg-6'>
                        <MDBCol size={4} className='col-6 col-lg-4'>
                            <h5>VIRTUAL WORLDS</h5>
                        </MDBCol>

                        <MDBCol size={4} className='col-6 col-lg-4'>
                            <h1>05</h1>
                        </MDBCol>
                    </MDBCol>

                    <MDBCol size={6} className='d-flex text-center bg-info bg-opacity-10 border border-info border-start-0 rounded-end best col-12 col-lg-6'>
                        <MDBCol size={4} className='col-6 col-lg-4'>
                            <h5>ART & MEDIA</h5>
                        </MDBCol>

                        <MDBCol size={4} className='col-6 col-lg-4'>
                            <h1>06</h1>
                        </MDBCol>
                    </MDBCol>

                </MDBRow>
            </MDBCol>

        </MDBContainer >
    
    </>
  )
}
