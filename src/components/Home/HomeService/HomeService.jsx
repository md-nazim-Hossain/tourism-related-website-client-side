import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';

const HomeService = ({service}) => {
    const{_id,name,img,description,title,price} = service;
    const link = `/book/${_id}#booking`;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} style={{height:'300px'}}/>
                <Card.Body>
                <Card.Title>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2 className="text-uppercase text-start d-inline">{name}</h2>                        
                        <h4 className="common-color">Cost: ${price}</h4>                        
                    </div>
                    <h4>{title}</h4>
                </Card.Title>
                <Card.Text>
                    {
                        description
                    }
                </Card.Text>
                </Card.Body>
               <div className='d-flex justify-content-center py-3'>
                    <NavHashLink to={link}><Button variant="success" >Book Now</Button></NavHashLink>
               </div>
            </Card>
        </Col>
    );
};

export default HomeService;