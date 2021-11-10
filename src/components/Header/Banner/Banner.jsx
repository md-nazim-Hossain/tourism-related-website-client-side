import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bg-slider mt-5 pt-3' id="home">
           <div className="overlay">
                <Container className='z-index'>
                    <Row md={2} sm={2}>
                        <Col xm={12} sm={10} md={8}>
                                <div className='d-flex justify-content-center align-items-center py-2'>
                                    <div className='pb-5'>
                                        <h3 className='py-5 text-light'><span className="header-super-title pb-4">WE ARE INSPIRING FOR TOUR</span></h3>
                                        <h1 className='header-title common-color common-font'>Booking Now For</h1>
                                        <h1 className='header-sub-title text-light'> Enjoyble Tour</h1>
                                        <p className='text-success common-font py-3'>Put on your travelling shoes and bask under the clear blue skies for a delightful vacation by going beyond the well-trodden path to underrated travel destinations that offer more than most vacation hotspots.</p>
                                        <Button className='btn-common rounded-pill common-bg mt-2 btn-hover' variant='transparent me-5'>Tour Now</Button>
                                        <HashLink to='/home#services'>
                                            <Button variant='dark' className='btn-common rounded-pill mt-2'>View Our Service</Button>
                                        </HashLink>
                                    </div>
                                </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
           </div>
        </div>
    );
};

export default Banner;