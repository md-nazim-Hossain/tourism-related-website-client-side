import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const [services,setServices] = useState([]);

    useEffect(() =>{
        fetch('https://salty-taiga-78312.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    
    if(!services.length){
        return <div className="text-center p-5">
                <Spinner animation="grow" />
            </div>
    }
    return (
        <Container className="py-5" id="services">
            <div className='text-center w-75 py-3 mx-auto'>
                <h1 className='py-2'>All Our <span className="common-color common-font">Services</span></h1>
                <p className="common-color common-font">We are provided world top Tourist spot visite and we are provided package.Our Package have Up down air ticket Five star hotel for 2 days 3 night and spot visit</p>
            </div>
            <Row xs={1} sm={2} md={3} className="g-4">
                {
                    services.map(service => <HomeService
                        key={service._id}
                        service={service}
                    ></HomeService>)
                }
                
            </Row>
        </Container>
    );
};

export default HomeServices;