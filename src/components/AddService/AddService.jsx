import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const AddService = () => {
    const nameRef = useRef();
    const titleRef = useRef();
    const costRef = useRef();
    const urlRef = useRef();
    const descriptionRef = useRef();

    const handleAddService = e =>{
        const name = nameRef.current.value;
        const title = titleRef.current.value;
        const cost = costRef.current.value;
        const url = urlRef.current.value;
        const description = descriptionRef.current.value;

        const newService = {name:name,title:title,price:cost,img:url,description:description};

        // post data to server
        fetch('https://salty-taiga-78312.herokuapp.com/addService',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("Successfully Addeded Service to Database");
                nameRef.current.value = '';
                titleRef.current.value = '';
                costRef.current.value = '';
                urlRef.current.value = '';
                descriptionRef.current.value = '';
            }
        });

        e.preventDefault();
    }
    return (
        <div id="addService">
            <Helmet>
                <title>Travel & Tour | Add-Service</title>
            </Helmet>
            <Container className='my-5 pb-5'>
                <h2 className='py-5 text-center'>Please Add <span className='common-color'>Service</span></h2>
                <p className='text-muted text-start ps-2 border-left'> red denotes are required</p>
                <Form onSubmit={handleAddService}>
                    <Row xm={1} sm={1} md={2}>
                        <Col>
                            <Form.Control placeholder="Country Name" ref={nameRef} className='mb-3 border-right' required/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Tour Place Name" ref={titleRef} className='mb-3 border-right' required/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Tour Cost" ref={costRef} className='mb-3 border-right' required/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Tour Img Url" ref={urlRef} className='mb-3 border-right' required/>
                        </Col>
                        <Col>
                            <Form.Control
                                as="textarea"
                                placeholder="Write Description About Tour Related border-right"
                                style={{ height: '100px' }}
                                className='mb-3 border-right'
                                required
                                ref={descriptionRef}
                                />
                        </Col>
                        <Col>
                            <Button type='submit' className='btn-common common-bg mt-2 btn-hover' variant='transparent'>Add Service</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default AddService;