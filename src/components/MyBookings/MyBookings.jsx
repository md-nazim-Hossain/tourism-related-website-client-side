import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
import MyBooking from '../MyBooking/MyBooking';

const MyBookings = () => {
    const [myBookings,setMyBookings] = useState([]);
    const {user} = useAuth();
    const email = user.email;

    useEffect(() =>{
        fetch(`https://salty-taiga-78312.herokuapp.com/myBookings/${email}`)
        .then(res => res.json())
        .then(data => setMyBookings(data));
    },[]);

    if(!myBookings.length){
        return <div className="text-center p-5 my-5">
                <Spinner animation="grow" />
            </div>
    }

    return (
        <div className="mb-5">
            <Helmet>
                <title>Green Tourism | My Booking</title>
            </Helmet>
            <Container>
               <h2 className="py-5 text-center">My <span className="common-color">Bookings</span></h2>
                <Table striped bordered hover responsive className='p-2' size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country Name</th>
                            <th>Gmail</th>
                            <th>Phone No.</th>
                            <th>Passport Number</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            myBookings.map(booking => <MyBooking
                                    key = {booking._id}
                                    booking = {booking}
                                    setMyBookings={setMyBookings}
                                    myBookings={myBookings}
                                    statusId={0}
                            ></MyBooking>)
                        }
                    </tbody>
                </Table>
           </Container>
        </div>
    );
};

export default MyBookings;