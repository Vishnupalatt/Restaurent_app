import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <div >
            <div className='bg-light' style={{ height: '100%', width: '100%' }}>
                <Row className='p-5'>
                    <Col md='4' className=' d-flex justify-content-center mt-4  '>
                        <div className=' d-flex flex-column '>
                            <h5 className='mb-3'>Get to Know Us</h5>
                            <a className='text-black text-decoration-none' href="">About Us</a>
                            <a className='text-black text-decoration-none' href="">Careers</a>
                            <a className='text-black text-decoration-none' href="">Press Releases</a>
                            {/* <a className='text-black text-decoration-none' href="">NexCarta Science</a> */}
                        </div>
                    </Col>
                    <Col md='4' className=' d-flex justify-content-center mt-4 '>
                        <div className=' d-flex flex-column'>
                            <h5 className='mb-3'>Connect with Us</h5>
                            <a className='text-black text-decoration-none' href="">Facebook</a>
                            <a className='text-black text-decoration-none' href="">Twitter</a>
                            <a className='text-black text-decoration-none' href="">Instagram</a>
                        </div>
                    </Col>
                    <Col md='4' className=' d-flex justify-content-center mt-4'>
                        <div className=' d-flex flex-column me-4'>
                            <h5 className='mb-3 '>Guides </h5>
                            <a href='https://react.dev/' target='blank' className='text-black text-decoration-none' >React</a>
                            <a href='https://react-bootstrap.netlify.app/' target='blank' className='text-black text-decoration-none '>React-Bootstrap</a>
                            <a href='https://fontawesome.com/' target='blank' className='text-black text-decoration-none '>Font Awesome</a>
                        </div>
                    </Col>
                </Row>

            </div>

            <div className='bg-dark' ></div>
            <div style={{ height: '100%', width: '100%', backgroundColor: '#3d4045' }} >
                <p className='text-center text-white  p-5' style={{ fontSize: '12px', wordSpacing: '8px' }}>Australia  Brazil  Canada  China  France Germany  Italy  Japan  Mexico  Netherlands  Poland  Singapore  spain  Turkey  United Arab Emirates <br />United Kingdom  United States</p>
                <p className='text-center text-white p-2 '>Conditions of Use & Sale
                    Privacy Notice
                    Interest-Based Ads <br />
                    © 1996-2023, Restaurents, Inc. or its affiliates</p>
            </div>
        </div>



    )
}

export default Footer