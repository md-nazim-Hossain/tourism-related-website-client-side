import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import MyBooking from '../../MyBooking/MyBooking';

const ManageAllBookings = () => {
    const [manageBookings,setManageBookings] = useState([]);

    // get manage all Bookings
    useEffect(() =>{
        fetch('http://localhost:5000/manageBookings')
        .then(res => res.json())
        .then(data => setManageBookings(data));
    },[]);

    return (
        <div className="mb-5">
            <Helmet>
                <title>Travel & Tour | Manage All Bookings</title>
            </Helmet>
            <Container>
               <h2 className="py-5 text-center">Manage All <span className="common-color">Bookings</span></h2>
                <Table striped bordered hover className='p-2'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country Name</th>
                            <th>Gmail</th>
                            <th>Passport Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            manageBookings.map(booking => <MyBooking
                                    key = {booking._id}
                                    booking = {booking}
                                    setMyBookings={setManageBookings}
                                    myBookings={manageBookings}
                            ></MyBooking>)
                        }
                    </tbody>
                </Table>
           </Container>
        </div>
    );
};

export default ManageAllBookings;