import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Form, Row,Button, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const {id} = useParams();
    const [service,setService] = useState({});
    const {user} = useAuth();

    //collect the details from form
    const nameRef = useRef();
    const countryNameRef = useRef();
    const passportRef = useRef();
    const emailRef = useRef();
    const dateRef = useRef();
    const messageRef = useRef();

    useEffect(()=>{
        const url =`http://localhost:5000/services/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));
    },[]);

    if(!service._id){
        return <div className="text-center p-5 my-5">
                    <Spinner animation="grow" />
                </div>
    }
    const {name,title,img,price,description} = service;

    const handleMyOrder = e =>{
       const name = nameRef.current.value;
       const countryName = countryNameRef.current.value;
       const passportNumber = passportRef.current.value;
       const email = emailRef.current.value;
       const date = dateRef.current.value;
       const message = messageRef.current.value;

       const myBooking = {name,countryName,passportNumber,email,date,message};

       // post data to server
       fetch('http://localhost:5000/booking',{
           method:"POST",
           headers:{
               "content-type":"application/json"
           },
           body:JSON.stringify(myBooking)
       })
       .then(res => res.json())
       .then(data =>{
           if(data.insertedId){
               alert("Welcome "+name+" Your are Successfully Booking");
                nameRef.current.value = '';
                countryNameRef.current.value = '';
                passportRef.current.value = '';
                emailRef.current.value = '';
                dateRef.current.value = '';
                messageRef.current.value = '';
           }
       })

        e.preventDefault();
    }

    return (
        <Container id="booking">
            <Helmet>
                <title>Green Tourism | Booking Now</title>
            </Helmet>
            <Row md={1}>
                <Col xs={12} sm={10} md={7}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <p className='py-5'> <span className='header-super-title pb-4'>GET THE BOOKING FOR EXCLUSIVE TOUR</span></p>
                            <p className='title'>Booking For<span className='header-title common-color common-font'><br/> World Tour</span></p>
                            <p className='text-muted fs-5'>{description}</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row xm={1} sm={1} md={2} className='py-4'>
                <Col xm={6} sm={6} md={4}>
                   <div className='py-5'>
                        <img src={img} alt="Tour Place Images" className='img-fluid'/>
                        <h2 className="text-center common-color">{title}</h2>
                   </div>
                   <div>
                       <p className='d-flex justify-content-start align-items-center border-bottom py-2'>
                           <div className='pe-5'>
                                <i className="fas fa-mobile-alt fs-1 common-color"></i>
                           </div>
                           <div>
                               <h5>COST OF TOUR</h5>
                               <span className='common-color'>${price}</span>
                           </div>
                       </p>
                       <p className='d-flex justify-content-start align-items-center border-bottom py-2'>
                           <div className='pe-5'>
                                <i className="fas fa-mobile-alt fs-1 common-color"></i>
                           </div>
                           <div>
                               <h5>CALL US ANYTIME</h5>
                               <span>0-800-2336-7820</span>
                           </div>
                       </p>
                       <p className='d-flex justify-content-start align-items-center border-bottom py-4'>
                           <div className='pe-5'>
                                <i className="fas fa-map-marker-alt common-color fs-1"></i>
                           </div>
                           <div>
                               <h5>VISIT US ANYTIME</h5>
                               <span>Nova Tower,Mohakhali,Dhaka-1208</span>
                           </div>
                       </p>
                       <p className='d-flex justify-content-start align-items-center border-bottom py-4'>
                           <div className='pe-5'>
                                <i className="far fa-heart fs-1 common-color"></i>
                           </div>
                           <div>
                               <h5>BOOKING FOR TOUR</h5>
                               <span>Click here to Booking Button</span>
                           </div>
                       </p>
                   </div>
                </Col>
                <Col xm={6} sm={6} md={8}>
                    <div className='pt-5 ps-4'>
                        <p className='text-muted text-start border-left ps-2'> red denotes are required</p>
                        <Form onSubmit={handleMyOrder}>
                            <Form.Group className="mb-4" controlId="formGroupName">
                                <Form.Label>Your Full Name</Form.Label>
                                <Form.Control type="text" ref={nameRef} value={user.displayName} required className='input-bg border-right p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupCountry">
                                <Form.Label>Tour Country</Form.Label>
                                <Form.Control type="text" ref={countryNameRef} value={name} required className='input-bg border-right p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupPassport">
                                <Form.Label>Your Passport Number</Form.Label>
                                <Form.Control type="text" ref={passportRef} placeholder="Enter Passport Number" required className='input-bg border-right p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" ref={emailRef} value={user.email} required className='input-bg border-right p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupDoctor">
                                <Form.Label>Select Booking date</Form.Label>
                                <Form.Control type="date" ref={dateRef} className='input-bg border-right p-2'/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupDoctor">
                            <Form.Label>Additional Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '120px' }} className='input-bg'
                                ref={messageRef}
                                />
                            </Form.Group>
                            <Button className='btn-common rounded-pill common-bg mt-2 btn-hover' variant='transparent' type="submit">Booking Now</Button>
                        </Form>
                        <NavHashLink to='/home#services'><Button variant='dark' className='mt-2 rounded-pill'>Back to Service</Button></NavHashLink>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;