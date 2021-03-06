import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import MyBooking from '../../MyBooking/MyBooking';

const ManageAllBookings = () => {
    const [manageBookings,setManageBookings] = useState([]);

    // get manage all Bookings
    useEffect(() =>{
        fetch('https://salty-taiga-78312.herokuapp.com/manageBookings')
        .then(res => res.json())
        .then(data => setManageBookings(data));
    },[]);

    if(!manageBookings.length){
        return <div className="text-center p-5 my-5">
                <Spinner animation="grow" />
            </div>
    }
    return (
        <div className="mb-5">
            <Helmet>
                <title>Travel & Tour | Manage All Bookings</title>
            </Helmet>
            <Container>
               <h2 className="py-5 text-center">Manage All <span className="common-color">Bookings</span></h2>
                <Table striped bordered hover responsive className='p-2' size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country Name</th>
                            <th>Gmail</th>
                            <th>Phone NO.</th>
                            <th>Passport Number</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            manageBookings.map(booking => <MyBooking
                                    key = {booking._id}
                                    booking = {booking}
                                    setMyBookings={setManageBookings}
                                    myBookings={manageBookings}
                                    statusId={1}
                            ></MyBooking>)
                        }
                    </tbody>
                </Table>
           </Container>
        </div>
    );
};

export default ManageAllBookings;